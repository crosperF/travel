import ListItem from "./ListItem";

const List = ({ listItems, deleteItemHandler, completeItemHandler }) => {
    return (
        <div className="list">
            <ul>
                {listItems.map((el, idx) => (
                    <ListItem
                        key={el.id}
                        itemData={el}
                        deleteItemHandler={deleteItemHandler}
                        completeItemHandler={completeItemHandler}
                    />
                ))}
            </ul>
        </div>
    );
};

export default List;
