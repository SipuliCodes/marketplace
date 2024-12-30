"use client";

import { useForm, useFieldArray } from "react-hook-form";
import Image from "next/image";
import Select from 'react-select';
import { categories } from "@/data/categories";

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: 'var(--select-border-color)',
    backgroundColor: 'var(--select-background)',
    color: 'var(--foreground)',
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      borderColor: 'var(--select-border-color)',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'var(--select-background)',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'var(--hover-color)' : 'transparent',
    color: !state.isFocused ? 'var(--foreground)' : 'var(--text-hover-color)',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--foreground)',
  }),
};


const SellProduct = () => {
  const categoryOptions = categories.map(category => ({
  value: category.id,
  label: category.name,
  }));
  
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      category: "",
      location: "",
      pics: [],
      name: "",
      description: "",
      price: "",
      attributes: []
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "attributes",
  })

  const { fields: picFields, append: appendPic, remove: removePic} = useFieldArray({
    control,
    name: "pics"
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleUpload = (e) => {
    const files = Array.from(e.target.files)
    files.forEach((file) => {
      const objectUrl = URL.createObjectURL(file);
      appendPic({file, preview: objectUrl})
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 mx-auto space-y-4 sm:w-full md:w-5/6 lg:w-3/4"
    >
      <div>
        <label htmlFor="images">Add Image</label>
        <input
          id="images"
          type="file"
          multiple
          accept=".jpg, .jpeg, .png, .webp,"
          onChange={handleUpload}
          className="block"
        />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 gap-2">
          {picFields.map((field, index) => (
            <div
              key={field.id}
              className="relative overflow-hidden rounded border"
            >
              <Image
                src={field.preview}
                alt={`Preview ${index}`}
                width={240}
                height={240}
                className="object-cover w-full h-full"
              />
              <button
                type="button"
                onClick={() => removePic(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Product Name</label>
        <input
          {...register('name')}
          type="text"
          placeholder="Product name"
          className="w-full border border-black dark:border-white rounded p-2 dark:bg-zinc-700"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          id="description"
          {...register('description')}
          rows={3}
          className="border border-black dark:border-white  rounded p-2 w-full dark:bg-zinc-700"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          {...register('price')}
          type="number"
          min={0}
          placeholder="Price"
          className="w-full border border-black dark:border-white  rounded p-2 dark:bg-zinc-700"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <Select
          options={categoryOptions}
          onChange={(e) => setValue('category', e.value)}
          styles={customSelectStyles}
          isSearchable={false}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          {...register('location')}
          type="text"
          placeholder="Location"
          className="w-full border border-black dark:border-white  rounded p-2 dark:bg-zinc-700"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Custom Attributes</label>
        <div className="space-y-2">
          {fields.map((field, index) => (
            <div key={field.id} className="flex space-x-2 items-center">
              <input
                {...register(`attributes[${index}].key`)}
                placeholder="Attribute Name"
                className="border border-black dark:border-white  rounded p-2 w-1/2 dark:bg-zinc-700"
              />
              <input
                {...register(`attributes[${index}].value`)}
                placeholder="Attribute Value"
                className="border border-black dark:border-white  rounded p-2 w-1/2 dark:bg-zinc-700"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 text-white rounded py-2 px-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => append({ key: '', value: '' })}
          className="bg-blue-500 text-white rounded px-4 py-2 mt-2"
        >
          Add attribute
        </button>
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="bg-green-500 text-white rounded max-w-96 w-full px-4 py-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default SellProduct;