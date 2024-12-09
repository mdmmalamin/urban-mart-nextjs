import RecentProductCard from "@/src/components/cards/RecentProductCard";
import { TInventoryProps, TProductProps } from "@/src/types";

const VendorProductCard = ({
  inventory,
}: {
  inventory: Partial<TInventoryProps[]>;
}) => {
  console.log(inventory);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {inventory
          ?.filter((item) => item?.product?.status === "PUBLISHED") //? Filter "PUBLISHED" products
          .slice(0, 4) //? Limit to the first 2
          .map((item) => {
            const stock =
              item?.availableQuantity! > 0 ? "IN STOCK" : "OUT OF STOCK";

            const productItems = {
              id: item?.product!.id,
              name: item?.product!.name,
              price: item?.product!.price,
              images: item?.product!.images,
              stock,
            };

            return (
              <RecentProductCard
                product={productItems}
                key={productItems?.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default VendorProductCard;
