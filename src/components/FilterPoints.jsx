import React from "react";

function FilterPoints({ heading, one, two, three, four, five }) {
    return (
        <div>
            <div className="border-b border-gray-500 m-4"></div>
            <div>
                <h1>{heading}</h1>
                <div className="flex items-center">
                    <input
                        id="checkbox1"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label for="checkbox1" className="ml-2 block text-gray-900">
                        {one}
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="checkbox2"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label for="checkbox2" className="ml-2 block text-gray-900">
                        {two}
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="checkbox3"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label for="checkbox3" className="ml-2 block text-gray-900">
                        {three}
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="checkbox3"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label for="checkbox3" className="ml-2 block text-gray-900">
                        {four}
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="checkbox3"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label for="checkbox3" className="ml-2 block text-gray-900">
                        {five}
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FilterPoints;
