import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, paginateQuery, paginateScan } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const docClient = DynamoDBDocumentClient.from(client);

export const queryProducts = async (category) => {

  if (!category) {
    const scanParams = {
      TableName: 'marketplace',
      Limit: 20,
    };

    const paginator = paginateScan({ client: docClient }, scanParams)
    
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
    const paginator = paginateQuery(
      { client: docClient },
      queryParams
    );

    const items = [];
    for await (const page of paginator) {
      items.push(...page.Items);
    }
    return items;
  }
}