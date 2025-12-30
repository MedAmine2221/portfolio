"use client";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/react";
import { FiMessageSquare } from "react-icons/fi";
import Chatbot from "./chatbot-form";
export default function ChatFloating() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        isIconOnly
        color="primary"
        radius="full"
        className="
          fixed bottom-6 right-6 z-50
          shadow-xl
          w-14 h-14
        "
        onPress={onOpen}
      >
        <FiMessageSquare size={22} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <ModalContent>
          {() => (
            <>
              <ModalHeader>AI Chat 🤖</ModalHeader>
              <ModalBody>
                <Chatbot />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
