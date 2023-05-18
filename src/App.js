import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import prodData from "./components/productData.json";
import Filter from "./components/Filter";
import DropDown from "./components/DropDown";

function App() {
    return (
        <div className="App bg-gray-200 w-screen h-full">
            <Nav />
            <div className="flex gap-4 justify-center px-[50px] md:px-[100px] lg:px-[200px] pb-10">
                <Filter />
                <div className="">
                    <DropDown />
                    <div className="flex flex-wrap justify-between gap-2">
                        {prodData.map((product) => {
                            return (
                                <Products
                                    key={product.id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    prePrice={product.prePrice}
                                    reviewCount={product.reviewCount}
                                    category={product.category}
                                    className="flex"
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
