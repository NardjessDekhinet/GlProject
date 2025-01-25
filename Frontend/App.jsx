import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import OverviewPage from "./pages/admin/OverviewPage";
import ProductsPage from "./pages/admin/ProductsPage";
import UsersPage from "./pages/admin/UsersPage";
import Offer from "./pages/admin/Offer";
import Planning from "./pages/prestataire/Planning";
import Profile from "./pages/prestataire/Profile";
import PrestataireDashboard from "./pages/prestataire/PrestataireDashboard";
import SideBar from "./components/SideBar";
import SideBarPrestataire from "./components/SideBarPrestataire";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isPrestataireRoute = location.pathname.startsWith("/prestataire");

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Sidebar */}
      {isAdminRoute && <SideBar />}
      {isPrestataireRoute && <SideBarPrestataire />}

      {/* Main Content */}
      <div className="flex flex-col w-full">
        <Routes>
          {/* Routes Admin */}
          <Route path="/admin" element={<OverviewPage />} />
          <Route path="/admin/products" element={<ProductsPage />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/offers" element={<Offer />} />

          {/* Routes Prestataire */}
          <Route path="/prestataire/dashboard" element={<PrestataireDashboard />} />
          <Route path="/prestataire/planning" element={<Planning />} />
          <Route path="/prestataire/profile" element={<Profile />} />

          {/* Redirections selon l'utilisateur */}
          <Route path="/" element={<Navigate to="/admin" />} /> {/* Default redirection admin */}
          <Route path="*" element={<Navigate to={isAdminRoute ? "/admin" : "/prestataire/dashboard"} />} /> {/* Route par défaut en fonction du contexte */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
