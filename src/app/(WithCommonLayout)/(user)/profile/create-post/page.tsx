"use client";

import MinusSVG from "@/src/assets/icons/MinusSVG";
import PlusSVG from "@/src/assets/icons/PlusSVG";
import { allDistrict } from "@/src/components/form/form.constant";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXInput from "@/src/components/form/FXInput";
import FXSelect from "@/src/components/form/FXSelect";
import FXTextArea from "@/src/components/form/FXTextArea";
import Loading from "@/src/components/ui/Loading";
import { useUser } from "@/src/context/user.provider";
import { useCategories } from "@/src/hooks/categories.hook";
import { useCreatePost } from "@/src/hooks/post.hook";
import { dateToISO } from "@/src/utils";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

type TQuestion = { name: string; value: string };
type TCategory = { key: string; label: string };

const CreatePostPage = () => {
  const [itemImages, setItemImages] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const { user } = useUser();
  const router = useRouter();

  const methods = useForm();
  const { control, handleSubmit, reset } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const {
    data: categoryData,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useCategories({
    name: "fields",
    value: "name",
  });

  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess: createPostSuccess,
  } = useCreatePost();

  let categoryOptions: TCategory[] = [];
  if (categoryData?.data && !categoryLoading && categorySuccess) {
    categoryOptions = categoryData.data.map(
      ({ _id, name }: { _id: string; name: string }) => ({
        key: _id,
        label: name,
      })
    );
  }

  const cityOptions = allDistrict.sort().map((city) => ({
    key: city,
    label: city,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    reset();
    const formData = new FormData();
    const postData = {
      ...data,
      questions: data?.questions?.map((item: TQuestion) => item.value),
      dateFound: dateToISO(data.dateFound),
      user: user!._id,
    };

    formData.append("data", JSON.stringify(postData));

    for (let image of itemImages) {
      formData.append("itemImages", image);
    }

    // console.log(formData.get("data"));
    // console.log(formData.get("itemImages"));

    handleCreatePost(formData);
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

  if (!createPostPending && createPostSuccess) router.push("/");

  return (
    <>
      {createPostPending && <Loading />}
      <section className="sm:p-6">
        <h1 className="text-xl font-bold text-center">Post a found items</h1>

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 items-end gap-4"
          >
            <div className="col-span-2">
              <FXInput name="title" label="Title" required />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXInput name="location" label="Location" required />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXSelect
                name="city"
                label="City"
                placeholder="Select a city"
                options={cityOptions}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXSelect
                name="category"
                label="Category"
                placeholder="Select a category"
                options={categoryOptions}
                isDisabled={!categorySuccess}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FXDatePicker name="dateFound" label="Found Date" />
            </div>

            <div className="col-span-2">
              <FXTextArea name="description" label="Description" />
            </div>

            {/* //? Questions  */}
            <div className="col-span-2 space-y-3 border-y py-6 border-dotted border-default-200">
              <h1 className="font-bold text-center">
                Owner Verification Questions?
              </h1>

              {fields.map((field, idx) => (
                <div
                  className="flex flex-col sm:flex-row items-center gap-3"
                  key={field.id}
                >
                  <FXInput
                    name={`questions.${idx}.value`}
                    label={`Question ${idx + 1}`}
                  />

                  <Button
                    isIconOnly
                    className="w-full sm:w-fit"
                    size="sm"
                    onClick={() => remove(idx)}
                  >
                    <MinusSVG />
                  </Button>
                </div>
              ))}

              <Button
                isIconOnly
                className="w-full"
                size="sm"
                onClick={() => append({ name: "questions" })}
              >
                <PlusSVG />
              </Button>
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
                        className="size-full object-contain object-center"
                        src={imageDataURL}
                      />

                      <span
                        className="bg-danger-500 absolute top-0 right-0 rounded-full hover:bg-danger-300 duration-300"
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

            <Button className="w-full col-span-2" size="md" type="submit">
              Post
            </Button>
          </form>
        </FormProvider>
      </section>
    </>
  );
};

export default CreatePostPage;
