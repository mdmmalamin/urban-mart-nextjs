import { Suspense } from "react";

import ProfileCard from "./_components/ProfileCard";
import EmailChange from "./_components/EmailChange";
import PhoneChange from "./_components/PhoneChange";
import PasswordChange from "./_components/PasswordChange";

import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import { getMyProfile } from "@/src/services/MyProfile";
const VendorProfilePage = async () => {
  let data = null;

  try {
    const response = await getMyProfile();

    data = response?.data;
  } catch (error: any) {
    // console.error("Error fetching profile data:", error);
    //? Optionally, render a fallback or error message
    data = null;

    throw new Error(error.message);
  }

  return (
    <div className="h-screen p-3 w-full max-w-5xl mx-auto">
      <h1 className="mb-3 text-xl font-semibold">My Profile</h1>

      <div className="space-y-6 bg-default-50 p-6 rounded-lg">
        <FXErrorBoundary fallback={<h3>Profile Card</h3>}>
          <Suspense fallback={<h3>Profile Card</h3>}>
            <ProfileCard
              avatar={data?.avatar}
              dateOfBirth={data?.dateOfBirth}
              fullName={data?.fullName}
              gender={data?.gender}
            />
          </Suspense>
        </FXErrorBoundary>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <FXErrorBoundary fallback={<h3>Email Change</h3>}>
            <Suspense fallback={<h3>Email Change</h3>}>
              <EmailChange email={data?.email} />
            </Suspense>
          </FXErrorBoundary>

          <FXErrorBoundary fallback={<h3>Phone Change</h3>}>
            <Suspense fallback={<h3>Phone Change</h3>}>
              <PhoneChange phone={data?.phone} />
            </Suspense>
          </FXErrorBoundary>

          <FXErrorBoundary fallback={<h3>Password Change</h3>}>
            <Suspense fallback={<h3>Password Change</h3>}>
              <PasswordChange />
            </Suspense>
          </FXErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default VendorProfilePage;
