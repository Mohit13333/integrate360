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
    <nav className="bg-white shadow py-6 relative z-50">
      {/* Container with max-width and auto margins */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/genesis.png" alt="Genesis Logo" className="h-14" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-[#1C1C1C] text-sm md:text-lg">
            {menuItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-1 cursor-pointer">
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
            <ul className="flex flex-col gap-4 text-[#1C1C1C] text-sm font-medium">
              {menuItems.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between cursor-pointer py-2">
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown size={14} />}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;