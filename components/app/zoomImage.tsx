"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useState, useEffect } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";

import { ZoomImageProps } from "@/constants/interface";

export default function ZoomImage({
  isOpen,
  onOpenChange,
  images,
  projectName,
  projectDec,
}: ZoomImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Modal
      classNames={{
        wrapper: "z-[9999]",
        backdrop: "z-[9998]",
      }}
      isOpen={isOpen}
      scrollBehavior="inside"
      size="full"
      onOpenChange={onOpenChange}
    >
      <ModalContent className="sm:max-w-3xl md:max-w-4xl">
        {(onClose) => (
          <>
            {/* HEADER */}
            <ModalHeader className="flex justify-between items-center px-4 sm:px-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold">
                {projectName}
              </h3>
            </ModalHeader>

            {/* BODY */}
            <ModalBody className="flex flex-col items-center gap-4 py-4 sm:py-6">
              {/* IMAGE */}
              <div className="relative w-full flex items-center justify-center">
                <Image
                  alt={`Image ${currentIndex + 1}`}
                  sizes="100"
                  src={images[currentIndex]}
                />

                {/* ARROWS */}
                {images.length > 1 && (
                  <>
                    <Button
                      isIconOnly
                      className="
                        absolute left-2 top-1/2 -translate-y-1/2
                        bg-black/50 text-white
                        hover:bg-black/70
                      "
                      size="sm"
                      onPress={prevImage}
                    >
                      <FiArrowLeft size={22} />
                    </Button>

                    <Button
                      isIconOnly
                      className="
                        absolute right-2 top-1/2 -translate-y-1/2
                        bg-black/50 text-white
                        hover:bg-black/70
                      "
                      size="sm"
                      onPress={nextImage}
                    >
                      <FiArrowRight size={22} />
                    </Button>
                  </>
                )}
              </div>

              {/* COUNTER */}
              {images.length > 1 && (
                <p className="text-xs sm:text-sm font-medium text-white/80">
                  {currentIndex + 1} / {images.length}
                </p>
              )}

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base text-center px-2 sm:px-6 max-w-3xl">
                {projectDec}
              </p>
            </ModalBody>

            {/* FOOTER */}
            <ModalFooter className="flex justify-center sm:justify-end px-4 sm:px-6">
              <Button
                color="danger"
                size="sm"
                variant="light"
                onPress={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
