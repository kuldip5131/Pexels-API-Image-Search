import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Save from "./Components/Save";

function App() {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");

  const API_KEY =
    "3Yg1IgBnHGStEPJAJxtYSLnwXcleMzvNM5hfoHtSFaA55FoCIhLuY4SN";

  const fetchImages = async () => {

    const res = await
      axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=60`,
        {
          headers: {
            Authorization: API_KEY
          }
        }
      );
    
    setImages(res.data.photos);
    console.log(images);
  }

  useEffect(() => {
    fetchImages();
  }, [search])

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home images={images} />} />
          <Route path="/save" element={<Save />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;