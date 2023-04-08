import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function Error() {
    const {errorMessenger} = useContext(AppContext);
    return ( 
        <div className="mt-8 flex justify-center items-center">
            <span className="text-xl font-bold">{errorMessenger}</span>
        </div>
     );
}

export default Error;