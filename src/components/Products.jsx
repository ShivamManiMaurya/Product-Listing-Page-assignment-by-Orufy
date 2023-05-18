import React from "react";
import Filter from "./Filter";
import cameraProd from "../images/cameraProd.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

function Products({ name, price, prePrice, reviewCount, category }) {
    return (
        <div className="flex gap-6 mt-10 justify-center">
            <Filter />
            <div className="bg-white w-60 rounded-md overflow-hidden">
                <div>
                    <img className="" src={cameraProd} alt="" />
                </div>
                <div className="p-4">
                    <h4 className="font-bold">{name.slice(0, 20) + "..."}</h4>
                    <p className="font-light text-sm">{category}</p>
                    <div className="flex">
                        <div className="flex mt-1.5">
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{
                                    color: "#fae500",
                                    fontSize: "12px",
                                }}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "#fae500", fontSize: "12px" }}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "#fae500", fontSize: "12px" }}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "#fae500", fontSize: "12px" }}
                            />
                            <FontAwesomeIcon
                                icon={faStarHalf}
                                style={{ color: "#fae500", fontSize: "12px" }}
                            />
                        </div>
                        <p className="mt-[-2px]">({reviewCount})</p>
                    </div>
                    <div className="flex gap-2 mt-2 items-center">
                        <h3 className="font-bold text-lg">${price}</h3>
                        <p className="text-xs line-through font-bold text-gray-400 mt-[3px]">
                            ${prePrice}
                        </p>
                        <h4 className="text-sm font-bold text-green-500 mt-0.5">
                            29% off
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
