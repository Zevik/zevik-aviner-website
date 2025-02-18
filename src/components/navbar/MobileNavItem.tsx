
import { Link } from "react-router-dom";

interface MobileNavItemProps {
  to?: string;
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
  isSubmenu?: boolean;
}

const MobileNavItem = ({ to, label, onClick, children, isSubmenu = false }: MobileNavItemProps) => {
  if (to) {
    return (
      <Link 
        to={to} 
        className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }

  return (
    <div>
      <button 
        onClick={onClick}
        className="w-full px-3 py-2 text-primary hover:bg-gray-100 rounded-md text-right"
      >
        {label}
      </button>
      {children && (
        <div className={`${isSubmenu ? 'pr-6' : ''} mt-2 space-y-1`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default MobileNavItem;
