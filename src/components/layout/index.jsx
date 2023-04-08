import Header from "../Header";

function Layout({children}) {
    return ( 
        <div className="w-screen h-screen overflow-hidden bg-purple-100">
            <Header/>
            <div className="h-[89vh] ">
                {children}
            </div>
        </div>
     );
}

export default Layout;