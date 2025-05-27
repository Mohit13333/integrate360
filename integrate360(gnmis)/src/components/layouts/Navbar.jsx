import { ChevronDown } from 'lucide-react';

const Navbar = () => {
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
    <nav className="bg-white shadow px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/genesis.png" alt="Genesis Logo" className="h-12" />
      </div>

      <ul className="flex items-center gap-6 text-gray-800 text-sm font-medium">
        {menuItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1 cursor-pointer hover:text-blue-700">
            {item.label}
            {item.dropdown && <ChevronDown size={14} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
