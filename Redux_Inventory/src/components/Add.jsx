import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/inventorySlice";

const Add = () => {
  const dispatch = useDispatch();
  const editValue = useSelector((state) => state.inventory.editValue);

  const [input, setInput] = useState({
    name: "",
    quantity: 0,
    price: 0,
    category: "",
  });

  useEffect(() => {
    editValue ? setInput(editValue) : null;
  }, [editValue]);

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(input));
    setInput({
      name: "",
      quantity: 0,
      price: 0,
      category: "",
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          placeholder="Name of the Product"
          name="name"
          value={input.name}
          required
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="">Quantity: </label>
        <input
          type="number"
          name="quantity"
          required
          value={input.quantity}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="">Price: </label>
        <input
          type="number"
          name="price"
          required
          value={input.price}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="">Category: </label>
        <select
          name="category"
          value={input.category}
          required
          onChange={(e) => handleChange(e)}
        >
          <option value="Food">Food</option>
          <option value="Sports">Sports</option>
          <option value="Household">Household</option>
          <option value="Electronics">Electronics</option>
        </select>
        <br />
        <br />
        <button type="submit">{editValue ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default Add;
