import productData from '../data/products.json'

const fetchData = async () =>{
    return productData;
}
export const fetchProducts = (param = "all" ) => {
    if(param === "all") return fetchData();
}

