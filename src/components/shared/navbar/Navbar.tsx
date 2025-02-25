import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import SheetComponent from "./SheetComponent";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center">
            <Image
              src="https://png.pngtree.com/png-vector/20240224/ourmid/pngtree-a-cute-girl-running-with-some-colorful-shopping-bag-png-image_11873577.png"
              alt="Shop Logo"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            />
            <span className="text-white text-xl font-bold ml-2 hidden sm:inline">
              ShopFrenzy
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-700 p-2 rounded-md w-full max-w-xs">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
          />
          <Search className="text-white w-5 h-5 ml-2 cursor-pointer" />
        </div>

        {/* Menu Items */}
        <div className="space-x-6 text-white hidden md:flex">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/product" className="hover:text-gray-400 transition">
            Products
          </Link>
          <Link href="/about-us" className="hover:text-gray-400 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition">
            Contact
          </Link>
        </div>

        {/* Cart and User Icons */}
        <div className="flex items-center space-x-6">
          <SheetComponent />

          {user ? (
            <UserButton />
          ) : (
            <Link href={"/sign-in"}>
              <User className="text-white w-6 h-6 cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
