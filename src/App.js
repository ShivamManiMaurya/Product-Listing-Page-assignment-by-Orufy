import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import prodData from "./components/productData.json";
import Filter from "./components/Filter";
import DropDown from "./components/DropDown";
import { useEffect, useState } from "react";

function App() {
    const [filterProd, setFilterProd] = useState("");
    const [filterClicked, setFilterClicked] = useState(false);
    const [count, setCount] = useState(0);
    const [filterArr, setFilterArr] = useState([]);
    // const filterArr = [];
    // let count = 0;

    useEffect(() => {
        // console.log("useEffect count = ", count);
    }, [count, filterProd]);

    const HandleChecked = (filterData) => {
        // console.log("count= ", count);

        if (count <= 0) {
            setFilterClicked(!filterClicked);
        }

        if (filterData[0]) {
            // console.log("if chala ", filterData[0] + " " + filterData[1]);
            setCount(count + 1);
            // filterArr.push(filterData[1]);
            setFilterArr([...filterArr, filterData[1]]);
            setFilterProd(filterData[1]);
        } else if (filterData[0] === false) {
            // console.log("else chala = ", count);
            if (count <= 1) {
                setFilterClicked(!filterClicked);
            }
            setCount(count - 1);
            const index = filterArr.indexOf(filterData[1]);
            filterArr.splice(index, 1);
            console.log(index);
        }

        // console.log("after count = ", count);
        // console.log(filterArr);
    };

    // console.log(filterArr);
    // console.log("filterProd = ", filterProd);

    const filterCategory = prodData.filter((product) =>
        filterArr.includes(product.category)
    );

    const filterCatArr = filterCategory.map((prod) => prod.brand);

    const filterBrand = prodData.filter((product) =>
        filterArr.includes(product.brand)
    );

    const filterBrandArr = filterBrand.map((prod) => prod.brand);

    const conclusion = filterCatArr.filter((product) =>
        filterBrandArr.includes(product)
    );

    // console.log(filterItems);
    console.log(filterBrand);
    console.log("conclutions = ", conclusion);
    console.log(filterBrandArr);
    console.log(filterCatArr);

    return (
        <div className="App bg-gray-200 w-screen h-full">
            <Nav />
            {/* <h1>{count}</h1> */}
            <div className="flex gap-4 justify-center px-[50px] md:px-[100px] lg:px-[200px] pb-10">
                <Filter onChecked={HandleChecked} />
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
                                          onChecked={HandleChecked}
                                      />
                                  );
                              })
                            : filterCatArr.length > 0
                            ? filterCategory.map((product) => {
                                  return (
                                      <Products
                                          key={product.id}
                                          image={product.image}
                                          name={product.name}
                                          price={product.price}
                                          prePrice={product.prePrice}
                                          reviewCount={product.reviewCount}
                                          category={product.category}
                                          onChecked={HandleChecked}
                                      />
                                  );
                              })
                            : filterBrand.map((product) => {
                                  return (
                                      <Products
                                          key={product.id}
                                          image={product.image}
                                          name={product.name}
                                          price={product.price}
                                          prePrice={product.prePrice}
                                          reviewCount={product.reviewCount}
                                          category={product.category}
                                          onChecked={HandleChecked}
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
