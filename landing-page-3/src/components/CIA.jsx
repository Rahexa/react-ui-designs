const CIA = () => {

  const handleContact = () => {
    alert("Contact button clicked!");
  };

  return ( 
    <section id="pricing" className="bg-blue-600 py-16 text-center text-white">
      <h3 className="text-3xl font-bold mb-4">
        Ready to start your project?
      </h3>
      <button
        onClick={handleContact}
        className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 cursor-pointer"
      >
        Contact Us
      </button>
    </section>
  );
}

export default CIA;
