import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getLocalStorageTheme = () => {
    const theme = localStorage.getItem("theme") || "winter"
    document.documentElement.setAttribute("data-theme", theme);
    return theme
}

const getLocalUser = localStorage.getItem("user") || null;

const defaultState = {
   user: getLocalUser,
   theme: getLocalStorageTheme()
}

const userSlice = createSlice({
    name: "user",
    initialState: defaultState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload 
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("user")
            toast.success("Logged out successfully")
        },
        toggleTheme: (state) => {
            const newTheme = state.theme === "winter" ? "dracula" : "winter"
            state.theme = newTheme
            document.documentElement.setAttribute("data-theme", state.theme)
            localStorage.setItem("theme", state.theme)
        }
    }
})

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions
export default userSlice.reducer