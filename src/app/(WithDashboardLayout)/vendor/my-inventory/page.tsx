"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Chip } from "@nextui-org/chip";
import { Pagination } from "@nextui-org/pagination";
import { useState } from "react";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import ProductDeleteModal from "./_components/ProductDeleteModal";
import ProductDuplicateModal from "./_components/ProductDuplicateModal";
import ProductEditModal from "./_components/ProductEditModal";

import PlusSVG from "@/src/assets/icons/PlusSVG";
import BdtSVG from "@/src/assets/icons/BdtSVG";
import { TMyInventory } from "@/src/types/inventory.type";
import { useGetMyInventory } from "@/src/hooks/inventory.hook";
import { useChangeProductStatus } from "@/src/hooks/product.hook";

const MyInventoryPage = () => {
  const [pageQuery, setPageQuery] = useState(1);
  // // console.log(pageQuery);

  const { data: myInventories, isLoading } = useGetMyInventory([
    { name: "page", value: pageQuery.toString() },
    { name: "limit", value: "10" },
  ]);

  const { mutate: handleStatusChange } = useChangeProductStatus();
  // // console.log(myInventories);
  const loadingState =
    isLoading || myInventories?.data?.length === 0 ? "loading" : "idle";

  return (
    <>
      <div className="space-y-6 p-3">
        <div className="flex items-center justify-between">
          <h1 className="mb-3 text-xl font-semibold">My Inventory</h1>

          <Link href={"/vendor/my-shop/create-new-product"}>
            <Button>
              <PlusSVG /> Add Product
            </Button>
          </Link>
        </div>

        <Table
          aria-label="Example static collection table"
          bottomContent={
            Math.ceil(myInventories?.meta?.total / myInventories?.meta?.limit) >
            0 ? (
              <div className="flex w-full justify-end">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={myInventories?.meta?.page || 1}
                  total={
                    Math.ceil(
                      myInventories?.meta?.total / myInventories?.meta?.limit,
                    ) || 2
                  }
                  onChange={(page) => setPageQuery(page)}
                />
              </div>
            ) : null
          }
          color="default"
          selectionMode="single"
        >
          <TableHeader>
            <TableColumn>Product Name</TableColumn>
            <TableColumn>Purchase Unit Price</TableColumn>
            <TableColumn>Quantity</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>

          <TableBody
            emptyContent={"No Inventory Found!"}
            loadingContent={<Spinner />}
            loadingState={loadingState}
          >
            {myInventories?.data?.map(
              ({ id, sku, availableQuantity, product }: TMyInventory) => (
                <TableRow key={id}>
                  <TableCell>
                    <div className="flex gap-4 items-start">
                      <Avatar
                        className="flex-shrink-0"
                        radius="none"
                        size="sm"
                        src={product?.images?.[0]?.url}
                      />
                      <div className="flex flex-col items-start">
                        <p className="line-clamp-1">{product?.name}</p>
                        <p className="text-xs text-default-500">{sku}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="flex items-center">
                      <BdtSVG /> {product?.price}
                    </p>
                  </TableCell>
                  <TableCell>{availableQuantity}</TableCell>
                  <TableCell>
                    <Dropdown>
                      <DropdownTrigger>
                        <Chip
                          className="cursor-pointer"
                          color={
                            (product.status === "DRAFTED" && "default") ||
                            (product.status === "PUBLISHED" && "success") ||
                            (product.status === "UNLISTED" && "danger") ||
                            "warning"
                          }
                          variant="faded"
                        >
                          {product?.status}
                        </Chip>
                      </DropdownTrigger>
                      <DropdownMenu>
                        <DropdownItem
                          key="PUBLISHED"
                          onClick={() =>
                            handleStatusChange({
                              id: product.id,
                              status: "PUBLISHED",
                            })
                          }
                        >
                          <Chip color="success" variant="faded">
                            PUBLISHED
                          </Chip>
                        </DropdownItem>
                        <DropdownItem
                          key="UNLISTED"
                          onClick={() =>
                            handleStatusChange({
                              id: product.id,
                              status: "UNLISTED",
                            })
                          }
                        >
                          <Chip color="danger" variant="faded">
                            UNLISTED
                          </Chip>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-4">
                      <ProductEditModal productId={product.id} />
                      <ProductDuplicateModal productId={product.id} />
                      <ProductDeleteModal productId={product.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default MyInventoryPage;
