import React from "react";
import ItemList from "./ItemList";

const Main = () => {
    return (
        <div className="main">
            {/* Artist ItemList */}
            <ItemList title="Artistas" items={5} />

            {/* Music ItemList */}
            <ItemList title="Músicas" items={10} />
        </div>
    );
};

export default Main;
