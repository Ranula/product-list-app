import React, { useState, useEffect } from "react";
import Table from "./MuiTable";
import styles from "../assets/styles/main.module.css";
import { fetchProducts } from "../api/index";
import ImgMediaCard from "./ImgMediaCard";

const Main = () => {
  const initialState = {
    productData: '',
    selectedProduct: {
      images:[]
    }
  }
  const [productData, setProductData] = useState(initialState);
  const [selectedProduct, setSelectedProduct] = useState(initialState)

  const fetchData = async () => {
    await fetchProducts()
    .then((data) => {
      setProductData(data);
    })
    .catch((e) => {
      console.error(e);
    });
  };

  const setProduct = (
    params
  ) => {
    setSelectedProduct(params.row)
    //send event to GA
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <main className={styles.main_section}>
      <div className={styles.container}>
        <Table products={productData} handleEvent={setProduct}/>
      </div>
      {selectedProduct.title ? <div className={styles.image_container}>
      <ImgMediaCard product={selectedProduct} ></ImgMediaCard>
      </div> : null}
    </main>
  );
};

export default Main;
