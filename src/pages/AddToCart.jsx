/* eslint-disable no-undef */
import { ref, uploadBytes } from "firebase/storage";
import { UploadCloudIcon } from "lucide-react";
import { useState } from "react";
import { FaPlus, FaTags } from "react-icons/fa";
import { auth, db, storage } from "../../firebasse";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    price: "",
    description: "",
    date: Date.now(),
  });

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

  const handleCreateNewListing = async (image, name, price, description) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${image.name}`);
    const uploadResult = await uploadBytes(imageRef, image);
    return await addDoc(collection(db, 'Products'), {
      image: uploadResult.ref.fullPath,
      name,
      price,
      description,
      userID: auth.currentUser.uid,
      email: auth.currentUser.email,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { image, name, price, description } = formData; 
    await handleCreateNewListing(image, name, price, description);
    setFormData({
      image: null,
      name: "",
      price: "",
      description: "",
      date: Date.now(),
    });
    navigate("/shop")
  };
  

  return (
    <div className="container mx-auto p-4 pt-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center bg-white p-4 relative w-80 max-w-md h-64 mx-auto">
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

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <FaTags className="inline mr-2" />
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter description"
              required
            />
          </div>
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
      </form>
    </div>
  );
};

export default AddToCart;
