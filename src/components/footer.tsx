import { author, social } from "@/config";
import { Link } from "@heroui/react";
import { FaHeart, FaTurnUp } from "react-icons/fa6";

export function Footer(): React.ReactElement {
  return (
    <div className="text-muted-foreground absolute bottom-0 z-100 flex w-full items-center justify-between border-t-1 border-white/15 bg-black/50 px-4 py-2 backdrop-blur">
      <div className="ml-[5%] flex flex-shrink-0 gap-4">
        {Object.values(social).map(({ icon: Icon, url }) => (
          <Link className="text-inherit" href={url} isExternal key={url}>
            <Icon />
          </Link>
        ))}
      </div>
      <div className="flex flex-1 items-center justify-center text-sm">
        &copy; {new Date().getFullYear()} {author.fullName}. All rights
        reserved. Built with <FaHeart className="ml-1" color="red" />.
      </div>
      <div className="mr-4 flex-shrink-0">
        <Link className="text-sm text-inherit" href="#home">
          Back to top <FaTurnUp className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
