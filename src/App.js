import { useState } from "react";

import Auth from "./views/Auth";
import Product from "./views/Product";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Auth />
      {/* <Product /> */}
    </>
  );
}

export default App;
