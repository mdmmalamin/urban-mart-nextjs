"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import Container from "@/src/components/ui/Container";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/src/schemas";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/ui/Loading";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const { mutate: handleUserRegistration, isPending, isSuccess } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(userData);
  };

  

  return (
    <>
      {isPending && <Loading />}

      <Container>
        <section className="flex flex-col items-center justify-center gap-12">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Register with FoundX</h1>
            <p>Help Lost Items Find Their Way Home</p>
          </div>
          <div className="max-w-xl min-w-fit w-full">
            <FXForm
              onSubmit={onSubmit}
              resolver={zodResolver(registerValidationSchema)}
              //! Only for development
              defaultValues={{
                name: "Md Amin One",
                email: "mdamin01@gmail.com",
                password: "123456",
                mobileNumber: "12345678901",
              }}
            >
              <div className="space-y-3">
                <FXInput name="name" type="text" label="Full Name" />
                <FXInput name="email" type="email" label="Email" />
                <FXInput
                  name="mobileNumber"
                  type="text"
                  label="Mobile Number"
                />
                <FXInput name="password" type="password" label="Password" />

                <Button className="w-full" size="md" type="submit">
                  Registration
                </Button>
              </div>
            </FXForm>
          </div>

          <div className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default RegisterPage;
