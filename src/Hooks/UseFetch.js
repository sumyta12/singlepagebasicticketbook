import { useEffect, useState } from "react";
import axios from "axios";
const UseFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const canceltoken = axios.CancelToken.source();
    axios
      .get(`./fakedata.json`, { cancelToken: canceltoken.token })
      .then((res) => setData(res.data))
      .catch((err) => setError(err));

    return () => canceltoken.cancel();
  }, []);
  return [data,setData, error];
};

export default UseFetch;
