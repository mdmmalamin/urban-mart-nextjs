import ProfileCard from "./_components/ProfileCard";
import EmailChange from "./_components/EmailChange";
import PhoneChange from "./_components/PhoneChange";
import PasswordChange from "./_components/PasswordChange";
import { getMyProfile } from "@/src/services/MyProfile";
const VendorProfilePage = async () => {
  let data = null;

  try {
    const response = await getMyProfile();

    data = response?.data;
  } catch (error: any) {
    //? Optionally, render a fallback or error message
    data = null;

    throw new Error(error.message);
  }

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h3>Loading profile data...</h3>
      </div>
    );
  }

  return (
    <div className="h-screen p-3 w-full max-w-5xl mx-auto">
      <h1 className="mb-3 text-xl font-semibold">My Profile</h1>

      <div className="space-y-6 bg-default-50 p-6 rounded-lg">
        <ProfileCard
          avatar={data?.avatar}
          dateOfBirth={data?.dateOfBirth}
          fullName={data?.fullName}
          gender={data?.gender}
        />

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <EmailChange email={data?.email} />

          <PhoneChange phone={data?.phone} />

          <PasswordChange />
        </div>
      </div>
    </div>
  );
};

export default VendorProfilePage;
