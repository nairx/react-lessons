import React, { useEffect, useState } from "react";
import axios from "axios";
export default function App22() {
  const [tmp, setTmp] = useState();

  const fetchWeather = async () => {
    const res = await axios.get("http://localhost:8080/weather");
    setTmp(res.data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);
  return <div style={{backgroundColor:'pink'}}>{tmp}</div>;
}
