import { FC, ReactNode } from "react";

const FullScreen: FC<{ className?: string; children?: ReactNode }> = ({
  className,
  children,
}) => <div className={`h-svh w-svw ${className}`}>{children}</div>;

export default FullScreen;
