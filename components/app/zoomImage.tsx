import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
import { useState } from "react";

interface ZoomImageProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  images: string[];
  projectName: string
}

export default function ZoomImage({ isOpen, onOpenChange, images, projectName }: ZoomImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between items-center">
              <span>{projectName}</span>
            </ModalHeader>

            <ModalBody className="flex flex-col items-center justify-center gap-4">
              {images.length > 1 && (
                <div className="flex justify-between w-full mb-2">
                  <Button size="sm" onPress={prevImage}>←</Button>
                  <Button size="sm" onPress={nextImage}>→</Button>
                </div>
              )}
              <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="max-h-[70vh] object-contain"
              />
              {images.length > 1 && (
                <p className="text-white/80 text-sm">{`${currentIndex + 1} / ${images.length}`}</p>
              )}
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onPress={() => onClose()}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
