"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import ForgetPasswordModal from "./_components/ForgetPasswordModal";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import Container from "@/src/components/ui/Container";
import { loginValidationSchema } from "@/src/schemas";
import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/ui/Loading";
import { useCurrentUser } from "@/src/context/user.provider";
import EyeCloseSVG from "@/src/assets/icons/EyeCloseSVG";
import EyeSlashOpenSVG from "@/src/assets/icons/EyeSlashOpenSVG";

// export const metadata = {
//   title: "Login Please",
//   description: "This is image optimization page.",
// };

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { user, setIsLoading } = useCurrentUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (user?.role === "VENDOR") {
        router.push("/vendor/my-shop");
      } else if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess, user]);

  return (
    <>
      {isPending && <Loading />}

      <Container>
        <section className="flex flex-col items-center justify-center gap-12 h-[calc(100vh-88px)]">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Login with Urban Mart</h1>
            <p>Welcome Back! Let&apos;s Get Started</p>
          </div>
          <div className="max-w-xl min-w-fit w-full">
            <FXForm
              resolver={zodResolver(loginValidationSchema)}
              onSubmit={onSubmit}
              //! Only for development
              // defaultValues={{
              //   // phone: "1684420495", //! vendor
              //   // password: "amin1234", //! vendor
              //   phone: "1941505091", //! vendor
              //   password: "123456", //! vendor
              //   // phone: "1111111111", //! user
              //   // password: "123456", //! user
              // }}
            >
              <div className="space-y-3">
                <FXInput
                  label="Phone Number"
                  name="phone"
                  startContent={
                    <span
                      aria-label="The country calling code of Bangladesh is +880."
                      className="focus:outline-none text-sm"
                    >
                      +880
                    </span>
                  }
                  type="phone"
                />
                <FXInput
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      {isPasswordVisible ? (
                        <EyeCloseSVG className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeSlashOpenSVG className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  label="Password"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                />

                <Button className="w-full" size="md" type="submit">
                  Login
                </Button>
              </div>
            </FXForm>
            <div className="flex justify-end my-2">
              <ForgetPasswordModal />
            </div>
          </div>

          <div className="text-center">
            Don&apos;t have any account?{" "}
            <Link className="text-blue-500 font-semibold" href="/register">
              Register
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default LoginPage;
