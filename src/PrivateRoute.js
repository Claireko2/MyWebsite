import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    console.log("currentUser in PrivateRoute:", currentUser);

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return children;
}

