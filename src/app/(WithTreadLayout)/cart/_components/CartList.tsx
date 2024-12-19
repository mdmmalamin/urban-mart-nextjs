import Image from "next/image";

import BdtSVG from "@/src/assets/icons/BdtSVG";
import { TrashSVG } from "@/src/assets/icons/SVGicons";
import QuantityCounter from "@/src/components/ui/QuantityCounter";
import { NO_IMAGE_FOUND } from "@/src/constant";
import {
  useChangeMyCartItemQuantity,
  useDeletedMyCartItem,
} from "@/src/hooks/addToCart.hook";
import Loading from "@/src/components/ui/Loading";

type TCartList = {
  productId: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  availableQuantity: number;
};

const CartList = ({
  productId,
  name,
  image,
  price,
  quantity,
  availableQuantity,
}: TCartList) => {
  const {
    mutate: handleUpdateQuantity,
    isPending: updateIsPending,
    isSuccess: updateIsSuccess,
  } = useChangeMyCartItemQuantity();
  const {
    mutate: handleDeleteCartItem,
    isPending: deleteIsPending,
    isSuccess: deleteIsSuccess,
  } = useDeletedMyCartItem();

  return (
    <>
      {(updateIsPending && !updateIsSuccess && <Loading />) ||
        (deleteIsPending && !deleteIsSuccess && <Loading />)}

      <div className="flex items-start gap-4">
        <Image
          alt={`${name} Image.`}
          height={100}
          src={image || NO_IMAGE_FOUND}
          width={100}
        />
        <div className="w-full grid grid-cols-5 justify-between gap-4">
          <h3 className="text-sm line-clamp-2 col-span-5 md:col-span-3">
            {name}
          </h3>

          <div className="col-span-2 flex items-start justify-between gap-2">
            <div className="flex flex-col items-center gap-4">
              <span className="flex items-center gap-2 max-w-32">
                <BdtSVG /> {price}
              </span>

              <button
                className="hover:text-danger-400 duration-300 text-default-500"
                onClick={() => handleDeleteCartItem(productId)}
              >
                <TrashSVG />
              </button>
            </div>
            <QuantityCounter
              availableQuantity={availableQuantity}
              handleUpdateQuantity={handleUpdateQuantity}
              productId={productId}
              quantity={quantity}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
