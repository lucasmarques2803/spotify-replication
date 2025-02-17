import React from "react";
import ItemList from "./ItemList";
import { artistsArray, songsArray } from "../../api/api.js";

const Main = ({ type }) => {
    return (
        <div className="main">
            {/* Artist ItemList */}
            {type === "artists" || type === undefined ? (
                <ItemList
                    title="Artistas"
                    items={5}
                    itemsArray={artistsArray}
                    path="/artists"
                    idPath="/artist"
                />
            ) : (
                <></>
            )}

            {/* Music ItemList */}
            {type === "songs" || type === undefined ? (
                <ItemList
                    title="Músicas"
                    items={10}
                    itemsArray={songsArray}
                    path="/songs"
                    idPath="/song"
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Main;
