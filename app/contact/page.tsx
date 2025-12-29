"use client"
import { title } from "@/components/primitives";
import contactSchema from "@/schema/contactSchema";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";

export default function PricingPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver : yupResolver(contactSchema())
  });
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
        <form onSubmit={handleSubmit(()=>console.log("hello"))}>
          <div className="flex flex-row">
            <Input
              {...register("firstName")}
              isInvalid={!!errors?.firstName}
              errorMessage={errors?.firstName?.message}
              label={"First Name"}
              labelPlacement="outside"
              placeholder="First Name"
              type="text"
              name="firstName"
              classNames={{
                errorMessage: "text-left"
              }}
            />
            <div className="mx-2" />
            <Input
              {...register("lastName")}
              isInvalid={!!errors?.lastName}
              errorMessage={errors?.lastName?.message}
              name="lastName"
              label={"Last Name"}
              labelPlacement="outside"
              placeholder="Last Name"
              type="text"
              classNames={{
                errorMessage: "text-left"
              }}
            />
          </div>
          <div className="my-10" />
          <Input
            {...register("email")}
            isInvalid={!!errors?.email}
            errorMessage={errors?.email?.message}
            name="email"
            label={"Email"}
            labelPlacement="outside"
            placeholder="Email"
            type="email"
            classNames={{
              errorMessage: "text-left"
            }}
          />
          <div className="my-10" />
          <Input
            {...register("object")}
            isInvalid={!!errors?.object}
            errorMessage={errors?.object?.message}
            name="object"
            label={"Object"}
            labelPlacement="outside"
            placeholder="Object"
            type="text"
            classNames={{
              errorMessage: "text-left"
            }}
          />
          <div className="my-4" />
          <Textarea
            {...register("message")}
            isInvalid={!!errors?.message}
            errorMessage={errors?.message?.message}
            name="message"
            label="Message"
            labelPlacement="outside"
            placeholder="Enter your Message"
            classNames={{
              base: "items-start",
              label: "text-left mb-2",
              errorMessage: "text-left"
            }}

          />
          <div className="my-10" />
          <Button type="submit" color="default" endContent={<FiSend />}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
