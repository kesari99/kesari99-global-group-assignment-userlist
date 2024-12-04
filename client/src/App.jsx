import { Route, Routes } from "react-router-dom";
import Listings from "./pages/home";
import AuthPage from "./pages/auth";
import RouteGaurd from "./route-guard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";


export default function App() {
  const {auth} = useContext(AuthContext)
  console.log(auth)
  return (
    <Routes>
      <Route path="/" element={<RouteGaurd authenticate={auth.authenticate} element ={<Listings />}  /> }/>
      <Route path="/auth" element={<RouteGaurd authenticate={auth.authenticate} element ={<AuthPage />}  /> }/>
    </Routes>
  )
}