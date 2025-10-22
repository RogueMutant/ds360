import Link from "next/link";
import { navLinks } from "./lib/utils/data";

export default function Navigation() {
  return (
    <nav>
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
