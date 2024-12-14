"use client";

import { hideString } from "@/src/utils";

const PhoneChange = ({ phone }: { phone: string }) => {
  return (
    <div>
      <p className="text-sm text-default-500">Phone Number</p>
      <h3>+880 {hideString(phone)}</h3>
    </div>
  );
};

export default PhoneChange;
