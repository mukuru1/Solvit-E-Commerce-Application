import { useEffect, useState } from "react";
import api from "../api/axios";
import { ProductCard } from "./productCard";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/products/categories").then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    setLoading(true);
    const url =
      category === "all"
        ? `/products?sortBy=${sortBy}&order=${order}&limit=100`
        : `/products/category/${category}?sortBy=${sortBy}&order=${order}`;

    api.get(url).then((res) => {
      setProducts(res.data.products);
      setLoading(false);
    });
  }, [category, sortBy, order]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;