const Navbar = () => {   // ✅ Capital N

  const HandleLogoClick = ()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const GetStartClicked = () =>{
    alert("Get Started button clicked");
  };

  return (
    <div className="font-sans scroll-smooth">
      <header className="w-full bg-white fixed top-0 z-10 border-b">
        <div className="flex mx-auto max-w-7xl items-center justify-between px-9 py-3">
          <h1
            onClick={HandleLogoClick}
            className="text-blue-500 text-[20px] font-bold leading-7 cursor-pointer"
          >
            DevStudio
          </h1>

          <div className="hidden md:flex items-center gap-6 text-[16px] text-gray-700">
            <span className="hover:text-blue-700 cursor-pointer">Home</span>
            <span className="hover:text-blue-700 cursor-pointer">Services</span>
            <span className="hover:text-blue-700 cursor-pointer">Pricing</span>
            <span className="hover:text-blue-700 cursor-pointer">Contact</span>

            <button
              onClick={GetStartClicked}
              className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <div className="h-10"></div>
    </div>
  );
};

export default Navbar;   // ✅ Capital
