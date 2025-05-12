import { Outlet } from "react-router-dom";
import HeaderWithNav from "../HeaderWithNav/HeaderWithNav";
import Footer from "../Footer/Footer";
import DonateButton from "../DonateButton/DonateButton";

export default function AppLayout() {
  return (
    <div>
      <HeaderWithNav />
      <Outlet />
      {/*<DonateButton /> */}
      <Footer />
    </div>
  );
}
