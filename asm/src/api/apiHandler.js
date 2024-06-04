export const addUserToDb = async (currentUser) => {
  const res = await fetch(`https://asm-server.vercel.app/users/${currentUser?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  });

  const data = await res.json();
  return data;
};

export const addProductToDb = async (product) => {
  const res = await fetch("https://asm-server.vercel.app/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const data = await res.json();
  return data;
};

export const getProductFromDb = async () => {
  const res = await fetch("https://asm-server.vercel.app/get-products");

  const data = await res.json();
  return data;
};

export const updateProductToDb = async (updatedProduct) => {
    console.log(updatedProduct);
    const res = await fetch(`https://asm-server.vercel.app/update/${updatedProduct.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
  
    const data = await res.json();
    return data;
  };


  export const deleteProductFromDb = async(id) => {
    const res = await fetch(`https://asm-server.vercel.app/delete-product/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    
    });
  
    const data = await res.json();
    return data;
  }
