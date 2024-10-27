"use client";

import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { UploadCloudIcon } from "lucide-react";
import { useState } from "react";
import { FaPlus, FaTags } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../firebasse";

const AddToCart = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    price: "",
    description: "",
    category: "",
    gender: "",
  });
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);

  const sizes = ["XS", "S", "M", "XL", "XXL", "3XL"];
  const colors = ["navy", "yellow", "orange", "green", "red", "teal", "blue"];
  const categories = ["Fashion", "Brand", "Local"];
  const genders = ["Men", "Women", "Unisex"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleCreateNewListing = async (image, name, price, description, category, gender) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${image.name}`);
    await uploadBytes(imageRef, image);
    return await addDoc(collection(db, "Products"), {
      image: imageRef.fullPath,
      name,
      price,
      description,
      category,
      gender,
      userID: auth.currentUser.uid,
      email: auth.currentUser.email,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { image, name, price, description, category, gender } = formData;

    if (price <= 0) {
      alert("Price must be a positive number");
      return;
    }

    try {
      await handleCreateNewListing(image, name, price, description, category, gender);
      setFormData({
        image: null,
        name: "",
        price: "",
        description: "",
        category: "",
        gender: "",
      });
      navigate("/shop");
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Failed to create listing. Please try again.");
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? "" : size);
  };

  const handleColorClick = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  return (
    <div className="container mx-auto p-4 pt-20 max-w-4xl">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="bg-white p-5 rounded-xl">
          <h1 className="text-gray-700 text-xl font-semibold mb-6">Add Product</h1>
          <div className="flex items-center justify-center bg-white mt-4 relative w-80 max-w-md h-64 mx-auto">
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 z-10"
              accept="image/jpeg, image/png"
              required
            />
            {formData.image ? (
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Uploaded Preview"
                className="w-80 max-w-md h-64 object-cover p-2 border"
              />
            ) : (
              <div className="w-80 max-w-md h-64 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative">
                <UploadCloudIcon className="size-8" />
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Drag your image here, or Browse
                </p>
                <p className="text-sm text-gray-500">
                  Support JPG, PNG, JPEG files
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">Product Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                <FaTags className="inline mr-2" />
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter price"
                required
              />
            </div>
          </div>

          <div className="space-y-8 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Categories
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Gender</option>
                  {genders.map((gen) => (
                    <option key={gen} value={gen}>{gen}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:justify-evenly lg:flex-row">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-5">Size :</label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`px-3 py-1 rounded-md text-sm ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-5">Colors :</label>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorClick(color)}
                      className={`w-5 h-5 rounded-full border-[4px] border-gray-600 ${
                        selectedColors.includes(color)
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={color}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                <FaTags className="inline mr-2" />
                Description
              </label>
              <textarea
                type="text"
                name="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter description"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaPlus className="mr-2" />
                Add Product
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#EEF2F7] rounded-xl flex justify-end gap-4 p-6">
          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="rounded-xl border bg-[#FF6C2F] text-white hover:bg-[#F0652C] hover:text-white text-sm hover:border-[#FF6C2F] border-[#FF6C2F] px-6 py-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToCart;
