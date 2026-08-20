import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import React from "react";
import { handleDelete, setEditValue } from "../features/inventorySlice";

const List = () => {
  const products = useSelector((state) => state.inventory.products);

  const dispatch = useDispatch();

  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => {
            return (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>
                  <button onClick={() => dispatch(setEditValue(p.id))}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => dispatch(handleDelete(p.id))}>
                    Delete
                  </button>
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
