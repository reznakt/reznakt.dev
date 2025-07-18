import { Link, Tooltip } from "@heroui/react";

export interface SocialLinkProps {
  description?: string;
  icon: React.ComponentType;
  serviceName: string;
  url: string;
}

export function SocialLink({
  description,
  icon: Icon,
  serviceName,
  url,
}: SocialLinkProps): React.ReactElement {
  return (
    <Tooltip
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold flex items-center gap-2">
            <span className="flex items-center gap-1">
              <Icon />
              {serviceName}
            </span>
            <span className="text-tiny text-muted-foreground">
              {description}
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
  );
}
