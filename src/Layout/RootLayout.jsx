import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";

const RootLayout = () => {
  // const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const docRef = doc(db, "users");
  //       const docSnap = await getDoc(docRef);

  //       if (docSnap.exists()) {
  //         const data = docSnap.data();
  //         dispatch(
  //           setUser({
  //             ...user,
  //             isAdmin: data.isAdmin,
  //           })
  //         );
  //       } else {
  //         console.log("User data not found");
  //       }
  //     } catch (err) {
  //       console.log(`Error fetching user data: ${err.message}`);
  //     }
  //   };

  //   getUser();
  // }, [dispatch, user]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
