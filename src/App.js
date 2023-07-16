import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/home/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/home/sign-in/sign-in.component";



const Shop = () => {
  return (<h1> Iam the shop component</h1>);
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>

  );
}

export default App;
