"use client";

import MinusSVG from "@/src/assets/icons/MinusSVG";
import PlusSVG from "@/src/assets/icons/PlusSVG";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXSelect from "@/src/components/form/FXSelect";
import FXTextArea from "@/src/components/form/FXTextArea";
import Loading from "@/src/components/ui/Loading";
import { useCategories } from "@/src/hooks/categories.hook";
import { useCreateProduct } from "@/src/hooks/product.hook";
import {
  draftedProductValidationSchema,
  publishedProductValidationSchema,
} from "@/src/schemas/product.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateNewProduct = () => {
  const [itemImages, setItemImages] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [selectedStatus, setSelectedStatus] = useState<
    "DRAFTED" | "PUBLISHED" | undefined
  >(undefined);
  const [categoryId, setCategoryId] = useState("");
  // const { user } = useUser();
  // const router = useRouter();

  const {
    data: categoryData,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useCategories();

  const {
    mutate: handleCreateProduct,
    isPending: createProductPending,
    isSuccess: createProductSuccess,
  } = useCreateProduct();

  let categoryOptions: { key: string; label: string }[] = [];
  if (categoryData?.data && !categoryLoading && categorySuccess) {
    categoryOptions = categoryData.data.map(
      ({ id, name }: { id: string; name: string }) => ({
        key: id,
        label: name.toUpperCase(),
      })
    );
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    console.log(data);

    const productData = {
      name: data.name,
      price: +data.price,
      quantity: +data.quantity,
      categoryId,
      description: data.description,
      status: selectedStatus,
    };

    formData.append("data", JSON.stringify(productData));

    for (let image of itemImages) {
      formData.append("images", image);
    }

    console.log(formData.get("data"));
    console.log(formData.get("images"));

    handleCreateProduct(formData);

    console.log(productData);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setItemImages((prev) => [...prev, file]);

    if (file && itemImages.length < 3) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  // const handleImageRemove = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files![0];

  //   const updated = itemImages.filter((item) => item !== file);

  //   setItemImages(updated);
  // };

  // if (!createPostPending && createPostSuccess) router.push("/");

  return (
    <>
      {createProductPending && <Loading />}
      <section className="sm:p-6">
        <h1 className="text-xl font-bold text-center">Add New Product</h1>

        <FXForm
          onSubmit={onSubmit}
          resolver={zodResolver(publishedProductValidationSchema)}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <FXInput name="name" label="Product Title" isRequired />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXInput name="price" label="Price" isRequired />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXInput name="quantity" label="Quantity" isRequired />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXSelect
                name="categoryId"
                label="Category"
                placeholder="Select a category"
                options={categoryOptions}
                isDisabled={!categorySuccess}
                isRequired
                onChange={(e) => setCategoryId(e.target.value)}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXSelect
                name="status"
                label="Status"
                placeholder="Select a status"
                options={[
                  { key: "DRAFTED", label: "DRAFTED" },
                  { key: "PUBLISHED", label: "PUBLISHED" },
                ]}
                onChange={(e) => {
                  setSelectedStatus(e.target.value as "DRAFTED" | "PUBLISHED");
                }}
                isRequired
              />
            </div>

            <div className="col-span-2">
              <FXTextArea name="description" label="Description" isRequired />
            </div>

            {/* //? Images  */}
            <div className="col-span-2 space-y-3 py-6">
              <div className="flex flex-wrap gap-4">
                {imagePreview?.length > 0 &&
                  imagePreview.map((imageDataURL, idx) => (
                    <div
                      key={idx}
                      className="bg-default-100 size-32 ring ring-default-200 rounded-lg cursor-pointer relative"
                    >
                      <img
                        alt="item"
                        className="size-full object-contain object-center rounded-lg"
                        src={imageDataURL}
                      />

                      <span
                        className="bg-danger-500 absolute -top-2 -right-2 rounded-full hover:bg-danger-300 duration-300"
                        // onChange={(e) => handleImageRemove(e)}
                      >
                        <MinusSVG />
                      </span>
                    </div>
                  ))}

                {itemImages.length < 3 && (
                  <>
                    <label
                      htmlFor="image"
                      className="bg-default-100 size-32 ring ring-default-200 rounded-lg cursor-pointer inline-block"
                    >
                      <PlusSVG className="mx-auto my-auto h-full size-12" />
                    </label>
                    <input
                      multiple
                      type="file"
                      id="image"
                      className="hidden"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </>
                )}
              </div>
            </div>

            <Button
              className="w-full col-span-2"
              size="md"
              type="submit"
              color="success"
            >
              Create
            </Button>
          </div>
        </FXForm>
      </section>
    </>
  );
};

export default CreateNewProduct;

// {
//   "categoryId": "9d8050b8-6ddc-4c0c-b7eb-b9bc9f954ceb",

//   "status": "PUBLISHED",

// }
