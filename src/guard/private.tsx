import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default ({ children }: { children: ReactNode }) => {
    const user = useSelector((store: any) => store?.user);
    if (!user.isLogedIn) {
        return <Navigate to={'/login'} replace={true} />;
    } else {
        return <>{children}</>;
    }
};