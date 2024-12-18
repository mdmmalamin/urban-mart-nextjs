"use client";

import { Button, ButtonGroup } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import Container from "@/src/components/ui/Container";
import {
  registerCustomerValidationSchema,
  registerVendorValidationSchema,
} from "@/src/schemas";
import Loading from "@/src/components/ui/Loading";
import {
  useCustomerRegistration,
  useVendorRegistration,
} from "@/src/hooks/auth.hook";
import EyeSlashOpenSVG from "@/src/assets/icons/EyeSlashOpenSVG";
import EyeCloseSVG from "@/src/assets/icons/EyeCloseSVG";
import HappyUserSVG from "@/src/assets/icons/HappyUserSVG";
import ShopSVG from "@/src/assets/icons/ShopSVG";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXSelect from "@/src/components/form/FXSelect";
import { dateToISO } from "@/src/utils";
import { useCurrentUser } from "@/src/context/user.provider";

const RegisterPage = () => {
  const { setIsLoading } = useCurrentUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isVendor, setIsVendor] = useState(false);
  const [validation, setValidation] = useState(
    registerCustomerValidationSchema
  );

  const {
    mutate: handleCustomerRegistration,
    isPending: isCustomerPending,
    isSuccess: isCustomerSuccess,
  } = useCustomerRegistration();
  const {
    mutate: handleVendorRegistration,
    isPending: isVendorPending,
    isSuccess: isVendorSuccess,
  } = useVendorRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    let userData;

    isVendor
      ? (userData = {
          ...data,
          dateOfBirth: dateToISO(data.dateOfBirth),
        })
      : (userData = {
          ...data,
        });

    isVendor
      ? handleVendorRegistration(userData)
      : handleCustomerRegistration(userData);

    setIsLoading(true);
  };

  useEffect(() => {
    if (
      (!isCustomerPending || !isVendorPending) &&
      (isCustomerSuccess || isVendorSuccess)
    ) {
      if (redirect) {
        router.push("redirect");
      } else {
        router.push("/");
      }
    }
  }, [isCustomerPending, isVendorPending, isCustomerSuccess, isVendorSuccess]);

  return (
    <>
      {(isCustomerPending || isVendorPending) && <Loading />}

      <Container>
        <section className="flex flex-col items-center justify-center gap-12 min-h-[calc(100vh-88px)]">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Register with Urban Mart</h1>
            <p>Looks like you&apos;re new here!</p>
          </div>
          <div className="max-w-xl min-w-fit w-full">
            <FXForm
              resolver={zodResolver(validation)}
              onSubmit={onSubmit}
              //! Only for development
              // defaultValues={{
              //   fullName: "Vendor One",
              //   email: "vendor01@gmail.com",
              //   password: "123456",
              //   phone: "1234567890",
              // }}
            >
              <div className="space-y-3">
                {isVendor ? (
                  <>
                    <FXInput
                      isRequired
                      label="Full Name"
                      name="fullName"
                      type="text"
                    />
                    <div className="grid grid-cols-2 gap-6">
                      <div className="col-span-1 my-auto">
                        <FXDatePicker
                          isRequired
                          label="Date of Birth"
                          name="dateOfBirth"
                        />
                      </div>
                      <div className="col-span-1 my-auto">
                        <FXSelect
                          // isRequired
                          label="Gender"
                          name="gender"
                          options={[
                            { key: "MALE", label: "Male" },
                            { key: "FEMALE", label: "Female" },
                          ]}
                          placeholder="Select your gender"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                <FXInput isRequired label="Email" name="email" type="email" />
                <FXInput
                  isRequired
                  label="Mobile Number (10 digits)"
                  name="phone"
                  // placeholder="17000 00000"
                  startContent={
                    <span
                      aria-label="The country calling code of Bangladesh is +880."
                      className="focus:outline-none text-sm"
                    >
                      +880
                    </span>
                  }
                  type="text"
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
                  label="Password"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                />

                <Button className="w-full" size="md" type="submit">
                  Registration
                </Button>
              </div>
            </FXForm>
          </div>

          <ButtonGroup className="max-w-xl min-w-fit w-full">
            <Button
              className={`w-full mx-auto flex items-center justify-center text-nowrap ${isVendor ? "text-primary-500" : "text-default-50"}`}
              color={isVendor ? "default" : "primary"}
              onClick={() => {
                setIsVendor(false);
                setValidation(registerCustomerValidationSchema);
              }}
            >
              <HappyUserSVG />
              Happy User
            </Button>
            <Button
              className={`w-full mx-auto flex items-center justify-center text-nowrap ${isVendor ? "text-default-50" : "text-primary-500"}`}
              color={isVendor ? "primary" : "default"}
              onClick={() => {
                setIsVendor(true);
                setValidation(registerVendorValidationSchema);
              }}
            >
              <ShopSVG />
              Become a Seller
            </Button>
          </ButtonGroup>

          <div className="text-center">
            Already have an account?{" "}
            <Link className="text-blue-500 font-semibold" href="/login">
              Login
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default RegisterPage;
