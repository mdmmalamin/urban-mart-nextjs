"use client";

import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { EditSVG } from "@/src/assets/icons/SVGicons";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXSelect from "@/src/components/form/FXSelect";
import FXTextArea from "@/src/components/form/FXTextArea";
import FXModal from "@/src/components/ui/FXModal";
import { useCategories } from "@/src/hooks/categories.hook";
import { useGetProduct, useUpdateProduct } from "@/src/hooks/product.hook";

const ProductEditModal = ({ productId }: { productId: string }) => {
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useCategories();

  let categoryOptions: { key: string; label: string }[] = [];

  if (categoryData?.data && !categoryLoading && categorySuccess) {
    categoryOptions = categoryData.data.map(
      ({ id, name }: { id: string; name: string }) => ({
        key: id,
        label: name.toUpperCase(),
      }),
    );
  }

  const { mutate: handleUpdateProduct } = useUpdateProduct();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const updateData = {
      id: productId,
      price: Number(data.price),
      ...data,
    };

    handleUpdateProduct(updateData);
  };

  const { data: product } = useGetProduct(productId);

  return (
    <div>
      <FXModal
        isIconOnly
        buttonClassName="text-sm text-default-500 hover:text-default-900"
        buttonText={<EditSVG />}
        isDismissable={false}
        title="Are you sure you want to edit this product?"
      >
        <span className="text-sm">
          Any changes you make will be saved and reflected immediately.
        </span>
        <FXForm
          onSubmit={onSubmit}
          // resolver={zodResolver(loginValidationSchema)}
        >
          <div className="space-y-3">
            <FXInput
              defaultValue={product?.data?.name}
              label="Product Title"
              name="name"
            />
            <FXInput
              defaultValue={product?.data?.price}
              label="Price"
              name="price"
            />

            <FXSelect
              defaultSelectedKeys={[product?.data?.category?.id]}
              defaultValue={product?.data?.category?.name}
              isDisabled={!categorySuccess}
              label="Category"
              name="categoryId"
              options={categoryOptions}
              placeholder="Select a category"
            />

            <FXTextArea
              defaultValue={product?.data?.description}
              label="Description"
              name="description"
            />

            <Button
              className="w-full mb-6"
              color="secondary"
              size="md"
              type="submit"
            >
              Update
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default ProductEditModal;
