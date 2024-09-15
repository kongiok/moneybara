import { FC } from "react";
import { Link as NavLink, Logo } from "~/lib/type";
import { UnderlinedAnchor } from "../atoms/anchor";
import { Link } from "@remix-run/react";

const NavItems: FC<{ navItems: NavLink[] }> = ({ navItems }) =>
  navItems.map((item, index) => (
    <UnderlinedAnchor
      key={index}
      url={item.url}
      icon={item.icon}
      description={item.description}
      className={{
        text: "text-lg active:text-primary before:active:bg-accent",
      }}
    >
      {item.title}
    </UnderlinedAnchor>
  ));

const Header: FC<{
  logo: Logo;
  navItems: NavLink[];
  primaryBtn: NavLink;
}> = ({ logo, navItems, primaryBtn }) => (
  <header className="w-full h-20 flex flex-row justify-around items-center">
    {/* Logo Section */}
    <div className="flex flex-1 flex-row justify-center items-center">
      <Link
        to="/app"
        className="pr-3 flex flex-row justify-around items-center rounded-lg shadow hover:shadow-md hover:bg-primary/20 active:shadow-inner active:bg-primary/45 transition-all duration-150 ease-in-out"
      >
        <object
          data={logo.src}
          type="image/svg+xml"
          className="max-h-12 border-none text-primary-600 fill-current"
        >
          Logo of the website, {logo.title}
        </object>
        <p className="text-xl">{logo.title}</p>
      </Link>
    </div>
    {/* Navigation */}
    <nav className="flex flex-1 gap-6 justify-center items-center">
      <NavItems navItems={navItems} />
    </nav>
    {/* Primary Btn */}
    <ul
      className="flex flex-1 flex-row justify-center items-center"
      itemType="menu"
    >
      <li className="" aria-atomic={true}>
        <Link
          className="py-2 px-3 font-bold rounded-md shadow-sm bg-primary hover:bg-primary/60 active:shadow-inner text-primary-foreground transition-all duration-150 ease-in-out"
          to={primaryBtn.url}
        >
          {primaryBtn.title}
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
