import React from "react";

function DropDown() {
    return (
        <div className="flex justify-between flex-wrap mt-8">
            <div className="font-bold text-gray-600">
                <a className="hover:text-gray-950" href="#">
                    Home
                </a>{" "}
                /{" "}
                <a className="hover:text-gray-950" href="#">
                    Home Decoration
                </a>{" "}
                /{" "}
                <a className="hover:text-gray-950" href="#">
                    Artificial
                </a>
            </div>
            <div>
                <select name="Sort by" id="">
                    <option value="" disabled selected className="hidden">
                        Sort By
                    </option>
                    <option value="priceHightoLow">Price high to low</option>{" "}
                    <option value="priceLowtoHigh">Price low to high</option>
                </select>
            </div>
        </div>
    );
}

export default DropDown;
