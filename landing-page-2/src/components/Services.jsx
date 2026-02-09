const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: "Web Development",
      desc: "Creating modern, responsive, and high-performance websites."
    },
    {
      id: 2,
      title: "App Development",
      desc: "Building intuitive mobile applications for Android and iOS."
    },
    {
      id: 3,
      title: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure for your business."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
        <p className="text-gray-500 mt-2">We provide the best solutions for your growth.</p>
      </div>

      {/* ২. সার্ভিস গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map((service) => (
          <div key={service.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;