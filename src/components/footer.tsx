import { author, social } from "@/config";
import { Divider, Link } from "@heroui/react";
import { FaHeart, FaTurnUp } from "react-icons/fa6";
import { SocialLink } from "./social-link";

export function Footer(): React.ReactElement {
  return (
    <div className="absolute bottom-0 w-full z-100 text-muted-foreground backdrop-blur bg-black/50">
      <Divider />
      <div className="flex justify-between items-center py-2 px-4">
        <div className="ml-[5%] flex-shrink-0 flex gap-4">
          {Object.values(social).map(
            ({ description, icon: Icon, serviceName, url }) => (
              <SocialLink
                description={description}
                icon={Icon}
                key={url}
                serviceName={serviceName}
                url={url}
              />
            ),
          )}
        </div>
        <div className="flex-1 flex justify-center items-center text-sm">
          &copy; {new Date().getFullYear()} {author.fullName}. All rights
          reserved. Built with <FaHeart className="ml-1" color="red" />.
        </div>
        <div className="mr-4 flex-shrink-0">
          <Link className="text-inherit text-sm" href="#home">
            Back to top <FaTurnUp className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
