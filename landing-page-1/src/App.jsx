import React from "react";
import Header from './components/Header';
import HeroBanner from "./components/HeroBanner";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard"; 
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer"; 
function App() {
    const demoProduct = {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: "$1200",
        oldPrice: "$1400",
        discount: "15% OFF",
        img: "📱"
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            
            <div className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6 flex-1 w-full">
                <Sidebar />
                <div className="flex-1">
                    <HeroBanner />
                    
                    <h2 className="text-xl font-bold my-6">Featured Product</h2>
                    <div className="w-64">
                         <ProductCard product={demoProduct} />
                    </div>

                    <FlashSale />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;