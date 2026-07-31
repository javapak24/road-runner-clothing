import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="app-shell">
      <Header />

      <main className="site-main">
        {/* React Router renders the matching page here. */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
