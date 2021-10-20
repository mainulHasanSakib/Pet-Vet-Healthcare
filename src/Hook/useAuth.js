import { useContext } from "react"
import { AuthContext } from "../Hook/contexts/Authprovider"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;