import React from "react";

const Footer = ({ listItems }) => {
    let completedCount = 0;
    let totalCount = listItems.length;
    listItems.forEach((el) => (el.completed ? completedCount++ : null));
    let percentage = Math.floor((completedCount/totalCount) * 100)

    return (
        <p className="stats">
            {listItems.length === 0
                ? "Start adding some items to your packing list 🚀"
                : `You've added ${completedCount}/${totalCount} objects. (${percentage}% completed)`}
        </p>
    );
};

export default Footer;
