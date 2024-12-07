import { Button } from "@nextui-org/button";
import FXForm from "../../form/FXForm";
import FXInput from "../../form/FXInput";
import FXTextArea from "../../form/FXTextArea";
import FXModal from "../../ui/FXModal";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddClaimRequest } from "@/src/hooks/claimRequests.hook";

interface IProps {
  id: string;
  questions: string[];
}

const ClaimRequestModal = ({ id, questions }: IProps) => {
  const { mutate: handleClaimRequest, isPending } = useAddClaimRequest();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const claimRequestData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((formElement) => formElement.startsWith("answer"))
        .map((answer) => data[answer]),
    };

    handleClaimRequest(claimRequestData);
  };

  return (
    <FXModal
      buttonClassName="flex-1"
      buttonText="Claim Request"
      title="Claim Request"
    >
      <FXForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div className="mb-4" key={index}>
            <p className="mb-1">{question}</p>
            <FXInput
              label={`Answer - ${index + 1}`}
              name={`answer-${index + 1}`}
            />
          </div>
        ))}

        <FXTextArea label="Description" name="description" />

        <Button className="w-full flex-1 my-2" size="lg" type="submit">
          {isPending ? "Sending...." : "Send"}
        </Button>
      </FXForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
