import EmailChangeModal from "./EmailChangeModal";

import { hideString } from "@/src/utils";

const EmailChange = ({ email }: { email: string }) => {
  return (
    <div className="flex items-start gap-4">
      <div>
        <p className="text-sm text-default-500">Email Address</p>
        <h3>{hideString(email)}</h3>
      </div>

      <EmailChangeModal email={email} />
    </div>
  );
};

export default EmailChange;
