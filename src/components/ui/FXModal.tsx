/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { ReactNode } from "react";

interface IProps {
  buttonText: string | ReactNode;
  title: string;
  children: ReactNode;
  buttonVariant?:
    | "light"
    | "solid"
    | "bordered"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  buttonClassName?: string;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "xs"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full"
    | undefined;
  backdrop?: "blur" | "transparent" | "opaque" | undefined;
  buttonSize?: "sm" | "md" | "lg";
  isIconOnly?: boolean;
  isDismissable?: boolean;
}

const FXModal = ({
  buttonText,
  title,
  children,
  buttonVariant = "light",
  buttonClassName,
  size = "2xl",
  backdrop = "blur",
  buttonSize = "lg",
  isIconOnly = false,
  isDismissable = true,
}: IProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className={buttonClassName}
        isIconOnly={isIconOnly}
        size={buttonSize}
        variant={buttonVariant}
        onPress={onOpen}
      >
        {buttonText}
      </Button>
      <Modal
        backdrop={backdrop}
        isDismissable={isDismissable}
        isOpen={isOpen}
        size={size}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FXModal;
