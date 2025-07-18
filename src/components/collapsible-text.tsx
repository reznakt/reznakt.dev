import { Link } from "@heroui/react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export interface CollapsibleTextProps {
  children?: React.ReactNode;
  className?: string;
  maxLines?: number;
}

export function CollapsibleText({
  children,
  className,
  maxLines = 3,
}: CollapsibleTextProps): React.ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${className} space-y-3`}>
      <div className={`line-clamp-${isExpanded ? "none" : maxLines}`}>
        {children}
      </div>
      <div className="flex justify-end">
        <Link
          className="text-sm flex items-center gap-1 cursor-pointer"
          onPress={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          {isExpanded ? "Show less" : "Show more"}
        </Link>
      </div>
    </div>
  );
}
