import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "./../assets/database/songs";

const Main = ({ type }) => {
    return (
        <div className="main">
            {/* Artist ItemList */}
            {type === "artists" || type === undefined ? (
                <ItemList
                    title="Artistas"
                    items={5}
                    itemsArray={artistArray}
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
