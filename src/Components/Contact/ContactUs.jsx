import { Phone, Mail, MapPin } from "lucide-react";

export const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-8 container mx-auto max-w-full my-5 lg:px-4 xl:px-5">
      <div className="flex-1 bg-white p-8 rounded-lg border shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Make Custom Request
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 block w-full rounded-md border-gray-300 border p-2"
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 border p-2"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border-gray-300 border p-2"
                placeholder="Phone Number*"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 border p-2"
                placeholder="Subject"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 border p-2"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-52 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
            >
              Get a Quote
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col">
        <div className="flex-[.4] bg-white p-8 rounded-lg border shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Get In Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="text-orange-500 border p-2 rounded-full h-10 w-10" />
              <span>+00 123 456 789</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-orange-500 border p-2 rounded-full h-10 w-10" />
              <span>support24@marketpro.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-orange-500 border p-2 rounded-full h-10 w-10" />
              <span>789 Inner Lane, California, USA</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-row justify-center items-center space-x-4">
          <button className=" bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 flex items-center justify-center space-x-2">
            <span>Get Support On Call</span>
            <Phone className="h-8 w-8 border p-1 bg-orange-500 rounded-lg border-orange-500" />
          </button>
          <button className=" bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 flex items-center justify-center space-x-2">
            <span>Get Directions</span>
            <MapPin className="h-8 w-8 border p-1 bg-orange-500 rounded-lg border-orange-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
