"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import Container from "@/src/components/ui/Container";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/src/schemas";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/ui/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/src/context/user.provider";

const LoginPage = () => {
  const { setIsLoading } = useUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    handleUserLogin(data);
    setIsLoading(true);
  };
  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <Container>
        <section className="flex flex-col items-center justify-center gap-12">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Login with Urban Mart</h1>
            <p>Welcome Back! Let's Get Started</p>
          </div>
          <div className="max-w-xl min-w-fit w-full">
            <FXForm
              onSubmit={onSubmit}
              resolver={zodResolver(loginValidationSchema)}
              //! Only for development
              defaultValues={{
                email: "mdamin01@gmail.com",
                password: "123456",
              }}
            >
              <div className="space-y-3">
                <FXInput name="email" type="email" label="Email" />
                <FXInput name="password" type="password" label="Password" />

                <Button className="w-full" size="md" type="submit">
                  Login
                </Button>
              </div>
            </FXForm>
          </div>

          <div className="text-center">
            Don't have any account?{" "}
            <Link href="/register" className="text-blue-500 font-semibold">
              Register
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default LoginPage;
