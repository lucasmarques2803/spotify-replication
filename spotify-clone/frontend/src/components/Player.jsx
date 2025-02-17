import React from "react";
import {
    faBackwardStep,
    faCirclePlay,
    faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Player = ({ duration, randomSongId, randomSongId2 }) => {
    return (
        <div className="player">
            <div className="player__controllers">
                <Link to={`/song/${randomSongId}`}>
                    <FontAwesomeIcon
                        className="player__icon"
                        icon={faBackwardStep}
                    />
                </Link>

                <FontAwesomeIcon
                    className="player__icon player__icon--play"
                    icon={faCirclePlay}
                />

                <Link to={`/song/${randomSongId2}`}>
                    <FontAwesomeIcon
                        className="player__icon"
                        icon={faForwardStep}
                    />
                </Link>
            </div>

            <div className="player__progress">
                <p className="player__time">00:00</p>

                <div className="player__bar">
                    <div className="player__bar-progress"></div>
                </div>

                <p className="player__time">{duration}</p>
            </div>
        </div>
    );
};

export default Player;
