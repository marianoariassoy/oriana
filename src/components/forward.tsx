import { GoUp } from "@/lib/icons";
import Link from "next/link";

const BackButton = ({ url }: { url: string }) => {
  return (
    <Link
      href={url}
      className="fixed bottom-16 right-0 lg:right-4 z-20 text-foreground/50 hover:text-foreground text-2xl rotate-90"
      aria-label="Volver"
    >
      <GoUp />
    </Link>
  );
};

export default BackButton;
