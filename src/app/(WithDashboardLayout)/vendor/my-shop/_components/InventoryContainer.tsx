"use client";

import Container from "@/src/components/ui/Container";
import { useGetMyInventories } from "@/src/hooks/vendor.hook";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";

const InventoryContainer = () => {
  const { data } = useGetMyInventories();
  const { data: myInventories } = data || [];
  // console.log("My Shop Hook: ", myInventories);
  return (
    <Container>
      <h1>All Inventory</h1>

      <div>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            // removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QVS0pacHd2gprCtxJnLCLudzQpfS7LPt7Q&s"
            height={1000}
            width={1000}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://nextui.org/images/breathing-app-icon.jpeg"
                height={100}
                width={100}
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night&#39;s sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Container>
  );
};

export default InventoryContainer;
