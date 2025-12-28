import { title } from "@/components/primitives";
import { Input } from "@heroui/input";
import { FiSend } from "react-icons/fi";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Contact</h1>
      <Input
        placeholder="Email"
        type="email"
      />
      <Input
        placeholder="Object"
        type="text"
      />
      <Input
        placeholder="Message"
        type="text"
        aria-multiline
      />
      <div className="flex flex-row">
        <button>
          send mail
        </button>
        <FiSend />
      </div>
    </div>
  );
}
