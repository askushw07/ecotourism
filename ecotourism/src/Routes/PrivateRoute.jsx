import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
        const { auth } = useContext(AuthContext);
        if (!auth) return <Navigate to="/signin" />;
        return children;
};