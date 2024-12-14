"use client";

import { Button } from "@nextui-org/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@nextui-org/drawer";
import { useDisclosure } from "@nextui-org/modal";

const FXDrawer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // This function opens the drawer
  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button className="capitalize" onPress={handleOpen}>
          Open Drawer
        </Button>
      </div>
      <Drawer isOpen={isOpen} placement="left" onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader className="flex flex-col gap-1">
            Drawer Title
          </DrawerHeader>
          <DrawerBody>
            <h1>Hello</h1>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FXDrawer;
