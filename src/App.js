import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import prodData from "./components/productData.json";
import Filter from "./components/Filter";
import DropDown from "./components/DropDown";
import { useState } from "react";

function App() {
    const [filter, setFilter] = useState("");

    const handleChecked = (filterData) => {
        console.log("app wala = ", filterData);
        setFilter(filterData);
    };

    return (
        <div className="App bg-gray-200 w-screen h-full">
            <Nav />
            <h1>{filter}</h1>
            <div className="flex gap-4 justify-center px-[50px] md:px-[100px] lg:px-[200px] pb-10">
                <Filter onChecked={handleChecked} />
                <div className="">
                    <DropDown />
                    <div className="flex flex-wrap justify-between gap-2">
                        {prodData.map((product) => {
                            return filter === product.category ||
                                filter === product.brand ||
                                filter === product.price ? (
                                <Products
                                    key={product.id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    prePrice={product.prePrice}
                                    reviewCount={product.reviewCount}
                                    category={product.category}
                                    className="flex"
                                    onChecked={handleChecked}
                                />
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
