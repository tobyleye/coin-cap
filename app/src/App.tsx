import { useEffect, useState } from "react";
import ListingTable from "./ListingTable"
import "./App.css";

async function fetchListings(): Promise<any> {
  const { data } = await fetch(' http://127.0.0.1:5000/listings').then(res => res.json())
  return data;
}


function App() {
  const [show, setShow] = useState(false);
  const [listings, setListings] = useState([])

  function dramaticIntro(): void {
    !show && setShow(true);
  }

  useEffect(() => {
    fetchListings().then(data => {
      setListings(data)
    })
  }, [])

  return (
    <div className="App">
      {/* <h1
        className="title"
        style={{
          transform: show ? "translateY(0)" : "translateY(-500px)",
        }}
      >
        Coin-cap
      </h1>
      <p style={{ opacity: show ? 1 : 0 }}>Coming soon</p>
      <button className="cta" onClick={dramaticIntro}>
        What's this?
      </button> */}

       {/* { listings.map(item => (
         <Listing />
       ))} */}
       { listings.length > 0 ? (
          <ListingTable listings={listings} />
       ) : null }
     
    </div>
  );
}

export default App;
