import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterPoints from "./FilterPoints";

function Filter({ onButtonClick, onChecked }) {
    // const handleData = (data) => {
    //     console.log(
    //         // eslint-disable-next-line no-useless-concat
    //         JSON.stringify(data) + " " + "filterType ",
    //         data.filterType + "|| filterCount = " + data.count
    //     );
    //     onChecked(data);
    // };

    return (
        <div className="bg-white w-[500px] h-fit p-4 mt-8 shadow-lg rounded-lg">
            <div className="flex justify-between">
                <h1>Filter</h1>
                <FontAwesomeIcon icon={faFilter} />
            </div>
            <FilterPoints
                heading="brand"
                one="electric"
                two="xyz"
                three="abc"
                four="pqr"
                five="fabric"
                onChecked={onChecked}
            />
            <FilterPoints
                heading="Category"
                one="electronics"
                two="watches"
                three="bags"
                four="decoratives"
                five="fabrics"
                onChecked={onChecked}
            />
            <FilterPoints
                heading="Price"
                one="<$100"
                two="$100-$199"
                three="$200-$599"
                four="$600-$999"
                five=">$1000"
                onChecked={onChecked}
            />
        </div>
    );
}

export default Filter;
