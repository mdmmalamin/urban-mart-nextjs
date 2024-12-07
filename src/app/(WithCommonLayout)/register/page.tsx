"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import Container from "@/src/components/ui/Container";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerCustomerValidationSchema,
  registerVendorValidationSchema,
} from "@/src/schemas";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Loading from "@/src/components/ui/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useCustomerRegistration,
  useVendorRegistration,
} from "@/src/hooks/auth.hook";
import { useEffect, useState } from "react";
import EyeSlashOpenSVG from "@/src/assets/icons/EyeSlashOpenSVG";
import EyeCloseSVG from "@/src/assets/icons/EyeCloseSVG";
import HappyUserSVG from "@/src/assets/icons/HappyUserSVG";
import ShopSVG from "@/src/assets/icons/ShopSVG";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXSelect from "@/src/components/form/FXSelect";
import { dateToISO } from "@/src/utils";
import { useUser } from "@/src/context/user.provider";

const RegisterPage = () => {
  const { setIsLoading } = useUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const [isVisible, setIsVisible] = useState(false);
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
        <section className="flex flex-col items-center justify-center gap-12">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Register with Urban Mart</h1>
            <p>Looks like you're new here!</p>
          </div>
          <div className="max-w-xl min-w-fit w-full">
            <FXForm
              onSubmit={onSubmit}
              resolver={zodResolver(validation)}
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
                      name="fullName"
                      type="text"
                      label="Full Name"
                    />
                    <div className="grid grid-cols-2 gap-6">
                      <div className="col-span-1 my-auto">
                        <FXDatePicker
                          isRequired
                          name="dateOfBirth"
                          label="Date of Birth"
                        />
                      </div>
                      <div className="col-span-1 my-auto">
                        <FXSelect
                          isRequired
                          name="gender"
                          label="Gender"
                          placeholder="Select your gender"
                          options={[
                            { key: "MALE", label: "Male" },
                            { key: "FEMALE", label: "Female" },
                          ]}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                <FXInput isRequired name="email" type="email" label="Email" />
                <FXInput
                  isRequired
                  name="phone"
                  type="text"
                  label="Mobile Number"
                  startContent={
                    <span
                      aria-label="The country calling code of Bangladesh is +880."
                      className="focus:outline-none text-sm"
                    >
                      +880
                    </span>
                  }
                />
                <FXInput
                  isRequired
                  type={isVisible ? "text" : "password"}
                  name="password"
                  label="Password"
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      {isVisible ? (
                        <EyeSlashOpenSVG className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeCloseSVG className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
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
