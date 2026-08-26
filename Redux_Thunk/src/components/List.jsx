import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchProducts } from "../features/productThunk";

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, loading, error } = useSelector((state) => state.Product);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>ID</th>
            <th style={{ border: "1px solid black" }}>Title</th>
            <th style={{ border: "1px solid black" }}>Price</th>
            <th style={{ border: "1px solid black" }}>Description</th>
            <th style={{ border: "1px solid black" }}>Category</th>
            <th style={{ border: "1px solid black" }}>Image</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p, index) => {
            return (
              <tr key={p.id}>
                <td style={{ border: "1px solid black" }}>{index + 1}</td>
                <td style={{ border: "1px solid black" }}>{p.title}</td>
                <td style={{ border: "1px solid black" }}>{p.price}</td>
                <td style={{ border: "1px solid black" }}>{p.description}</td>
                <td style={{ border: "1px solid black" }}>{p.category}</td>
                <td style={{ border: "1px solid black" }}>
                  <img src={p.image} alt={p.title} width="100" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
