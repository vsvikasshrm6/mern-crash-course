import { create } from 'zustand';
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProducts: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: 'false', message: 'Product not created' }
        }
        const res = await fetch('http://localhost:5000/', {
            method: "Post",
            headers :{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newProduct),
        })
        const data = res.json();
        if (data.success === 'false') {
            return { success: 'false', message: 'Product not created' }
        }
        set((state) => ({products : [...state.products, data.data]}));
        return { success: 'true', message: 'Product created successfully' }
    },
    fetchProduct : async ()=>{
        const res = await fetch('api/allProducts', {
            method :"Get"
        })
        const data = res.json();
        if (data.success === 'false') {
            return { success: 'false', message: 'Product not fetched' }
        }
        set({products : data.data})
        return { success: 'true', message: 'Product retrieved successfully' }
    },
    deleteProduct : async (pid)=>{
      const res = await fetch(`http:/localhost:5000/deleteProduct/${pid}`,
        {method : "DELETE"}
      )
      const data = res.json();
      if (data.success === 'false') {
        return { success: 'false', message: 'Product not deleted' }
    }
    set((state)=>({products : state.products.filter((product)=>product.id !==pid)}));
    return { success: 'true', message: 'Product deleted successfully' }
    },
    updateProduct : async (updatedProduct)=>{
        const res = await fetch("http:localhost:5000/updateProduct",
            {
                method : "PUT",
                headers :{
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(updatedProduct),
            }
        )
        const data = res.json();
        if (data.success === 'false') {
            return { success: 'false', message: 'Product not updated' }
        }
        set((state)=>({products : state.products.map((product)=>{return product.id !=updatedProduct.id ?product: updatedProduct})}));
        return { success: 'true', message: 'Product updated successfully' }
    } 
}))