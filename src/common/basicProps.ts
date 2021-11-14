/**
 * Has classname and style.
 */
export interface BasicProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Does not extend BasicProps.
 */
export interface HasChildren {
  children?: React.ReactNode;
}
