"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { FAQItem } from "@/data/site";

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <Accordion.Root className="faq" type="single" collapsible>
      {items.map((item, index) => (
        <Accordion.Item className="faq-item" value={`item-${index}`} key={item.question}>
          <Accordion.Header>
            <Accordion.Trigger>
              <span>{item.question}</span>
              <Plus aria-hidden="true" className="faq-plus" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content><p>{item.answer}</p></Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
