"use client";

import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UploadCloudIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaPlus, FaTags } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db, storage } from "../../firebasse";
import { toast } from "react-toastify";

const AddToCart = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const DEMO_EMAIL = import.meta.env.VITE_DEMO_EMAIL;
  const isDemoUser = auth?.currentUser?.email === DEMO_EMAIL;

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleCreateNewListing = async (
    image,
    name,
    price,
    description,
    category,
    gender
  ) => {
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
    if (isDemoUser) {
      toast.info("Demo users cannot add new products.");
      return;
    }

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

  const updateUserData = async (uid) => {
    const docRef = doc(db, "Products", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  };

  const updateProductPost = async (id, updatedData) => {
    if (isDemoUser) {
      toast.info("Demo users cannot update products.");
      return;
    }

    try {
      const imageRef = ref(storage, `uploads/images/${Date.now()}-${updatedData?.image.name}`);
      const uploadResults = await uploadBytes(imageRef, updatedData?.image);
      const ProductRef = doc(db, "Products", id);
      await updateDoc(ProductRef, {
        ...updatedData,
        image: uploadResults.ref.fullPath,
      });
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const getImageUrl = (path) => getDownloadURL(ref(storage, path));

  useEffect(() => {
    const getProductDetails = async () => {
      if (!id) return;
      const response = await updateUserData(id);
      if (!response) return;

      const url = await getImageUrl(response?.image || response?.imageURL).catch(() => "");
      setFormData({
        ...formData,
        image: url || response?.image || response?.imageURL || "",
        name: response?.name || "",
        price: response?.price || "",
        description: response?.description || "",
        category: response?.category || "",
        gender: response?.gender || "",
      });
    };
    getProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    if (isDemoUser) {
      toast.info("Demo users cannot add new products.");
      return;
    }
    await updateProductPost(id, formData);
    navigate("/shop");
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
      <form className="space-y-6">
        {/* Image Upload */}
        <div className="bg-white p-5 rounded-xl">
          <h1 className="text-gray-700 text-xl font-semibold mb-6">
            {id ? "Edit" : "Add"} Product
          </h1>
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
                src={
                  typeof formData.image === "object"
                    ? URL.createObjectURL(formData.image)
                    : formData.image
                }
                alt="Preview"
                className="w-80 max-w-md h-64 object-cover p-2 border"
              />
            ) : (
              <div className="w-80 max-w-md h-64 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <UploadCloudIcon className="size-8" />
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Drag your image here, or Browse
                </p>
                <p className="text-sm text-gray-500">Support JPG, PNG, JPEG files</p>
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-4 rounded-2xl">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">Product Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md shadow-sm"
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaTags className="inline mr-2" />
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md shadow-sm"
                placeholder="Enter price"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md shadow-sm"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md shadow-sm"
                required
              >
                <option value="">Select Gender</option>
                {genders.map((gen) => (
                  <option key={gen} value={gen}>{gen}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Size and Color */}
          <div className="flex flex-col gap-4 mt-6 lg:flex-row lg:justify-between">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      selectedSize === size
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Colors</label>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    type="button"
                    key={color}
                    onClick={() => handleColorClick(color)}
                    className={`w-5 h-5 rounded-full border-2 ${
                      selectedColors.includes(color)
                        ? "border-indigo-600"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaTags className="inline mr-2" />
              Description
            </label>
            <textarea
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm"
              placeholder="Enter description"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              onClick={id ? handleEdit : handleSubmit}
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaPlus className="mr-2" />
              {id ? "Edit" : "Add"} Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToCart;
