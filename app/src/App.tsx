import { useEffect, useState } from "react";
import ListingTable from "./ListingTable"
import "./App.css";

async function fetchListings(): Promise<any> {
  const { data } = await fetch(' http://127.0.0.1:5000/listings').then(res => res.json())
  return data;
}


function App() {
const [listings, setListings] = useState([])

  useEffect(() => {
    fetchListings().then(data => {
      setListings(data)
    })
  }, [])

  return (
    <div className="App">
       { listings.length > 0 ? (
          <ListingTable listings={listings} />
       ) : null }
     
    </div>
  );
}

export default App;
