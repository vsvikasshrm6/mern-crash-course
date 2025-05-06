import { create } from 'zustand';
export const useProductStore = create((set) => ({
    product: [],
    setProduct: (product) => set({product}),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: 'false', message: 'Product not created' }
        }
        const res = await fetch('http://localhost:5000/', {
            method: "Post",
            body: JSON.stringify(newProduct),
        })
        if (res.success === 'false') {
            return { success: 'false', message: 'Product not created' }
        }

        set((state) => ({product : [...state.products, res.data.data]}));
        return { success: 'true', message: 'Product created successfully' }
    },
    fetchProduct : async ()=>{
        const res = await fetch('api/allProducts', {
            method :"Get"
        })
        const data = res.json();
        set({data.data});
        

    } 
}))