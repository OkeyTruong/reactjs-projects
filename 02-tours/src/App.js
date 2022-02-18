import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import axios from "axios";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // fetchData
  const fetchTours = async () => {
    setLoading(true);
    try {
      // fetch
      // const res = await fetch(url);
      // const tours = await res.json();
      
      // axios
      const res = await axios.get(url);
      const data = res.data; 
      setTours(data)
    } catch (error) {}
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours/>
    </main>
  );
}

export default App;
