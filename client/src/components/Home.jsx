import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [getname, setData] = useState("");
  const [getemail, setMail] = useState("");
  const m = localStorage.getItem("mail");
  useEffect(() => {
    axios
      .get("http://localhost:3000/home")
      .then((result) => {
        setData(result.data["name"]);
        setMail(result.data["email"]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>{m}</p>
    </div>
  );
}
export default Home;
