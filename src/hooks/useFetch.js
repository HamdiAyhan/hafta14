import { useEffect, useState } from "react";




const useFetch = (url) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json_data) => setData(json_data));
    }, [url]);
  
    return [data];
  };
  
  export default useFetch;