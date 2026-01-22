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
import { useTranslations } from "next-intl";

import Chatbot from "./chatbot-form";
export default function ChatFloating() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const t = useTranslations("chat");

  return (
    <>
      <Button
        isIconOnly
        className="
          fixed bottom-6 right-6 z-50
          shadow-xl
          w-14 h-14
        "
        color="primary"
        radius="full"
        onPress={onOpen}
      >
        <FiMessageSquare size={22} />
      </Button>
      <Modal isOpen={isOpen} size="lg" onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader> {t("ai_chat")}🤖</ModalHeader>
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
