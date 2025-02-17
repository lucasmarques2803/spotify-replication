import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
    const { id } = useParams();

    const {
        image,
        name,
        duration,
        artist: artistName,
        audio,
    } = songsArray.find((song) => song.id === Number(id));

    const { id: artistId, image: artistImage } = artistArray.find(
        (currArtistObj) => currArtistObj.name === artistName
    );

    const artistSongs = songsArray.filter((song) => song.artist === artistName);

    const randomSongIndex = Math.floor(
        Math.random() * (artistSongs.length - 1)
    );
    const randomSongId = artistSongs[randomSongIndex].id;

    const randomSongIndex2 = Math.floor(
        Math.random() * (artistSongs.length - 1)
    );
    const randomSongId2 = artistSongs[randomSongIndex2].id;

    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container">
                    <img src={image} alt={`Imagem da Música ${name}`} />
                </div>
            </div>

            <div className="song__bar">
                <Link to={`/artist/${artistId}`} className="song__artist-image">
                    <img
                        width={75}
                        height={75}
                        src={artistImage}
                        alt={`Imagem do Artista ${artistName}`}
                    ></img>
                </Link>

                <Player
                    duration={duration}
                    randomSongId={randomSongId}
                    randomSongId2={randomSongId2}
                />

                <div className="song__info">
                    <p className="song__name">{name}</p>
                    <p>{artistName}</p>
                </div>
            </div>
        </div>
    );
};

export default Song;
