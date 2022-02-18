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
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
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
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      <button className="btn" onClick={() => setTours([])}>
        Clear all
      </button>
    </main>
  );
}

export default App;
