import { useContext } from "react"; // Para extraer los datos
import ItemsContext from "../context/DataProvider.jsx";


const useItems = () => {
  return useContext(ItemsContext);
};

  
export default useItems;
