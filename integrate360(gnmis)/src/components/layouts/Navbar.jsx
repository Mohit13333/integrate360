import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: 'Home' },
    { label: 'About', dropdown: true },
    { label: 'Courses', dropdown: true },
    { label: 'Faculty & Research', dropdown: true },
    { label: 'Placements', dropdown: true },
    { label: 'Exams' },
    { label: 'Student Corner', dropdown: true },
    { label: 'Events' },
  ];

  return (
    <nav className="bg-white shadow px-6 py-3 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/genesis.png" alt="Genesis Logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-800 text-sm font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx} className="flex items-center gap-1 cursor-pointer hover:text-blue-700">
              {item.label}
              {item.dropdown && <ChevronDown size={14} />}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-3 px-6">
          <ul className="flex flex-col gap-4 text-gray-800 text-sm font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between cursor-pointer hover:text-blue-700 py-2">
                <span>{item.label}</span>
                {item.dropdown && <ChevronDown size={14} />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
