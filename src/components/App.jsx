import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchImages } from "../imageGalleryApi";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        if (query.trim() !== "") {
          const { data } = await fetchImages(query);
          setImages((prevImages) => {
            return [...prevImages, ...data];
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query]);

  console.log(images);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      <Toaster position="top-center" reverseOrder={false} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </div>
  );
};

export default App;

// VIZGRTcoNutqD_FAx7Xu7jxDe-vh7CdUCVELNwmATQ4

// api https://api.unsplash.com/

// https://api.unsplash.com/photos/?client_id=VIZGRTcoNutqD_FAx7Xu7jxDe-vh7CdUCVELNwmATQ4
