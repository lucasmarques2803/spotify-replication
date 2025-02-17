import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songs }) => {
    const [items, setItems] = useState(5);

    return (
        <div className="song-list">
            {songs
                .filter((_, index) => index < items)
                .map((currSong, index) => (
                    <SongItem {...currSong} index={index} key={index} />
                ))}

            {items < songs.length ? (
                <p
                    className="song-list__see-more"
                    onClick={() => {
                        setItems(items + 5);
                    }}
                >
                    Ver mais
                </p>
            ) : (
                <></>
            )}
        </div>
    );
};

export default SongList;
