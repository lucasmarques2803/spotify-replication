import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songs }) => {
    const items = 5;

    return (
        <div className="song-list">
            {songs
                .map((currSong, index) => (
                    <SongItem {...currSong} index={index} key={index} />
                ))
                .filter((_, index) => index < items)}

            <p className="song-list__see-more">Ver mais</p>
        </div>
    );
};

export default SongList;
