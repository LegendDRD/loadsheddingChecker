import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
export default function Home() {
  const [isonline, setIsOnline] = useState();

  useEffect(() => {
    //
    axios
      .get("https://api.stitch-sa.co.za/v1/user/testv2")
      .then((response: any) => {
        setIsOnline(response.data.message);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {isonline === true ? (
        <div className="onlinediv">
          <h1>Online</h1>
        </div>
      ) : (
        <>
          {" "}
          {isonline === false ? (
            <div className="offdiv">
              <h1>Offline</h1>
            </div>
          ) : (
            <h1>Loading</h1>
          )}{" "}
        </>
      )}
    </>
  );
}
