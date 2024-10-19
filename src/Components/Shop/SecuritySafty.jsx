/* eslint-disable react/prop-types */
import { Truck, ThumbsUp, CreditCard, MessageCircle } from "lucide-react";

const FeatureCard = ({ Icon, title, description }) => (
  <div className="flex items-center space-x-4 bg-[#FFE9DA] p-4 lg:p-8 rounded-2xl">
    <div className="bg-orange-500 rounded-full p-2">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const SecuritySafty = () => {
  const features = [
    {
      Icon: Truck,
      title: "Free Shipping",
      description: "Free shipping all over the US",
    },
    {
      Icon: ThumbsUp,
      title: "100% Satisfaction",
      description: "Free shipping all over the US",
    },
    {
      Icon: CreditCard,
      title: "Secure Payments",
      description: "Free shipping all over the US",
    },
    {
      Icon: MessageCircle,
      title: "24/7 Support",
      description: "Free shipping all over the US",
    },
  ];

  return (
    <div className="container mx-auto max-w-full my-10 px-2 lg:px-4 xl:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};
export default SecuritySafty;
