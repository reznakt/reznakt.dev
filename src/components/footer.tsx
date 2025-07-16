import { author, social } from "@/config";
import { Divider, Link, Tooltip } from "@heroui/react";
import { FaHeart, FaTurnUp } from "react-icons/fa6";

export function Footer(): React.ReactElement {
  return (
    <div className="absolute bottom-0 w-full z-100 py-2 text-muted-foreground flex justify-between items-center px-4 backdrop-blur bg-black/50">
      <Divider />
      <div className="ml-[5%] flex-shrink-0 flex gap-4">
        {Object.values(social).map(
          ({ accountName, icon: Icon, serviceName, url }) => (
            <Tooltip
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Icon />
                      {serviceName}
                    </span>
                    <span className="text-tiny text-muted-foreground">
                      {accountName}
                    </span>
                  </div>
                  <Link className="text-tiny" href={url} isExternal key={url}>
                    {url}
                  </Link>
                </div>
              }
              key={url}
            >
              <Link className="text-inherit" href={url} isExternal key={url}>
                <Icon />
              </Link>
            </Tooltip>
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
  );
}
