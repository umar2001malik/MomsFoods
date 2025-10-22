// src/Components/Context/AuthContext.jsx
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import i18n from '../../i18n/i18n';

const APIContext = createContext();

const APIProvider = ({ children }) => {
  const navigate = useNavigate();
  const server = import.meta.env.VITE_API_URL;

  // ✅ Initialize state from localStorage
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem("access_token") || null
  );
  const [refreshToken, setRefreshToken] = useState(
    () => localStorage.getItem("refresh_token") || null
  );
// ✅ Track current language from i18n
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // ✅ Listen for language changes
  useEffect(() => {
    const onLangChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on('languageChanged', onLangChange);

    return () => {
      i18n.off('languageChanged', onLangChange);
    };
  }, []);
  // ✅ Keep localStorage in sync
  useEffect(() => {
    if (accessToken) localStorage.setItem("access_token", accessToken);
    else localStorage.removeItem("access_token");

    if (refreshToken) localStorage.setItem("refresh_token", refreshToken);
    else localStorage.removeItem("refresh_token");
  }, [accessToken, refreshToken]);

  console.log("Access Token:", accessToken);
  console.log("Refresh Token:", refreshToken);
  console.log("Current Language:", currentLang)

  // ✅ Helper for authorized requests
  const getConfig = () => ({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  // ✅ Login
  const login = async (credentials) => {
    const response = await axios.post(`${server}/login`, credentials);
    if (response?.data?.data?.access_token && response?.data?.data?.refresh_token) {
      setAccessToken(response.data.data.access_token);
      setRefreshToken(response.data.data.refresh_token);
    }
    return response.data;
  };

  // ✅ Logout
  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };


  // ✅ Create Category
  const CreateCategory = async (data) => {
    try {
      const response = await axios.post(`${server}/category/create`, data, getConfig());

      return response.data;
    } catch (error) {
      console.error("CreateCategory Error:", error);
      throw error;
    }
  };

  // ✅ Update Category
  const UpdateCategory = async (id, data) => {
    try {
      const response = await axios.put(`${server}/category/update/${id}`, data, getConfig());
      return response.data;
    } catch (error) {
      console.error("UpdateCategory Error:", error);
      throw error;
    }
  };

  // ✅ Get Single Category
  const ReadCategory = async (id) => {
    try {
      const response = await axios.get(`${server}/category/read/${id}`, getConfig());
     console.log("response of read category is :",response)
      return response.data;
    } catch (error) {
      console.error("ReadCategory Error:", error);
      throw error;
    }
  };

  // ✅ Delete Category
  const DeleteCategory = async (id) => {
    try {
      const response = await axios.delete(`${server}/category/delete/${id}`, getConfig());
      return response.data;
    } catch (error) {
      console.error("DeleteCategory Error:", error);
      throw error;
    }
  };

  // ✅ List All Categories
  // const ListCategories = async () => {
  //   try {
  //     const response = await axios.get(`${server}/category/list`, getConfig());
  //     console.log("response of list category is :",response)
  //     return response.data;
  //   } catch (error) {
  //     console.error("ListCategories Error:", error);
  //     throw error;
  //   }
  // };

  // ✅ List All Categories (GET - add target_lang)
  const ListCategories = async () => {
    try {
      const url = `${server}/category/list?target_lang=${currentLang}`;
      const response = await axios.get(url, getConfig());
      console.log("response of list category is :", response);
      return response.data;
    } catch (error) {
      console.error("ListCategories Error:", error);
      throw error;
    }
  };

  /* ------------------------------------------------- */


    /* ---------------------- Product API Functions ---------------------- */

  // ✅ Create Product
 const CreateProduct = async (data) => {
  try {
    const isFormData = data instanceof FormData;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
      },
    };

    const response = await axios.post(`${server}/product/create`, data, config);
    return response.data;
  } catch (error) {
    console.error("CreateProduct Error:", error);
    throw error;
  }
};


  // ✅ Update Product
const UpdateProduct = async (product_id, data) => {
  try {
    const response = await axios.put(
      `${server}/product/update/${product_id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // ❌ remove Content-Type: application/json
          // ✅ Let Axios detect multipart/form-data automatically
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("UpdateProduct Error:", error);
    throw error;
  }
};


  // ✅ Get Single Product
  // const ReadProduct = async (id) => {
  //   try {
  //     const response = await axios.get(`${server}/product/read/${id}`, getConfig());
  //     console.log("response of read product is :", response);
  //     return response.data;
  //   } catch (error) {
  //     console.error("ReadProduct Error:", error);
  //     throw error;
  //   }
  // };

  // ✅ Get Single Product (GET - add target_lang)
  const ReadProduct = async (id) => {
    try {
      const url = `${server}/product/read/${id}?target_lang=${currentLang}`;
      const response = await axios.get(url, getConfig());
      console.log("response of read product is :", response);
      return response.data;
    } catch (error) {
      console.error("ReadProduct Error:", error);
      throw error;
    }
  };

  // ✅ Delete Single Product
  const DeleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${server}/product/delete/${id}`, getConfig());
      return response.data;
    } catch (error) {
      console.error("DeleteProduct Error:", error);
      throw error;
    }
  };

  // ✅ Delete Many Products
  const DeleteManyProducts = async (ids) => {
    try {
      const response = await axios.delete(`${server}/product/delete_many`, {
        ...getConfig(),
        data: { ids }, // usually an array like [1, 2, 3]
      });
      return response.data;
    } catch (error) {
      console.error("DeleteManyProducts Error:", error);
      throw error;
    }
  };

  // ✅ List All Products
  const ListProducts = async () => {
    try {
      // const response = await axios.get(`${server}/product/list?page=1&skip=0&limit=100`, getConfig());
      const url = `${server}/product/list?page=1&skip=0&limit=100&target_lang=${currentLang}`;
    const response = await axios.get(url, getConfig());
      console.log("response of list product is :", response);
      return response.data;
    } catch (error) {
      console.error("ListProducts Error:", error);
      throw error;
    }
  };
//  contact page 
  const contactForm = async (data) => {
    console.log("email data ", data);
    
    const response = await axios.post(`${server}/contact/send`, data);
    console.log("data is ", data);
    
    return response.data;
  };
  const provider = {
    accessToken,
    refreshToken,
    setAccessToken,
    setRefreshToken,
    login,
    logout,
    //category
    CreateCategory,
    UpdateCategory,
    ReadCategory,
    DeleteCategory,
    ListCategories,
    //product
    CreateProduct,
    UpdateProduct,
    ReadProduct,
    DeleteProduct,
    DeleteManyProducts,
    ListProducts,

    // 
    contactForm
  };

  return <APIContext.Provider value={provider}>{children}</APIContext.Provider>;
};

export const useAPI = () => useContext(APIContext);
export { APIProvider };
