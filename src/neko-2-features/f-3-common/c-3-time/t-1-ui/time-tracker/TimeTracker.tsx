import React from 'react';
import 'rc-time-picker/assets/index.css';
import {Moment} from "moment";
import {FlexColumnCenterCenter} from "../../../../../neko-3-styles/flex-containers";

interface ITimeTestProps {
    time: Moment; startTime: Moment; endTime: Moment;
    allTime: Moment; pauseTime: Moment; resultTime: Moment;
    state: 'stop' | 'play'; pause: 'stop' | 'play';
    intervals: Moment[];
    switchTimer: () => void; switchPause: () => void;
}

const tF = 'HH:mm:ss';
const tFs = 'HH:mm:ss:SSS';

const TimeTracker: React.FC<ITimeTestProps> = (
    {
        time, startTime, endTime,
        allTime, pauseTime, resultTime,
        state, pause,
        intervals,
        switchPause, switchTimer
    }
) => {

    console.log('render TimeTracker');
    return (
        <div style={{...FlexColumnCenterCenter}}>
            time tracker

            <div>
                ({time.format(tF)})
            </div>

            <div>
                (start time: {startTime.format(tF)})
                -(end time: {endTime.format(tF)})
                =(all time: {allTime.format(tFs)})
                -(pause time: {pauseTime.format(tFs)})
                =(result: {resultTime.format(tFs)})
            </div>

            <div>
                <button onClick={switchTimer}>{state === 'stop' ? 'play' : 'stop'}</button>
                {state === 'play' && <button onClick={switchPause}>{pause === 'stop' ? 'pause' : 'play'}</button>}
            </div>

            {intervals.map((inte, i) => <div key={i}>{inte.format(tFs)}</div>)}

        </div>
    );
};

export default TimeTracker;
