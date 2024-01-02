import { useEffect, useState } from "react";


const useAllProducts = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then(res => res.json())
      .then(data => {
        setMenu(data)
        setLoading(false)
      });
  }, [])
  return [menu, loading]
}

export default useAllProducts;