import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = ({ authenticate, element }) => {
    console.log(authenticate)
  const location = useLocation();

  if (!authenticate && location.pathname !== "/auth") {
    // Redirect unauthenticated users to the auth page
    return <Navigate to="/auth" replace />;
  }

  if (authenticate && location.pathname === "/auth") {
    // Redirect authenticated users away from the auth page
    return <Navigate to="/" replace />;
  }

  // Render the component for authenticated users or auth page
  return element;
};

export default RouteGuard;
