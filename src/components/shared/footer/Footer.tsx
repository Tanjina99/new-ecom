import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-36">
          <div className="flex flex-col items-center space-y-2">
            <Link href="/" className="flex items-center space-x-2 -ml-6">
              <Image
                src="https://png.pngtree.com/png-vector/20240224/ourmid/pngtree-a-cute-girl-running-with-some-colorful-shopping-bag-png-image_11873577.png"
                alt="Shop Logo"
                width={1200}
                height={1300}
                className="w-12 h-12 object-contain -mt-4"
              />
              <span className="text-white text-xl font-semibold hidden sm:inline mb-6">
                ShopFrenzy
              </span>
            </Link>
            <p className="text-gray-400 text-sm text-left ml-4 leading-6">
              The best place to find amazing products. Shop with us for the best
              deals.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="hover:text-gray-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400 transition">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-gray-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-gray-400 transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-400 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="mt-2 space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">123 Street, City, Country</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">contact@shopFrenzy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} ShopLogo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
