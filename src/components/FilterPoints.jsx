import React from "react";

function FilterPoints({ heading, one, two, three, four, five, onChecked }) {
    const handleCheckBox = (e) => {
        if (e.target.checked) {
            return onChecked(e.target.value);
        } else {
            return onChecked("");
        }
    };

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
                        onChange={handleCheckBox}
                        value={one}
                    />
                    <label
                        htmlFor="checkbox1"
                        className="ml-2 block text-gray-900"
                    >
                        {one}
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="checkbox2"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={two}
                    />
                    <label
                        htmlFor="checkbox2"
                        className="ml-2 block text-gray-900"
                    >
                        {two}
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="checkbox3"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={three}
                    />
                    <label
                        htmlFor="checkbox3"
                        className="ml-2 block text-gray-900"
                    >
                        {three}
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="checkbox3"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={four}
                    />
                    <label
                        htmlFor="checkbox3"
                        className="ml-2 block text-gray-900"
                    >
                        {four}
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="checkbox3"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        value={five}
                    />
                    <label
                        htmlFor="checkbox3"
                        className="ml-2 block text-gray-900"
                    >
                        {five}
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FilterPoints;
