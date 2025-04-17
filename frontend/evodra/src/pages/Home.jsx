import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Discover the Future of Shopping with <span className="text-indigo-600">Evodra</span>
          </h1>
          <p><h1>RESTYLE REWEAR REFRESH</h1></p>
          <p className="text-lg text-gray-700">
            Explore a curated selection of products tailored to your lifestyle. Seamless shopping experiences await you.
          </p>
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition"
          >
            Browse Products
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center p-6 bg-gray-100 min-h-[70vh]">
  <img
    src="https://slikk-dev-assets-public.s3.amazonaws.com/product/1080x864/Artboard291aa881be75e49f7963bdceaae2cbe66_e6ad4c301e5e4d55a3b9b10ce4067cc5.jpg"
    alt="Hero"
    className="w-full max-w-4xl rounded-xl shadow-2xl object-cover"
  />
</div>

      </div>
    </div>
  );
};

export default Home;
