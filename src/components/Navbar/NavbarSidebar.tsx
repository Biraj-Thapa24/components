// src/components/Navbar/NavbarSidebar.tsx
import React from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode; // optional icon for sidebar
}

interface NavbarSidebarProps {
  items: NavItem[];
  title?: string;
}

const NavbarSidebar: React.FC<NavbarSidebarProps> = ({ items, title = "Dashboard" }) => {
  return (
    <aside className="w-64 h-screen bg-base-200 shadow-md flex flex-col">
      {/* Title */}
      <div className="p-4 border-b border-gray-300 font-bold text-xl">{title}</div>

      {/* Navigation Items */}
      <ul className="menu flex-1 p-2 w-full text-base-content">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-base-300 transition"
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Optional footer */}
      <div className="p-4 border-t border-gray-300 text-sm text-gray-500">
        © 2025 MyApp
      </div>
    </aside>
  );
};

export default NavbarSidebar;
