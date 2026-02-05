const Features = ()=>{
    return(

<section>
<div>
  <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h3>


 <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Fast Performance" },
              { icon: "🎨", title: "Clean Design" },
              { icon: "🔒", title: "Secure Code" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer"
                onClick={() => alert(item.title)}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600">
                  Click to learn more about this feature.
                </p>
              </div>
            ))}
          </div>






</div>

</section>


    );
}

export default Features;