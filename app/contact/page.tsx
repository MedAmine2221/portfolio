"use client";;
import ContactForm from "@/components/app/contact-form";
import { title } from "@/components/primitives";
import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="items-center justify-center">
      <div className="flex flex-col">
        <div className="text-center mb-24 space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Contact
          </h1>
        </div>
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
