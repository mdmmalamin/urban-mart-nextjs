"use client";

import { Button } from "@nextui-org/button";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import MinusSVG from "@/src/assets/icons/MinusSVG";
import PlusSVG from "@/src/assets/icons/PlusSVG";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXTextArea from "@/src/components/form/FXTextArea";
import { useCreateNewShop } from "@/src/hooks/shop.hook";

const CreateNewShop = () => {
  const [itemImage, setItemImage] = useState<File | undefined>(undefined);
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined,
  );

  const { mutate: handleCreateNewShop } = useCreateNewShop();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // // console.log(data);

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
                    isIconOnly
                    className="absolute -right-2.5 -top-2.5"
                    color="danger"
                    radius="full"
                    size="sm"
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

            <h3 className="text-center my-3">Shop Logo</h3>
          </div>

          <FXInput label="Your Shop Name" name="name" />

          <FXTextArea label="Description" name="description" />

          <Button className="w-full" size="md" type="submit">
            Create My Shop
          </Button>
        </div>
      </FXForm>
    </div>
  );
};

export default CreateNewShop;
