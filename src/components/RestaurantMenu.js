import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"


const RestaurantMenu = () => {
    cosnt [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () =>{
        const data = await fetch('')
        const json = await data.json()
        setResInfo(json.data)
    }

    return !resInfo ? (
    <Shimmer/>
    ) : (
        <div className="menu">
            <h1>{resInfo.name}</h1>
            <h2>Menu</h2>
            <ul>
                <il>Biryani</il>
                <il>Burgers</il>
                <il>Diet Coke</il>
            </ul>
        </div>
    )
}

export default RestaurantMenu