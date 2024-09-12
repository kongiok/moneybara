import { FC } from "react";
import { Link as NavLink, Logo } from "~/lib/type";
import { UnderlinedAnchor } from "../atoms/anchor";

const NavItems: FC<{ navItems: NavLink[] }> = ({ navItems }) =>
  navItems.map((item, index) => (
    <UnderlinedAnchor
      key={index}
      url={item.url}
      icon={item.icon}
      description={item.description}
      className={{
        text: "text-foreground",
      }}
    >
      {item.title}
    </UnderlinedAnchor>
  ));

const Header: FC<{
  logo: Logo;
  navItems: NavLink[];
}> = ({ logo, navItems }) => (
  <header className="w-full h-20 flex flex-row justify-around items-center">
    {/* Logo Section */}
    <div className="flex flex-1"></div>
    {/* Navigation */}
    <nav className="flex flex-1">
      <NavItems navItems={navItems} />
    </nav>
    {/* Primary Btn */}
    <div className="flex flex-1"></div>
  </header>
);

export default Header;
