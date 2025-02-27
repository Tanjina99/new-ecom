import Image from "next/image";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TrendingProducts from "@/components/products/TrendingProducts";
import Category from "@/components/category/Category";

const Home = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/getProducts`
  );
  const data = await res.json();
  const products = data?.products;

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="text-white py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 bg-orange-400">
            <Image
              src="https://th.bing.com/th/id/R.e5343f175bb913195fefbca34ecd5a7e?rik=XcejiWDN2bhT5g&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fAttractive-Model-Man-Transparent.png&ehk=BJFFtmLvZeKZB2Uwj0fKe%2fmcD8WbYtNy3XhWwUNmaxM%3d&risl=&pid=ImgRaw&r=0"
              alt="Summer Collection"
              height={500}
              width={500}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg font-semibold uppercase text-orange-400">
              Spring/Summer Collection
            </p>
            <h2 className="text-5xl font-bold mb-4 text-black">
              Summer Collection
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Explore our collection of amazing products and stay trendy.
            </p>
            <Link href="/shop">
              <Button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition duration-300 ease-in-out">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 font-montserrat">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Free Delivery Offer */}
            <div className="flex flex-col items-center text-center bg-green-100 shadow-lg rounded-lg p-4 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300">
              <Image
                src="https://png.pngtree.com/png-vector/20240518/ourmid/pngtree-free-delivery-png-image_12493339.png"
                alt="Free Delivery"
                height={1200}
                width={1400}
                className="w-16 h-16 mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                <span className="text-green-500">Free Delivery</span>
              </h3>
              <p className="text-gray-600 text-sm">
                Enjoy Free Delivery on All Orders! Shop Now & Save
              </p>
            </div>

            {/* Best Quality Offer */}
            <div className="flex flex-col items-center text-center bg-blue-100 shadow-lg rounded-lg p-4 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300">
              <Image
                src="https://icon-library.com/images/return-product-icon/return-product-icon-20.jpg"
                alt="Easy Return"
                height={1200}
                width={1400}
                className="w-16 h-16 mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                <span className="text-blue-500">Easy Return</span>
              </h3>
              <p className="text-gray-600 text-sm">
                Hassle-Free Returns! Enjoy Easy & Free Returns Within 30 Days.
              </p>
            </div>

            {/* Customer Support Offer */}
            <div className="flex flex-col items-center text-center bg-orange-100 shadow-lg rounded-lg p-4 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300">
              <Image
                src="https://clipground.com/images/support-png-4.png"
                alt="Customer Support"
                height={1200}
                width={1400}
                className="w-16 h-16 mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                <span className="text-orange-300">24/7 Customer Support</span>
              </h3>
              <p className="text-gray-600 text-sm">
                Customer Support! We're Here to Help Anytime, Anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Category />
      <TrendingProducts products={products.slice(0, 6)} />

      <Footer />
    </div>
  );
};

export default Home;
