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
        radius="none"
        isDisabled={quantity === 1}
        onClick={() =>
          handleUpdateQuantity({ id: productId, quantity: quantity - 1 })
        }
      >
        -
      </Button>
      <span className="font-semibold">{quantity}</span>
      <Button
        isIconOnly
        radius="none"
        isDisabled={availableQuantity <= quantity}
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
