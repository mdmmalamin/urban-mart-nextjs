import { Button } from "@nextui-org/button";

import { TrashSVG } from "@/src/assets/icons/SVGicons";
import FXModal from "@/src/components/ui/FXModal";
import { useDeleteProduct } from "@/src/hooks/product.hook";
import Loading from "@/src/components/ui/Loading";

const ProductDeleteModal = ({ productId }: { productId: string }) => {
  const { mutate: handleDeleteProduct, isPending } = useDeleteProduct();

  return (
    <>
      {isPending && <Loading />}

      <div>
        <FXModal
          isIconOnly
          buttonClassName="text-sm text-danger-300 hover:text-danger-200"
          buttonText={<TrashSVG />}
          title="Are you sure you want to delete this product?"
        >
          <span className="text-sm">
            This action is irreversible, and the product will be permanently
            removed.
          </span>
          <Button color="danger" onClick={() => handleDeleteProduct(productId)}>
            Delete
          </Button>
        </FXModal>
      </div>
    </>
  );
};

export default ProductDeleteModal;
