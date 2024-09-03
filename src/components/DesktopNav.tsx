"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// lib
import { links } from "@/lib/links";

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-accent border-b-2"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
