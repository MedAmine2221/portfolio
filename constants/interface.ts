export interface ZoomImageProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  images: string[];
  projectName: string;
  projectDec: string;
}
export interface TypingTextProps {
  text: string;
  speed?: number;
}
export interface Service {
  eyebrow: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}