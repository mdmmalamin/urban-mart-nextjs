import { Button } from "@nextui-org/button";

import { DuplicateSVG } from "@/src/assets/icons/SVGicons";
import FXModal from "@/src/components/ui/FXModal";
import Loading from "@/src/components/ui/Loading";
import { useProductDuplicate } from "@/src/hooks/product.hook";

const ProductDuplicateModal = ({ productId }: { productId: string }) => {
  const { mutate: handleCreateDuplicate, isPending } = useProductDuplicate();

  return (
    <>
      {isPending && <Loading />}

      <FXModal
        isIconOnly
        buttonClassName="text-sm text-default-500 hover:text-default-900"
        buttonText={<DuplicateSVG />}
        title="Are you sure you want to duplicate this product?"
      >
        <span className="text-sm">
          A new product will be created with the same details.
        </span>

        <Button
          color="secondary"
          onClick={() => handleCreateDuplicate(productId)}
        >
          Duplicate
        </Button>
      </FXModal>
    </>
  );
};

export default ProductDuplicateModal;
