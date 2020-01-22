import React, {useEffect, useRef, useState} from 'react';

interface IFileInputProps {
    fileURL: string;
}

const Video: React.FC<IFileInputProps> = (
    {fileURL}
) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState();

    useEffect(() => {
        setInterval(() => {
            setDuration(videoRef && videoRef.current && videoRef.current.duration);
            if (videoRef && videoRef.current && videoRef.current.currentTime === videoRef.current.duration) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
            setCurrentTime(videoRef && videoRef.current && videoRef.current.currentTime);
        }, 300);
    }, []);

    const makeFullScreen = () => {
        if (videoRef && videoRef.current)
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else {
                console.log("Fullscreen API is not supported");
            }
    };

    // videoRef.current!.height

    const play = () => videoRef && videoRef.current && videoRef.current.play();
    const pause = () => videoRef && videoRef.current && videoRef.current.pause();
    const volumeUp = () => {
        if (videoRef && videoRef.current && videoRef.current.volume < 0.9) videoRef.current.volume += 0.1;
        else videoRef && videoRef.current && (videoRef.current.volume = 1);
    };
    const volumeDown = () => {
        if (videoRef && videoRef.current && videoRef.current.volume > 0.1) videoRef.current.volume -= 0.1;
        else videoRef && videoRef.current && (videoRef.current.volume = 0);
    };
    const currentTimeUp = () => {
        if (videoRef && videoRef.current
            && videoRef.current.currentTime < videoRef.current.duration - 0.1) videoRef.current.currentTime += 0.1;
        else videoRef && videoRef.current && (videoRef.current.currentTime = videoRef.current.duration);
    };
    const currentTimeDown = () => {
        if (videoRef && videoRef.current
            && videoRef.current.currentTime > 0.1) videoRef.current.currentTime -= 0.1;
        else videoRef && videoRef.current && (videoRef.current.currentTime = 0);
    };
    const playbackRateUp = () => {
        if (videoRef && videoRef.current
            && videoRef.current.playbackRate < 100) videoRef.current.playbackRate += 0.1;
        else videoRef && videoRef.current && (videoRef.current.playbackRate = 100);
    };
    const playbackRateDown = () => {
        console.log(videoRef && videoRef.current && videoRef.current.playbackRate)
        if (videoRef && videoRef.current
            && videoRef.current.playbackRate > 0.2) videoRef.current.playbackRate -= 0.1;
        else videoRef && videoRef.current && (videoRef.current.playbackRate = 0.2);
    };
    const stop = () => {
        videoRef && videoRef.current && videoRef.current.pause();
        videoRef && videoRef.current && (videoRef.current.currentTime = 0);
    };
    const width100 = () => {
        videoRef && videoRef.current && (videoRef.current.width = 100);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            Video
            <video
                src={fileURL}
                width={'300px'}
                // controls={true}
                ref={videoRef}
            />
            <div>
                <button onClick={play}>play</button>
                <button onClick={pause}>pause</button>
                <button onClick={makeFullScreen}>makeFullScreen</button>
                <button onClick={volumeUp}>volumeUp</button>
                <button onClick={volumeDown}>volumeDown</button>
                <button onClick={currentTimeUp}>currentTimeUp</button>
                <button onClick={currentTimeDown}>currentTimeDown</button>
                <button onClick={stop}>stop</button>
                <button onClick={playbackRateUp}>playbackRateUp</button>
                <button onClick={playbackRateDown}>playbackRateDown</button>
                <button onClick={width100}>width100</button>
            </div>
            duration: {duration}
            currentTime: {currentTime}
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1P2ov_oidRQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default Video;
