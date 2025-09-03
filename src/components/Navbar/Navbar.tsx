import React from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <div className="navbar bg-base-200 shadow-md px-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          MyApp
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-blue-500">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
