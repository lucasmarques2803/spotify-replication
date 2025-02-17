import React from "react";
import {
    faBackwardStep,
    faCirclePause,
    faCirclePlay,
    faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString();
    const seconds = Math.floor(timeInSeconds % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${seconds}`;
};

const timeStringToSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(":").map(Number);

    return minutes * 60 + seconds;
};

const Player = ({ duration, audio, randomSongId, randomSongId2 }) => {
    const durationInSeconds = timeStringToSeconds(duration);
    const audioPlayer = useRef();
    const progressBar = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(formatTime(0));

    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
        setIsPlaying(!isPlaying);
    };

    let progress = 0;
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isPlaying) {
                setCurrentTime(
                    formatTime(Math.floor(audioPlayer.current.currentTime))
                );
                progress = audioPlayer.current.currentTime / durationInSeconds;
                progressBar.current.style.setProperty(
                    "--_progress",
                    `${progress * 100}%`
                );
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isPlaying]);

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
                    icon={isPlaying ? faCirclePause : faCirclePlay}
                    onClick={playPause}
                />

                <Link to={`/song/${randomSongId2}`}>
                    <FontAwesomeIcon
                        className="player__icon"
                        icon={faForwardStep}
                    />
                </Link>
            </div>

            <div className="player__progress">
                <p className="player__time">{currentTime}</p>

                <div className="player__bar">
                    <div
                        ref={progressBar}
                        className="player__bar-progress"
                    ></div>
                </div>

                <p className="player__time">{duration}</p>
            </div>

            <audio ref={audioPlayer} src={audio}></audio>
        </div>
    );
};

export default Player;
