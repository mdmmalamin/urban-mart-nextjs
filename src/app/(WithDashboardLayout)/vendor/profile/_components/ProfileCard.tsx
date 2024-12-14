import { NO_IMAGE_FOUND } from "@/src/constant";
import { TUser } from "@/src/types/profile.type";
import Image from "next/image";
import ProfileEditModal from "./ProfileEditModal";

const ProfileCard = ({
  fullName,
  gender,
  dateOfBirth,
  avatar,
}: Partial<TUser>) => {
  return (
    <div className="space-y-3">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
        <Image
          alt={fullName || ""}
          src={avatar || NO_IMAGE_FOUND}
          width={300}
          height={300}
          className="aspect-square object-contain object-center bg-gradient-to-t to-default-50 from-transparent"
        />

        <div className="w-full flex justify-between gap-6">
          <div className="w-full">
            <p className="text-sm text-default-500">Full Name</p>
            <h3>{fullName || "N/A"}</h3>

            <p className="text-sm text-default-500">Gender</p>
            <h3>{gender || "N/A"}</h3>

            <p className="text-sm text-default-500">Date of Birth</p>
            <h3>{dateOfBirth || "N/A"}</h3>
          </div>

          <div className="md:hidden">
            <ProfileEditModal
              fullName={fullName}
              gender={gender}
              dateOfBirth={dateOfBirth}
            />
          </div>
        </div>

        <div className="hidden md:block">
          <ProfileEditModal
            fullName={fullName}
            gender={gender}
            dateOfBirth={dateOfBirth}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
