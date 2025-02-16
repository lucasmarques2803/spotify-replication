import React from "react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "./../assets/database/artists";
import { songsArray } from "./../assets/database/songs";

const Artist = () => {
    const { id } = useParams();

    const { name, banner } = artistArray.find(
        (currArtist) => currArtist.id === Number(id)
    );

    const artistSongs = songsArray.filter((song) => song.artist === name);

    const randomSongIndex = Math.floor(
        Math.random() * (artistSongs.length - 1)
    );
    const randomSongId = artistSongs[randomSongIndex].id;

    return (
        <div className="artist">
            <div
                className="artist__header"
                style={{
                    backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
                }}
            >
                <h2 className="artist__title">{name}</h2>
            </div>

            <div className="artist__body">
                <h2>Populares</h2>

                <SongList songs={artistSongs} />
            </div>

            <Link to={`/song/${randomSongId}`}>
                <FontAwesomeIcon
                    className="single-item__icon single-item__icon--artist"
                    icon={faCirclePlay}
                />
            </Link>
        </div>
    );
};

export default Artist;
