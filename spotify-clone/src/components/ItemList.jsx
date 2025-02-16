import React from "react";
import SingleItem from "./SingleItem";

const ItemList = ({ title, items }) => {
    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} populares</h2>
                <a href="" className="item-list__link">
                    Mostrar tudo
                </a>
            </div>

            <div className="item-list__container">
                {Array(items)
                    .fill()
                    .map((_, index) => (
                        <SingleItem key={`${title}-${index}`} />
                    ))}
            </div>
        </div>
    );
};

export default ItemList;
