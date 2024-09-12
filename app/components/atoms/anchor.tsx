import { Link } from "@remix-run/react";
import { FC, ReactNode } from "react";
import { Link as AnchorLink } from "~/lib/type";
import { Icon } from "@iconify/react";

type AnchorProps = Omit<AnchorLink, "description" | "title"> & {
  className?: {
    icon?: string;
    text?: string;
  };
  description?: string;
  children: ReactNode;
};

const UnderlinedAnchor: FC<AnchorProps> = ({
  url,
  icon,
  className,
  children,
  description,
}) => (
  <Link
    to={url}
    className={`relative text-foreground no-underline font-bold  before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 ${className?.text}`}
    aria-label={description}
    title={description}
  >
    {icon && <Icon className={className?.icon} icon={icon} />}
    {children}
  </Link>
);

export { UnderlinedAnchor };
