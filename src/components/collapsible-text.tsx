import Clamp from "react-multiline-clamp";
import { ShowMoreLessButton } from "./show-more-less-button";

export interface CollapsibleTextProps {
  children?: React.ReactNode;
  className?: string;
  lines?: number;
  maxLines?: number;
}

export function CollapsibleText({
  children,
  className,
  lines = 3,
  maxLines = Number.MAX_SAFE_INTEGER,
}: CollapsibleTextProps): React.ReactElement {
  return (
    <div className={`${className} space-y-3`}>
      <Clamp
        lines={lines}
        maxLines={maxLines}
        showLessElement={({ toggle }) => (
          <ShowMoreLessButton isExpanded toggle={toggle} />
        )}
        showMoreElement={({ toggle }) => <ShowMoreLessButton toggle={toggle} />}
        withToggle
      >
        {children}
      </Clamp>
    </div>
  );
}
