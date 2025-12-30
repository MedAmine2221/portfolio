"use client";;
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
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingFalse, setLoadingTrue } from "@/redux/loadingReducer";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const loading = useSelector((state: any)=>state.loading.loading);
  console.log(loading);
  
  const dispatch = useDispatch();
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
    try {
      dispatch(setLoadingTrue());
      
      const userMessage: Message = {
        id: Date.now(),
        sender: "user",
        text: data.prompt,
      };

      const botMessageId = Date.now() + 1;

      setMessages((prev) => [
        ...prev,
        userMessage,
        {
          id: botMessageId,
          sender: "bot",
          text: "Typing...",
        },
      ]);

      reset();

      const resp = await gemini(data.prompt);
      if (resp === null) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId
              ? { ...msg, text: "Retry..." }
              : msg
          )
        );
        dispatch(setLoadingFalse());
        return;
      }
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? { ...msg, text: resp }
            : msg
        )
      );
    } catch (error) {
      console.error(error);
    } 
    finally{
      dispatch(setLoadingFalse());
    }
  };

  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {messages.length ? messages.map((msg) => (
          <div key={msg.id} className="flex flex-row justify-start items-center">
            {msg.sender === "bot" && (<Image className="mr-4" src="/amine.png" alt="robot" height={50} width={50} />)}
            <div
              key={msg.id}
              className={`max-w-[75%] px-4 py-2 rounded-xl text-sm
                  break-words whitespace-pre-wrap
                  ${
                    msg.sender === "user"
                    ? "ml-auto bg-primary text-white"
                    : "mr-auto bg-default-200"
                  }`}
            >
              {renderMessageText(msg.text)}
            </div>
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
          <Button disabled={loading} className="mx-4" type="submit" isIconOnly aria-label="Send Prompt" color="primary">
            <FiSend />
          </Button>
        </div>
      </form>
    </div>
  );
}
