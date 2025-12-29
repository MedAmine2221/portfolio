"use client";;
import { Input } from "@heroui/input";
import { FaRobot } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import chatbotSchema from "@/schema/chatbotSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "@heroui/button";

export default function Chatbot() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver : yupResolver(chatbotSchema())
  });
  return (
    <form onSubmit={handleSubmit(()=>console.log('hello world'))}>
      <div>
        
      </div>
      <div className="flex flex-row">
        <Input
          labelPlacement="outside"
          placeholder="Who is Mohamed Amine Lazreg ?"
          startContent={
            <FaRobot className="text-2xl text-default-400 pointer-events-none shrink-0" />
          }
          type="email"
          name="prompt"
          errorMessage={errors?.prompt?.message}
          isInvalid={!!errors?.prompt}
        />
        <Button className="mx-4" type="submit" isIconOnly aria-label="Send Prompt" color="primary">
          <FiSend />
        </Button>
      </div>
    </form>
  );
}
