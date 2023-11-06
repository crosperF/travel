import { useState } from "react";
import ListItem from "./ListItem";

const List = ({
    listItems,
    deleteItemHandler,
    completeItemHandler,
    onClearList,
}) => {
    const [sortOrder, setSortOrder] = useState("input");

    let sortedItems = [...listItems];
    if (sortOrder === "input") {
        sortedItems.sort((a, b) => b.id - a.id);
    } else if (sortOrder === "pack") {
        sortedItems.sort((a, b) => Number(a.completed) - Number(b.completed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((el, idx) => (
                    <ListItem
                        key={el.id}
                        itemData={el}
                        deleteItemHandler={deleteItemHandler}
                        completeItemHandler={completeItemHandler}
                    />
                ))}
            </ul>
            <div className="actions">
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="input">Sort by input</option>
                    <option value="pack">Sort by packed</option>
                </select>
                <button onClick={() => onClearList()}>Clear list</button>
            </div>
        </div>
    );
};

export default List;
