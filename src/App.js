import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import prodData from "./components/productData.json";

function App() {
    return (
        <div className="App bg-gray-200 w-screen h-screen">
            <Nav />
            {prodData.map((product) => {
                return (
                    <Products
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        prePrice={product.prePrice}
                        reviewCount={product.reviewCount}
                        category={product.category}
                    />
                );
            })}
        </div>
    );
}

export default App;
