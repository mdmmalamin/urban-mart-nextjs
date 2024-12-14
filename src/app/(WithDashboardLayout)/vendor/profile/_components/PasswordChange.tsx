import PasswordChangeModal from "./PasswordChangeModal";

const PasswordChange = () => {
  return (
    <div className="flex items-start gap-4">
      <div>
        <p className="text-sm text-default-500">Password Change</p>
      </div>

      <PasswordChangeModal />
    </div>
  );
};

export default PasswordChange;
