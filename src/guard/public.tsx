import { ReactNode } from "react";
import { useSelector } from "react-redux";

export default  ({ children }: {children: ReactNode}) => {
    const user = useSelector((store : any) => store?.user);
    console.log('user', user);
    if (user.isLogedIn) {
        return <> </>;
    } else {
        return <>{children}</>;
    }
  };