import css from "./App.module.css";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchImages } from "../imageGalleryApi";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Modal from "react-modal";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const { data, totalPages } = await fetchImages(query, page);

        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
        setShowBtn(totalPages && totalPages !== page);
      } catch (e) {
        setError(true);
        setShowBtn(false);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, query]);

  const handleSearch = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
    if (value.trim() === "") {
      setShowBtn(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (data) => {
    setIsOpen(true);
    setSelectedImg(data);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery handleClick={openModal} images={images} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {showBtn && <LoadMoreBtn onLoadMoreBtn={handleLoadMore} />}
      {selectedImg.urls && (
        <ImageModal
          imageData={selectedImg}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}

      <Toaster position="top-right" />
    </div>
  );
};

export default App;

// VIZGRTcoNutqD_FAx7Xu7jxDe-vh7CdUCVELNwmATQ4

// api https://api.unsplash.com/

// https://api.unsplash.com/photos/?client_id=VIZGRTcoNutqD_FAx7Xu7jxDe-vh7CdUCVELNwmATQ4
