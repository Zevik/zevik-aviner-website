
import { Link } from "react-router-dom";

interface NavDropdownProps {
  isOpen: boolean;
  links: Array<{
    to: string;
    label: string;
  }>;
}

const NavDropdown = ({ isOpen, links }: NavDropdownProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full right-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] animate-fadeIn" dir="rtl">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="block px-4 py-2 hover:bg-gray-100 text-right"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;
