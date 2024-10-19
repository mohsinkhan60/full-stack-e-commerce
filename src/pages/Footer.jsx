import { Mail, MapPin, Phone } from "lucide-react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F3FAF2] text-gray-600  flex items-center justify-center py-8 sm:px-6 container mx-auto max-w-full mt-10 px-2 lg:px-4 xl:px-5">
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src={"/Home/logo.png"}
                  alt="Marketpro Logo"
                  className="w-52 object-cover mr-2"
                />
              </div>
              <p className="mb-4">
                We Grocery Shop, an innovative team of food suppliers.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600 cursor-pointer" />
                  <span>789 Inner Lane, Blyes park, California, USA</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-green-600 cursor-pointer" />
                  <span>+00 123 456 789 or +00 987 654 012</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-green-600 cursor-pointer" />
                  <span>support24@marketpro.com</span>
                </div>
              </div>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                {[
                  "Become a Vendor",
                  "Affiliate Program",
                  "Privacy Policy",
                  "Our Suppliers",
                  "Extended Plan",
                  "Community",
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-green-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-2">
                {[
                  "Help Center",
                  "Contact Us",
                  "Report Abuse",
                  "Submit and Dispute",
                  "Policies & Rules",
                  "Online Shopping",
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-green-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* My Account */}
            <div>
              <h3 className="text-lg font-semibold mb-4">My Account</h3>
              <ul className="space-y-2">
                {[
                  "My Account",
                  "Order History",
                  "Shoping Cart",
                  "Compare",
                  "Help Ticket",
                  "Wishlist",
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-green-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Daily Groceries</h3>
              <ul className="space-y-2">
                {[
                  "Dairy & Eggs",
                  "Meat & Seafood",
                  "Breakfast Food",
                  "Household Supplies",
                  "Bread & Bakery",
                  "Pantry Staples",
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-green-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Shop on The Go</h3>
              <p className="mb-4">Marketpro App is available. Get it now</p>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="block">
                  <img
                    src="/Home/store-img1.png"
                    alt="Download on App Store"
                    className="h-9 w-full"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="/Home/store-img2.png"
                    alt="Get it on Google Play"
                    className="h-9 w-full"
                  />
                </a>
              </div>
              <div className="flex-row w-full space-x-5 items-center justify-center flex">
                <div className="text-green-700 bg-gray-200 text-2xl rounded-full p-2">
                  <FaFacebookSquare />
                </div>
                <div className="text-green-700 bg-gray-200 text-2xl rounded-full p-2">
                  <FaTwitterSquare />
                </div>
                <div className="text-green-700 bg-gray-200 text-2xl rounded-full p-2">
                  <FaInstagram />
                </div>
                <div className="text-green-700 bg-gray-200 text-2xl rounded-full p-2">
                  <IoLogoLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div className="bg-[#F3FAF2] container mx-auto max-w-full px-2 lg:px-4 xl:px-5 h-32">
        <div className="text-xl flex items-center justify-center py-4 text-[#888888]">
          Marketpro eCommerce © 2024. All Rights Reserved. Made BY Mohsin Khan
          ...
        </div>
      </div>
    </>
  );
};
export default Footer;
