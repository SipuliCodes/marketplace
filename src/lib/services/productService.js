import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  paginateQuery,
  paginateScan,
  PutCommand,
} from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({});

const docClient = DynamoDBDocumentClient.from(client);

const s3Client = new S3Client({});

export const queryProducts = async (category) => {
  if (!category) {
    const scanParams = {
      TableName: 'marketplace',
      Limit: 20,
    };

    const paginator = paginateScan({ client: docClient }, scanParams);

    const items = [];
    for await (const page of paginator) {
      items.push(...page.Items);
    }
    return items;
  } else {
    const queryParams = {
      TableName: 'marketplace',
      Limit: 20,
      KeyConditionExpression: 'category = :category',
      ExpressionAttributeValues: { ':category': category },
    };
    const paginator = paginateQuery({ client: docClient }, queryParams);

    const items = [];
    for await (const page of paginator) {
      items.push(...page.Items);
    }
    return items;
  }
};

const generatePicID = (productName) => {
  return `${productName.replace(/\s+/g, '')}_${uuidv4()}`;
};

const sanitizeData = (data) => {
  const sanitized = {};
  for (const key in data) {
    if (typeof data[key] === 'string') {
      sanitized[key] = data[key].replace(/^"(.*)"$/, '$1');
    } else {
      sanitized[key] = data[key];
    }
  }
  return sanitized;
};

const uploadProductPic = async (file, productName) => {
  try {
    const key = generatePicID(productName);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const input = {
      Body: buffer,
      Bucket: 'marketplace-product-pics',
      Key: key,
      ContentType: file.type,
    };

    const command = new PutObjectCommand(input);
    await s3Client.send(command);

    return key;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

const addProductDetails = async (data) => {
  const params = {
    TableName: 'marketplace',
    Item: data,
  };

  try {
    await docClient.send(new PutCommand(params));
  } catch (error) {
    console.log('Error saving product: ', error);
    throw new Error("Adding product details failed")
  }
};

export const handleAddProduct = async (pics, productData) => {
  try {
    const data = sanitizeData(productData);
    const picKeys = await Promise.all(
    pics.map(async (pic) => {
      return uploadProductPic(pic, data.name);
    })
    );

    data.pics = picKeys;
    data.product_id = uuidv4();

    await addProductDetails(data);
    return {success: true}
  } catch (error) {
    console.log(error)
    return {success: false, error: error.message}
  }
};
