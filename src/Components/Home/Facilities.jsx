/* eslint-disable react/prop-types */

import { Truck, ThumbsUp, CreditCard, MessageCircle } from "lucide-react";

const FeatureBox = ({ Icon, title, description }) => (
  <div className="flex items-center p-8 bg-green-50 rounded-xl">
    <div className="bg-green-500 p-2 rounded-full mr-3">
      <Icon className="w-10 h-10 text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  </div>
);

const Facilities = () => {
  return (
    <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <FeatureBox
          Icon={Truck}
          title="Free Shipping"
          description="Free shipping all over the US"
        />
        <FeatureBox
          Icon={ThumbsUp}
          title="100% Satisfaction"
          description="Free shipping all over the US"
        />
        <FeatureBox
          Icon={CreditCard}
          title="Secure Payments"
          description="Free shipping all over the US"
        />
        <FeatureBox
          Icon={MessageCircle}
          title="24/7 Support"
          description="Free shipping all over the US"
        />
      </div>

      <div className="bg-[#202341] rounded-lg overflow-hidden">
        <div className="relative p-8 flex flex-col lg:flex-row items-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMCBDIDIwIDAgNDAgNjAgNjAgODAgUyA4MCAxMDAgMTAwIDEwMCBaIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]" />
          <div className="relative z-10 flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Do not Miss Out on Grocery Deals
            </h2>
            <p className="text-xl text-white mb-6">
              SING UP FOR THE UPDATE NEWSLETTER
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-grow px-4 py-2 rounded-full bg-navy-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex-1">
            <img
              src="/Home/newsletter-img.png"
              alt="Grocery basket"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Facilities;
