import React, { useState, useContext, useRef } from "react";
import UserContext from "../Context.js";
import "./AudioPlayer.css";
// import Audio from "../Home/SectionHome/ReaderElement/Audio";

function AudioPlayer(props) {
  const TheContext = useContext(UserContext);
  const [playing, setPlaying] = useState(true);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [CurrentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();
  const OnChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;

    setPosition(e.target.value);
  };
  const currentPosition = (e) => {
    // setPosition((CurrentTime / duration) * 100);
    setPosition((e.currentTarget.currentTime / e.currentTarget.duration) * 100);
  };
  const playAudio = () => {
    const audio = audioRef.current;

    if (!playing) {
      setPlaying(true);
      audio.play();
    } else if (playing) {
      setPlaying(false);
      audio.pause();
    }
  };
  const setTime = (seconds) => {
    let duration = seconds;
    if (!duration) return "00m 00s";

    let hours = parseInt(duration / 3600);
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (hours > 0) {
      return `${hours}h ${min}m ${sec}s`;
    } else if (min > 0) {
      return `${min}m ${sec}s`;
    } else {
      return `00m ${sec}s`;
    }
  };
  const increaseSec = (sec) => {
    const audio = audioRef.current;
    audio.currentTime += sec;
    setPosition(((CurrentTime + sec) / duration) * 100);
  };
  const decreaseSec = (sec) => {
    const audio = audioRef.current;
    audio.currentTime -= sec;
    setPosition(((CurrentTime - sec) / duration) * 100);
  };
  return (
    <div className="audio-div position-fixed">
      <div className="Audio-bar">
        <div className="brogress d-flex  flex-column justify-content-between align-items-center">
          <div className="brogress-bar" style={{ width: `${position}%` }}></div>
          <input
            step="0.01"
            type="range"
            className="range"
            value={`${position}`}
            onChange={OnChange}
          />
          <audio
            ref={audioRef}
            src={TheContext.surra}
            autoPlay
            onLoadedData={(e) => {
              setDuration(e.currentTarget.duration);
              setPlaying(true);
            }}
            onTimeUpdate={(e) => {
              currentPosition(e);
              setCurrentTime(e.currentTarget.currentTime);
            }}
          ></audio>
        </div>
        <div className="audio-count d-flex justify-content-between align-items-center ">
          <span>{setTime(duration)}</span>
          <div className="control-audio d-flex justify-content-between  ">
            <span>
              <i
                className="fa fa-angle-double-right"
                onClick={() => increaseSec(15)}
              ></i>
            </span>
            <span onClick={playAudio}>
              {playing === true ? (
                <i className="fa fa-pause"></i>
              ) : (
                <i
                  className="fa fa-play"
                  style={{ transform: "translateX(2px)" }}
                ></i>
              )}
            </span>
            <span>
              <i
                className="fa fa-angle-double-left"
                onClick={() => decreaseSec(15)}
              ></i>
            </span>
          </div>
          <span>{setTime(CurrentTime)}</span>
        </div>
      </div>
      <div className="Audio-tools  "></div>
      <div className="Audio-tools  "></div>
    </div>
  );
}

export default AudioPlayer;
