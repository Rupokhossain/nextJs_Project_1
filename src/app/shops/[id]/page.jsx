import Image from "next/image";
import Link from "next/link";
import { 
  FaStar, 
  FaEye, 
  FaSync, 
  FaTruck, 
  FaCheckCircle, 
  FaRegQuestionCircle, 
  FaShareAlt 
} from "react-icons/fa";

const ShopDetails = async ({ params }) => {
  const { id } = await params; 

  if (!id) {
    return <div className="text-center py-20 text-red-500">Invalid Shop ID</div>;
  }

  let shop = null;
  try {
    const res = await fetch(`http://localhost:5000/shops/${id}`, { 
      cache: "no-store" 
    });
    
    if (!res.ok) {
      throw new Error("Data fetching failed");
    }
    
    shop = await res.json();
  } catch (error) {
    console.error("Error fetching shop details:", error);
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-red-500">Something went wrong!</h2>
        <p className="text-gray-600">Could not load product details. Is your backend running?</p>
        <Link href="/shop" className="text-blue-500 underline mt-4 block">Go back to Shop</Link>
      </div>
    );
  }

  const themeColor = "text-[#00a090]";
  const bgThemeColor = "bg-[#00a090]";

  return (
    <div className="py-20 bg-white font-sans text-gray-800">
      <div className="container mx-auto px-4 md:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="relative bg-[#f4f6f8] rounded-lg min-h-[450px] flex items-center justify-center p-8">
            {/* Sale Badge */}
            <span className={`absolute top-6 left-6 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${bgThemeColor}`}>
              Sale
            </span>

            {/* Image (Safe Check) */}
            {shop?.image ? (
               <div className="relative w-full h-[400px]">
                 <Image 
                    src={shop.image} 
                    alt={shop.title || "Product Image"} 
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                 />
               </div>
            ) : (
              <div className="text-gray-400 font-medium">No Image Available</div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            
            <h4 className={`${themeColor} text-sm font-bold uppercase tracking-wide mb-2`}>
              {shop?.name || "Instructor"}
            </h4>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
              {shop?.title || "Product Title"}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <span className="text-sm text-gray-500 font-medium">
                ({shop?.reviews || 0} customer review)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 border-b border-gray-200 pb-6 mb-6">
              <span className="text-2xl font-bold text-gray-900">${shop?.newPrice}</span>
              {shop?.oldPrice && (
                <span className="text-xl text-gray-400 line-through">${shop.oldPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {shop?.description || "No description provided for this item."}
            </p>

            {/* View Counter */}
            <div className="flex items-center text-sm text-gray-800 mb-6">
              <FaEye className="mr-2 text-lg" />
              <span>28 people are viewing this right now</span>
            </div>

            {/* Stock Progress */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Only 15 items left in stock!</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full w-[15%] ${bgThemeColor}`}></div>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 text-sm text-gray-700">
              <li className="flex items-center gap-3"><FaSync className="text-gray-400" /> Free returns</li>
              <li className="flex items-center gap-3"><FaTruck className="text-gray-400" /> Free shipping via DHL</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-gray-400" /> Taxes included</li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mb-4">
              {/* Add to Cart Button */}
              <button className="w-full py-3 border border-gray-900 text-gray-900 cursor-pointer font-bold rounded hover:bg-gray-200 transition uppercase tracking-wide">
                Add To Cart
              </button>

              {/* Buy Now Button */}
              <button className={`w-full py-4 text-white font-bold rounded shadow-lg uppercase tracking-wide hover:opacity-90 cursor-pointer transition ${bgThemeColor}`}>
                Buy The Item Now
              </button>
            </div>

            {/* Footer Links */}
            <div className="flex items-center gap-6 text-sm text-gray-600 font-medium mt-4">
              <Link href="/compare" className="flex items-center gap-2 hover:text-black transition">
                <FaSync /> Compare
              </Link>
              <button className="flex items-center gap-2 hover:text-black transition">
                <FaRegQuestionCircle /> Ask a question
              </button>
              <button className="flex items-center gap-2 hover:text-black transition">
                <FaShareAlt /> Share
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;