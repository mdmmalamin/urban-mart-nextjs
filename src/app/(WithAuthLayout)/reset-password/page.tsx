"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import ArrowSVG from "@/src/assets/icons/ArrowSVG";
import EyeCloseSVG from "@/src/assets/icons/EyeCloseSVG";
import EyeSlashOpenSVG from "@/src/assets/icons/EyeSlashOpenSVG";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import Container from "@/src/components/ui/Container";
import Loading from "@/src/components/ui/Loading";
import { useResetPassword } from "@/src/hooks/auth.hook";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const userId = searchParams.get("userId");
  const token = searchParams.get("token");
  // // // console.log({ userId, token });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    mutate: handleResetPassword,
    isPending,
    isSuccess,
  } = useResetPassword();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const resetData = { resetToken: token, id: userId, ...data };

    handleResetPassword(resetData);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push("/login");
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}

      <Container>
        <section className="flex flex-col items-center justify-center gap-12 h-[calc(100vh-88px)]">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Set new password</h1>
            <p>
              Your new password must be different to previously used passwords.
            </p>
          </div>
          <div className="max-w-xl min-w-fit w-full">
            <FXForm
              onSubmit={onSubmit}
              // resolver={zodResolver(loginValidationSchema)}
            >
              <div className="space-y-3">
                <FXInput
                  isRequired
                  label="Password"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                />

                <FXInput
                  isRequired
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
                  label="Confirm Password"
                  name="confirmPassword"
                  type={isPasswordVisible ? "text" : "password"}
                />

                <Button
                  className="w-full text-default-50"
                  color="success"
                  size="lg"
                  type="submit"
                >
                  Reset Password
                </Button>
              </div>
            </FXForm>
          </div>

          <div className="text-center">
            <Link
              className="font-semibold flex items-center justify-center gap-2 text-default-500 hover:text-secondary-500"
              href="/login"
            >
              <ArrowSVG className="rotate-180" /> Back to log in
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default ResetPasswordPage;
