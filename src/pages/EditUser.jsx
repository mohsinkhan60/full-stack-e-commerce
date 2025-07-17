import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebasse";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const fetchUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

const updateUserDetails = async (id, updatedData) => {
  try {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, updatedData);
  } catch (error) {
    console.error("Error updating user details:", error);
  }
};

const EditUser = () => {
  const user = useSelector((state) => state.auth.user);
  const { id } = useParams();
  const navigate = useNavigate();
  const DEMO_EMAIL = import.meta.env.VITE_DEMO_EMAIL;
  const isDemoUser = user?.email === DEMO_EMAIL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isAdmin: false,
  });

  useEffect(() => {
    const getUserDetails = async () => {
      const userData = await fetchUserData(id);
      if (userData) {
        setFormData({
          name: userData.name || "",
          email: userData.email || "",
          isAdmin: userData.isAdmin || false,
        });
      }
    };
    getUserDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (isDemoUser) {
      toast.info("Demo users cannot add new products.");
      return;
    }
    await updateUserDetails(id, formData);
    navigate("/dashboard/allusers");
  };

  return (
    <div className="grid grid-cols-1 container mx-auto p-4 pt-20 max-w-4xl gap-2">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter user name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="text"
          value={formData.email}
          onChange={handleChange}
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter email"
        />
      </div>
      <div>
        <label
          htmlFor="isAdmin"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Is Admin
        </label>
        <input
          type="checkbox"
          checked={formData.isAdmin}
          onChange={handleChange}
          name="isAdmin"
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
      </div>
      <button
        onClick={handleEdit}
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FaPlus className="mr-2" />
        Edit User
      </button>
    </div>
  );
};

export default EditUser;
