import AppBar from "./components/AppBar/AppBar";
import { Suspense } from "react";


const Layout = ({ children}) => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    );
};

export default Layout