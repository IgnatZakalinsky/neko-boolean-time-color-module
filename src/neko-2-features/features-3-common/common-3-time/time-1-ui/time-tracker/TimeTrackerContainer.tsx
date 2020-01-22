import React, {useEffect, useState} from 'react';
import moment, {Moment} from "moment";
import TimeTracker from "./TimeTracker";

const TimeTrackerContainer: React.FC = () => {
    const [time, setTime] = useState(moment());
    const [startTime, setStartTime] = useState(time);
    const [endTime, setEndTime] = useState(time);
    const [startTimePause, setStartTimePause] = useState(time);
    const [endTimePause, setEndTimePause] = useState(time);

    const [state, setState] = useState<'stop' | 'play'>('stop');
    const [pause, setPause] = useState<'stop' | 'play'>('stop');

    const [intervals, addInterval] = useState<Moment[]>([]);

    const [pauseTime, setPauseTime] = useState<Moment>(moment.utc(0));

    useEffect(() => {
        if (state === 'stop') setStartTime(time)
    }, [time, state]);
    useEffect(() => {
        if (pause === 'play') setEndTimePause(time)
    }, [time, pause]);

    useEffect(() => {
        const timer = setInterval(() => {
            const t = moment();
            setTime(t);
            setEndTime(t);
        }, 4);
        return () => clearInterval(timer);
    }, []);

    const r = moment.utc(endTime.diff(startTime)); // without tz
    const p = moment.utc(endTimePause.diff(startTimePause)); // without tz

    const switchTimer = () => {
        if (state === 'play') {
            if (pause === "play") switchPause();
            setPauseTime(moment.utc(0));
            addInterval([...intervals, moment.utc(+r - (+pauseTime + +p))]);
        }

        setState(state === 'stop' ? 'play' : 'stop');
    };
    const switchPause = () => {
        if (pause === "stop") {
            setPause("play");
        } else {
            setPauseTime(moment.utc(+pauseTime + +p));
            setPause("stop");
        }

        setStartTimePause(time);
        setEndTimePause(time);
    };

    console.log('render TimeTrackerContainer');
    return (
        <TimeTracker
            time={time} startTime={startTime} endTime={endTime}
            allTime={r} pauseTime={moment.utc(+pauseTime + +p)} resultTime={moment.utc(+r - (+pauseTime + +p))}
            state={state} pause={pause}
            intervals={intervals}
            switchPause={switchPause} switchTimer={switchTimer}
        />
    );
};

export default TimeTrackerContainer;
