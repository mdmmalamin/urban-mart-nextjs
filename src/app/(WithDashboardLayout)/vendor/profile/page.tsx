import { getMyProfile } from "@/src/services/MyProfile";
import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
import { Suspense } from "react";
import ProfileCard from "./_components/ProfileCard";
import EmailChange from "./_components/EmailChange";
import PhoneChange from "./_components/PhoneChange";
import PasswordChange from "./_components/PasswordChange";
const VendorProfilePage = async () => {
  const { data } = await getMyProfile();
  console.log(data);

  return (
    <div className="h-screen p-3 w-full max-w-5xl mx-auto">
      <h1 className="mb-3 text-xl font-semibold">My Profile</h1>

      <div className="space-y-6 bg-default-50 p-6 rounded-lg">
        <FXErrorBoundary fallback={<h3>Profile Card</h3>}>
          <Suspense fallback={<h3>Profile Card</h3>}>
            <ProfileCard
              fullName={data?.fullName}
              gender={data?.gender}
              dateOfBirth={data?.dateOfBirth}
              avatar={data?.avatar}
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
