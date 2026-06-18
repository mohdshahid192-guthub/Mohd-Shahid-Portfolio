import { useNavigate, useLocation } from "react-router-dom";

export const useSmartNavigate = () => {

const navigate = useNavigate()
const location = useLocation()

const smartNavigate = (targetPath, options = {}) => {
      
  if (location.pathname === targetPath)
    return
  navigate(targetPath, options)
}

return smartNavigate

}