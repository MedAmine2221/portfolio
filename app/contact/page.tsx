"use client";;
import ContactForm from "@/components/app/contact-form";
import { title } from "@/components/primitives";
import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="items-center justify-center">
      <div className="flex flex-col">
        <h1 className={title()}>Contact</h1>
        <Image
          src="/amine.png"
          alt="That's Me"
          width={1000}
          height={1000}
        />
        <div className="my-10" />
        <ContactForm />
      </div>
    </div>
  );
}
