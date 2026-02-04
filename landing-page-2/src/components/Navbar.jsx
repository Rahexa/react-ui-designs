const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">NextGen IT</h1>
      <ul className="flex gap-6">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;