const Hero = () => {
  const handleGetStarted = () => {
    console.log("Button clicked!");
  };

  return (
    <section id="home" className="bg-zinc-950 w-full overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Build Modern Websites Faster
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            We help startups and businesses create clean, fast and scalable web experiences.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer shadow-lg shadow-blue-500/20"
            >
              Get Started
            </button>

            <a
              href="#services"
              className="border border-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-sm"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Developer working on a laptop" 
              className="relative w-full h-[300px] md:h-[450px] object-cover rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;