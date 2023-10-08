import { routes } from "../config/routes";
import { useAuth } from "../providers/auth-provider";
import { Navigate, Route, Routes } from "react-router-dom";

const Layout = () => {
  const { user } = useAuth();
  const isAuthenticated = user?.emailVerified;

  return (
    <div className="root-layout">
      <Routes>
        {routes.map((route, i) =>
          <Route
            key={i}
            path={route.path}
            element={
              route.isPrivate && !isAuthenticated ?
                <Navigate to="/auth" replace/>
                :
                <route.component/>
            }
          />
        )}
      </Routes>
    </div>
  );
};

export { Layout };