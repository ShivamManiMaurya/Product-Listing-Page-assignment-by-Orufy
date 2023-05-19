import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import prodData from "./components/productData.json";
import Filter from "./components/Filter";
import DropDown from "./components/DropDown";
import { useEffect, useState } from "react";

function App() {
    const [filterProd, setFilterProd] = useState();
    const [filterClicked, setFilterClicked] = useState(false);
    const [count, setCount] = useState(0);
    // const filterProd = [];
    // let count = 0;

    const handleChecked = (filterData) => {
        console.log("count= ", count);

        if (count <= 0) {
            setFilterClicked(!filterClicked);
        }

        if (filterData) {
            console.log("if chala ", count);
            setCount(count + 1);
            setFilterProd(filterData);
        } else {
            console.log("else chala = ", count);
            setCount(count - 1);
        }

        console.log("after count = ", count);
    };

    useEffect(() => {
        console.log("useEffect count = ", count);
    }, [count]);

    const filterItems = prodData.filter(
        (product) =>
            product.category === filterProd || product.brand === filterProd
    );

    console.log(filterItems);

    return (
        <div className="App bg-gray-200 w-screen h-full">
            <Nav />
            <h1>{filterProd}</h1>
            <div className="flex gap-4 justify-center px-[50px] md:px-[100px] lg:px-[200px] pb-10">
                <Filter onChecked={handleChecked} />
                <div className="">
                    <DropDown />
                    <div className="flex flex-wrap justify-between gap-2">
                        {!filterClicked
                            ? prodData.map((product) => {
                                  return (
                                      <Products
                                          key={product.id}
                                          image={product.image}
                                          name={product.name}
                                          price={product.price}
                                          prePrice={product.prePrice}
                                          reviewCount={product.reviewCount}
                                          category={product.category}
                                          onChecked={handleChecked}
                                      />
                                  );
                              })
                            : filterItems.map((product) => {
                                  return (
                                      <Products
                                          key={product.id}
                                          image={product.image}
                                          name={product.name}
                                          price={product.price}
                                          prePrice={product.prePrice}
                                          reviewCount={product.reviewCount}
                                          category={product.category}
                                          onChecked={handleChecked}
                                      />
                                  );
                              })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
