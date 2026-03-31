import { createSlice } from "@reduxjs/toolkit";
import CheeseBurger from '../assets/cheeseBurger.png'
import ChickenBurger from '../assets/Chicken-burger.png'
import BeefBurger from '../assets/beef-burger.png'
import Beefdoublemeat from '../assets/beef-doublemeat.png'
import Chickenpizza from '../assets/Chicken-pizza.png'
import Vegpizza from '../assets/Veg-pizza.png'
import Vegburger from '../assets/Veg-burger.png'


const initialState = {
    menulist: [
        {
            category: "burger",
            items: [
                { id: 1, title: "Veg Burger", price: 149, rating: 4.5, image: Vegburger },
                { id: 2, title: "Cheese Burger", price: 199, rating: 3.9, image: CheeseBurger },
                { id: 3, title: "ChickenBurger", price: 199, rating: 4.2, image: ChickenBurger },
                { id: 4, title: "BeefBurger", price: 99, rating: 4.0, image: BeefBurger },
                { id: 5, title: "Beef-Doublemeat", price: 99, rating: 4.0, image: Beefdoublemeat },
                

            ]
        },
        {
            category: "pizza",
            items: [
                { id: 5, title: "Veg-Pizza", price: 149, rating: 4.5, image: Vegpizza },
                { id: 6, title: "Chicken-Pizza", price: 199, rating: 4.2, image: Chickenpizza },
               
            ]
        },
        
            


    ],
    cartlist: []

};
export const Menus = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenus: (state, action) => {
            state.menulist.push(action.payload);
        },
        setCart: (state, action) => {
            console.log(action.payload);
            const item = state.cartlist.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            }
            else {
                state.cartlist.push(action.payload);
            }
        },
        deleteCart: (state, action) => {
            state.cartlist = state.cartlist.filter((item) => item.id !== action.payload.id)
        },

    }
});

export const { setMenus, setCart, deleteCart } = Menus.actions;
export default Menus.reducer;
