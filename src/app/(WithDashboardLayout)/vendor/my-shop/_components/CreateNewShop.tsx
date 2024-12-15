"use client";

import MinusSVG from "@/src/assets/icons/MinusSVG";
import PlusSVG from "@/src/assets/icons/PlusSVG";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXTextArea from "@/src/components/form/FXTextArea";
import { useCreateNewShop } from "@/src/hooks/shop.hook";
import { Button } from "@nextui-org/button";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateNewShop = () => {
  const [itemImage, setItemImage] = useState<File | undefined>(undefined);
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined
  );

  const { mutate: handleCreateNewShop } = useCreateNewShop();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    const formData = new FormData();
    const shopData = {
      ...data,
    };

    formData.append("data", JSON.stringify(shopData));

    formData.append("logo", itemImage as File);

    handleCreateNewShop(formData);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setItemImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <FXForm
        onSubmit={onSubmit}
        // resolver={zodResolver(loginValidationSchema)}
      >
        <div className="space-y-6 max-w-xl mx-auto">
          {/* //? Images  */}
          <div>
            <div className="flex items-center justify-center">
              {imagePreview ? (
                <div className="bg-default-100 size-32 ring ring-default-200 rounded-lg relative">
                  <img
                    alt="item"
                    className="size-full object-contain object-center rounded-xl"
                    src={imagePreview}
                  />

                  <Button
                    className="absolute -right-2.5 -top-2.5"
                    isIconOnly
                    radius="full"
                    size="sm"
                    color="danger"
                    onClick={() => {
                      setItemImage(undefined);
                      setImagePreview(undefined);
                    }}
                  >
                    <MinusSVG />
                  </Button>
                </div>
              ) : (
                <></>
              )}

              {!itemImage && (
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

            <h3 className="text-center my-3">Shop Logo</h3>
          </div>

          <FXInput name="name" label="Your Shop Name" />

          <FXTextArea name="description" label="Description" />

          <Button className="w-full" size="md" type="submit">
            Create My Shop
          </Button>
        </div>
      </FXForm>
    </div>
  );
};

export default CreateNewShop;
