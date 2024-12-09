import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";
import { Button } from "@nextui-org/button";
import ShippingSVG from "@/src/assets/icons/ShippingSVG";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="h-[calc(50vh-64px)] w-full mx-auto bg-no-repeat bg-cover bg-center bg-[url('https://res.cloudinary.com/dgxlbj77m/image/upload/v1733729260/urban-mart/cdn-images/apple-products.avif')]">
      <div className="backdrop-blur-md size-full">
        <div className="max-w-lg flex-1 mx-auto px-6">
          <form className="py-12">
            <Input
              label="Search"
              isClearable
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/70 dark:placeholder:text-white/70",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/80",
                  "dark:bg-default/80",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Find your item..."
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </form>
        </div>

        <div className="flex items-center justify-center py-6 md:py-12">
          <Link href={`/all-products`} className="">
            <Button
              size="lg"
              className="bg-primary-500 text-default-50 font-bold flex items-center gap-2"
            >
              <ShippingSVG /> Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
