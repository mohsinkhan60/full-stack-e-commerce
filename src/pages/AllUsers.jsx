import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { db, storage } from "../../firebasse";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const AllUsers = () => {
  const user = useSelector((state) => state.auth.user);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [users, setUsers] = useState([]);
  const DEMO_EMAIL = import.meta.env.VITE_DEMO_EMAIL;
  const isDemoUser = user?.email === DEMO_EMAIL;

  const toggleUserSelection = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const deleteUserData = async (uid) => {
    try {
      await deleteDoc(doc(db, "users", uid)); // corrected path here
      console.log(`Successfully deleted user with id: ${uid}`);
    } catch (error) {
      console.error("Error deleting user data from Firestore:", error);
      throw error;
    }
  };

  const handleDelete = async (userId) => {
    setIsDisabled(true);
    try {
      await deleteUserData(userId);
      setUsers((prev) => prev.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user data:", error);
    } finally {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await getAllUsers();
      const usersWithImageURLs = await Promise.all(
        allUsers.map(async (user) => {
          try {
            const imageUrl = await getDownloadURL(ref(storage, user.image));
            return { ...user, image: imageUrl };
          } catch (error) {
            console.error("Error fetching user image:", error);
            return { ...user, image: "" };
          }
        })
      );
      setUsers(usersWithImageURLs);
    };
    fetchUsers();
  }, []);

  return (
    <div className="px-4 sm:px-6 py-8 container mx-auto items-center justify-center max-w-full my-8 lg:px-4 xl:px-5">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(users.map((u) => u.id));
                      } else {
                        setSelectedUsers([]);
                      }
                    }}
                    checked={
                      selectedUsers.length === users.length && users.length > 0
                    }
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  is Admin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.isAdmin ? "Yes" : "No"}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <NavLink to={`/dashboard/edit-user/${user.id}`}>
                        <button className="flex items-center justify-center bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
                          Edit
                        </button>
                      </NavLink>
                      <button
                        onClick={() => {
                          if (isDemoUser) {
                            toast.info("Demo account cannot delete products.");
                          } else {
                            handleDelete(user.id);
                          }
                        }}
                        disabled={isDisabled}
                        className={`px-3 py-1 flex items-center justify-center rounded-md 
                ${
                  isDisabled
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AllUsers;
