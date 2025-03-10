import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { artistsArray, songsArray } from "../../api/api.js";

const Song = () => {
    const { id } = useParams();

    const {
        image,
        name,
        duration,
        artist: artistName,
        audio,
    } = songsArray.find((song) => song._id === id);

    const { _id: artistId, image: artistImage } = artistsArray.find(
        (currArtistObj) => currArtistObj.name === artistName
    );

    const artistSongs = songsArray.filter((song) => song.artist === artistName);

    const randomSongIndex = Math.floor(
        Math.random() * (artistSongs.length - 1)
    );
    const randomSongId = artistSongs[randomSongIndex]._id;

    const randomSongIndex2 = Math.floor(
        Math.random() * (artistSongs.length - 1)
    );
    const randomSongId2 = artistSongs[randomSongIndex2]._id;

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
                    audio={audio}
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
