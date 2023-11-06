import React, { useState } from "react";

const Form = ({ addItemHandler }) => {
    const [item, setItem] = useState("");
    const [count, setCount] = useState(1);

    const options = [];
    for (let i = 1; i <= 15; i++) {
        options.push(
            <option key={i} value={i}>
                {i}
            </option>
        );
    }

    const update_input = (e) => {
        setItem(() => e.target.value);
    };

    const update_count = (e) => {
        setCount(() => Number(e.target.value));
    };

    const submit_form = (e) => {
        e.preventDefault();
        addItemHandler({
            id: Date.now(),
            count,
            item,
            completed: false,
        });
        setItem("");
        setCount(1);
    };

    return (
        <form className="add-form" onSubmit={submit_form}>
            <h3>To add to the travel bucket </h3>
            <select value={count} onChange={update_count}>
                {options}
            </select>
            <input value={item} onChange={update_input} />
            <button type="submit">add</button>
        </form>
    );
};

export default Form;
