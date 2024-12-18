"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import MinusSVG from "@/src/assets/icons/MinusSVG";
import PlusSVG from "@/src/assets/icons/PlusSVG";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXTextArea from "@/src/components/form/FXTextArea";
import Loading from "@/src/components/ui/Loading";
import { useCategories } from "@/src/hooks/categories.hook";
import { useCreateProduct } from "@/src/hooks/product.hook";
import { publishedProductValidationSchema } from "@/src/schemas/product.schemas";
import FXSelectControlled from "@/src/components/form/FXSelectControlled";

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

  const { mutate: handleCreateProduct, isPending: createProductPending } =
    useCreateProduct();

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
          resolver={zodResolver(publishedProductValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <FXInput isRequired label="Product Title" name="name" />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXInput isRequired label="Price" name="price" />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXInput isRequired label="Quantity" name="quantity" />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXSelectControlled
                isRequired
                isDisabled={!categorySuccess}
                label="Category"
                name="categoryId"
                options={categoryOptions}
                placeholder="Select a category"
                onChange={(e) => setCategoryId(e.target.value)}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXSelectControlled
                isRequired
                label="Status"
                name="status"
                options={[
                  { key: "DRAFTED", label: "DRAFTED" },
                  { key: "PUBLISHED", label: "PUBLISHED" },
                ]}
                placeholder="Select a status"
                onChange={(e) => {
                  setSelectedStatus(e.target.value as "DRAFTED" | "PUBLISHED");
                }}
              />
            </div>

            <div className="col-span-2">
              <FXTextArea isRequired label="Description" name="description" />
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
                      className="bg-default-100 size-32 ring ring-default-200 rounded-lg cursor-pointer inline-block"
                      htmlFor="image"
                    >
                      <PlusSVG className="mx-auto my-auto h-full size-12" />
                    </label>
                    <input
                      multiple
                      className="hidden"
                      id="image"
                      type="file"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </>
                )}
              </div>
            </div>

            <Button
              className="w-full col-span-2"
              color="success"
              size="md"
              type="submit"
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
