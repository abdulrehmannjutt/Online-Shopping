import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductsTable from "../components/admin/ProductsTable";

function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
        <ProductsTable/>
    </>
  );
}

export default Admin;
