import { createSlice } from "@reduxjs/toolkit"
import { toast, Zoom } from 'react-toastify';


const initialState = {
    items: JSON.parse(localStorage.getItem('collectionItems')) || []
}
const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addToCollection: (state, action) => {
            const alreadyExists = state.items.find(item => item.id === action.payload.id)
            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collectionItems', JSON.stringify(state.items))
            }
        },
        removeFromCollection: (state, action) => {

            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem('collectionItems', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collectionItems')
        },
        addedToast: () => {
            toast.success('🦄 Wow so easy!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeToast: () => {
            toast.error('🦄 Removed from collection!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
})

export const { addToCollection, removeFromCollection, clearCollection, addedToast, removeToast } = collectionSlice.actions
export default collectionSlice.reducer