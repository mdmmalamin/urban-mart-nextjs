import { Button } from "@nextui-org/button";
type TQuantityCounter = {
  productId: string;
  quantity: number;
  availableQuantity: number;
  handleUpdateQuantity: any;
};

const QuantityCounter = ({
  productId,
  quantity,
  availableQuantity,
  handleUpdateQuantity,
}: TQuantityCounter) => {
  return (
    <div className="flex items-center gap-4 border border-default-400">
      <Button
        isIconOnly
        isDisabled={quantity === 1}
        radius="none"
        onClick={() =>
          handleUpdateQuantity({ id: productId, quantity: quantity - 1 })
        }
      >
        -
      </Button>
      <span className="font-semibold">{quantity}</span>
      <Button
        isIconOnly
        isDisabled={availableQuantity <= quantity}
        radius="none"
        onClick={() =>
          handleUpdateQuantity({ id: productId, quantity: quantity + 1 })
        }
      >
        +
      </Button>
    </div>
  );
};

export default QuantityCounter;
