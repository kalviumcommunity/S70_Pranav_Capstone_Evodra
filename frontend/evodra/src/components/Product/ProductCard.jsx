// src/components/Product/ProductCard.jsx

const ProductCard = ({ product }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
      </div>
    );
  };
  
  export default ProductCard; // ✅ THIS is the key line
  