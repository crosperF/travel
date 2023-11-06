import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Footer  from "./Footer";

function App() {
    const [list, setList] = useState([
        { id: 1, count: 1, item: "sunglasses", completed: false },
        { id: 2, count: 1, item: "book", completed: true },
    ]);

    // HANDLERS TO MAKE CHANGES TO LIST
    const addItemToList = (newItem) => {
        setList((prev) => [...prev, newItem]);
    };

    const removeItem = (itemId) => {
        setList((prev) => {
            return prev.filter((el) => el.id !== itemId);
        });
    };

    const setCompletionHandler = (id) => {
        setList((prev) => {
            return prev.map((el) =>
                el.id === id ? { ...el, completed: !el.completed } : el
            );
        });
    };

    const clearListHandler = () => {
        let confirm = window.confirm("Do you want to delete all the items?");
        if (confirm) {
            setList([]);
        }
    };

    return (
        <div className="app">
            <h1>Travel list</h1>
            <Form addItemHandler={addItemToList} />
            <List
                listItems={list}
                deleteItemHandler={removeItem}
                completeItemHandler={setCompletionHandler}
                onClearList={clearListHandler}
            />
            <Footer listItems={list} />
        </div>
    );
}

export default App;
