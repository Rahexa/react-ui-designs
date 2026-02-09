const Features = () => {
  const featuresData = [
    { icon: "⚡", title: "Fast Performance", description: "Click to learn more about this feature." },
    { icon: "🎨", title: "Clean Design", description: "Click to learn more about this feature." },
    { icon: "🔒", title: "Secure Code", description: "Click to learn more about this feature." }
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h3>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((item, index) => (
            <div
              key={index}
              onClick={() => alert(item.title)}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
