import { useDispatch, useSelector } from "react-redux";

import Auth from "./views/Auth";
import Product from "./views/Product";
import { updateUser } from "./store/mainReducer";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.main.userData);

  const handleUser = (newUser) => {
    dispatch(updateUser(newUser));
  };

  return <>{!user ? <Auth handleUser={handleUser} /> : <Product />}</>;
}

export default App;
