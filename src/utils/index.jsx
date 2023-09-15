import axios from "axios";

export const customFetch = axios.create({
    baseURL: "https://strapi-store-server.onrender.com/api"
})

export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format((price/100).toFixed(2));
    return dollarsAmount
}

export const optionsArray = (num) => {
    return Array.from({length: num}, (_, idx) => {
        const value = idx + 1;

        return <option key={value}>{value}</option>
    })
}


   