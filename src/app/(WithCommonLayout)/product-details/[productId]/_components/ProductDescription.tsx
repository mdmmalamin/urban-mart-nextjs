"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

const ProductDescription = ({
  description,
}: {
  description: string | undefined;
}) => {
  return (
    <div>
      <Accordion variant="bordered">
        <AccordionItem key="1" aria-label="Description" title="Description">
          {description}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductDescription;
