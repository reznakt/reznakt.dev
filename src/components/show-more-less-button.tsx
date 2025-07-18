import { Link } from "@heroui/react";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export interface ShowMoreLessButtonProps {
  isExpanded?: boolean;
  toggle?: () => void;
}

export function ShowMoreLessButton({
  isExpanded = false,
  toggle,
}: ShowMoreLessButtonProps): React.ReactElement {
  return (
    <Link
      className="text-sm flex items-center gap-1 cursor-pointer"
      onPress={toggle}
    >
      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      {isExpanded ? "Show less" : "Show more"}
    </Link>
  );
}
