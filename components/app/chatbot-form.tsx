"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { FaRobot } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import chatbotSchema from "@/schema/chatbotSchema";
import { useForm } from "react-hook-form";
import { MessageSquareOff } from "lucide-react";
import { gemini, renderMessageText } from "@/utils/functions";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver : yupResolver(chatbotSchema()),
    defaultValues: {
      prompt: "",
    }
  });
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (data: any) => {
    if (!data.prompt.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: data.prompt,
    };

    setMessages((prev) => [...prev, userMessage]);
    reset()
    const resp = await gemini(data.prompt);    
    const botReply: Message = {
      id: Date.now() + 1,
      sender: "bot",
      text: resp,
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {messages.length ? messages.map((msg) => (
        <div
          key={msg.id}
          className={`max-w-[75%] px-4 py-2 rounded-xl text-sm
            break-words whitespace-pre-wrap
            ${
              msg.sender === "user"
                ? "ml-auto bg-primary text-white"
                : "mr-auto bg-default-200"
            }
          `}
        >
            {renderMessageText(msg.text)}
          </div>
        )): 
        <div className="flex flex-col justify-center items-center">
          <MessageSquareOff size={60} />
          <p className="text-2xl my-4">No Messages</p>
        </div>
        }
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleSubmit(sendMessage)}>
        <div className="flex flex-row">
           <Input
            {...register("prompt")}
            labelPlacement="outside"
            placeholder="Who is Mohamed Amine Lazreg ?"
            startContent={
              <FaRobot className="text-2xl text-default-400 pointer-events-none shrink-0" />
            }
            type="text"
            name="prompt"
            errorMessage={errors?.prompt?.message}
            isInvalid={!!errors?.prompt}
          />
          <Button className="mx-4" type="submit" isIconOnly aria-label="Send Prompt" color="primary">
            <FiSend />
          </Button>
        </div>
      </form>
    </div>
  );
}
