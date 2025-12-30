"use client"
import { ZoomImageProps } from "@/constants/interface";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
import { useState, useEffect } from "react";
import {FiArrowRight, FiArrowLeft } from "react-icons/fi"
export default function ZoomImage({ isOpen, onOpenChange, images, projectName, projectDec }: ZoomImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange} 
      size="4xl"
      scrollBehavior="inside"
      classNames={{
        wrapper: "z-[9999]",
        backdrop: "z-[9998]"
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between items-center">
              <span>{projectName}</span>
            </ModalHeader>

            <ModalBody className="flex flex-col items-center justify-center gap-4 py-6">
              <div className="relative w-full">
                <img
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  className="max-h-[60vh] w-full object-contain rounded-lg"
                />
                {images.length > 1 && (
                  <>
                    <Button
                      isIconOnly
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
                      onPress={prevImage}
                    >
                      <FiArrowLeft size={25} />
                    </Button>
                    <Button
                      isIconOnly
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
                      onPress={nextImage}
                    >
                      <FiArrowRight size={25} />
                    </Button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <p className="text-sm font-medium">{`${currentIndex + 1} / ${images.length}`}</p>
              )}
              
              <p className="text-base text-center px-4">{projectDec}</p>
            </ModalBody>

            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}