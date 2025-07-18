declare module "react-multiline-clamp" {
  import type { ReactElement, ReactNode } from "react";

  interface ShowMoreLessElementProps {
    /**
     * Function to toggle between expanded and collapsed states.
     * When called, it switches the text display between the limited lines view
     * and the expanded view (up to maxLines).
     */
    toggle: () => void;
  }

  interface ClampProps {
    /**
     * The expected element to which the ellipsis would be applied.
     * It could be plain text or any HTML/Component
     */
    children: ReactNode;

    /**
     * The number of lines we want the text to be truncated to
     * @default 2
     */
    lines?: number;

    /**
     * The maximum number of lines we want to show after clicking on showMore button
     * @default 8
     */
    maxLines?: number;

    /**
     * A callback function that gets calls every time we click on the show more/less buttons.
     * It returns whether the text is expanded or not (Boolean)
     */
    onShowMore?: (isExpanded: boolean) => void;

    /**
     * Element that triggers the show less action
     * @default "Less"
     */
    showLessElement?: (props: ShowMoreLessElementProps) => ReactElement;

    /**
     * Element that triggers the show more action
     * @default "More"
     */
    showMoreElement?: (props: ShowMoreLessElementProps) => ReactElement;

    /**
     * Indicates if we want to have the show more/less actions
     * @default false
     */
    withToggle?: boolean;

    /**
     * Indicates if we want the text to have a tooltip title
     * @default true
     */
    withTooltip?: boolean;
  }

  /**
   * React component that uses the css line clamping to truncate given text in specified lines.
   */
  declare const Clamp: React.FC<ClampProps>;

  export default Clamp;
}
