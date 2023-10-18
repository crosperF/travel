import React from "react";

const ListItem = ({ itemData, deleteItemHandler, completeItemHandler }) => {
    return (
        <li>
            <input
                onChange={() => completeItemHandler(itemData.id)}
                type="checkbox"
                defaultChecked={itemData.completed}
                value={itemData.completed}
            />
            <span
                style={
                    itemData.completed
                        ? { textDecoration: "line-through" }
                        : null
                }
            >
                {itemData.item}
            </span>
            <button onClick={() => deleteItemHandler(itemData.id)}>❌</button>
        </li>
    );
};

export default ListItem;
