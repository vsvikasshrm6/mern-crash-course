import { create } from 'zustand';
export const useProductStore = create((set) => ({
    products: [],
    setProduct: (product) => set((state) => ({ products: [...state.products, product] })),
    // createProduct : (product) => {

    // }
    createProduct: async (product) => {
        if (!product.name || !product.price || !product.image) {
            return { success: 'false', message: 'Product not created' }
        }
        const res = await fetch('http://localhost:5000/', {
            method: "Post",
            body: {product}
        })
        if (res.success === 'false') {
            return { success: 'false', message: 'Product not created' }
        }
        setProduct(product);
        return { success: 'true', message: 'Product created successfully' }
    } , 
}))