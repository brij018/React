import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import List from "./components/List";
import { getUsers } from "./api/data";

const initialFilters = { name: "", username: "", email: "", company: "" };

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    getUsers()
      .then((res) => setData(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredData = data.filter((user) => {
    const name = user.name?.toLowerCase() ?? "";
    const username = user.username?.toLowerCase() ?? "";
    const email = user.email?.toLowerCase() ?? "";
    const company = user.company?.name?.toLowerCase() ?? "";

    return (
      name.includes(filters.name.toLowerCase()) &&
      username.includes(filters.username.toLowerCase()) &&
      email.includes(filters.email.toLowerCase()) &&
      company.includes(filters.company.toLowerCase())
    );
  });

  return (
    <>
      <Filter filters={filters} onFilterChange={setFilters} />
      <List
        data={filteredData}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default App;