import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { PopupProvider } from "./contexts/hooks/usePopup";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";


import { useEffect } from "react";
import AuthRoutes from "./layouts/auth";
import Setting from "./views/auth/auth/Setting";
import Mypage from "./views/auth/auth/Mypage";

function App() {
  return (
    <AuthProvider>
      <PopupProvider>
        <Router basename="/SnsForYou">
          <ScrollToTop />
          <Routes>
            
            <Route path={"/*"} element={<AuthRoutes />} />

            <Route element={<ProtectedRoute />}>
              <Route path={"/setting"} element={<Setting />} />
              <Route path={"/mypage"} element={<Mypage />} />
            </Route>

          </Routes>
        </Router>
      </PopupProvider>
    </AuthProvider >
  );
}


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [pathname]);

  return null;
};

export default App;

