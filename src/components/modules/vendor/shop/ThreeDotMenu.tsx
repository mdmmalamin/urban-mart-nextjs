import ThreeDotSVG from "@/src/assets/icons/ThreeDotSVG";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import EditShopDetailsModal from "./EditShopDetailsModal";

const ThreeDotMenu = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly aria-label="Setting" variant="bordered">
          <ThreeDotSVG />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="edit" closeOnSelect={false}>
          <EditShopDetailsModal />
        </DropdownItem>
        {/* <DropdownItem key="delete-shop" className="text-danger" color="danger">
          Delete Shop
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThreeDotMenu;
