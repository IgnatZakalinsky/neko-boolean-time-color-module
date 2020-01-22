import React, {useEffect, useState} from 'react';
import ColorTest, {IInputColor} from "./ColorTest";

const ColorContainer: React.FC = () => {
    const [color, setColor] = useState('#00ff00');

    const [deg, setDeg] = useState(90);
    const [inputs, setInputs] = useState<IInputColor[]>([
        {color: '#000000', percent: -12},
        {color: '#0000ff', percent: 13},
        {color: '#00ff00', percent: 50},
        {color: '#ff0000', percent: 88},
        {color: '#000000', percent: 112},
    ]);

    const [tick, setTick] = useState(false);
    const [shift, setShift] = useState(false);
    const [del, setDel] = useState(false);
    const move = () => {
        let newInputs = inputs.map(i => ({...i, percent: i.percent + 1}));
        if (newInputs[0].percent > 0) {
            newInputs = [
                {
                    color: newInputs[newInputs.length - 2].color,
                    percent: 1 - (newInputs[newInputs.length - 1].percent - newInputs[newInputs.length - 2].percent)
                },
                ...newInputs
            ];
            setDel(true)
        }
        if (newInputs[newInputs.length - 2].percent > 100 && del) {
            setDel(false);
            newInputs = newInputs.filter((inp: IInputColor, i, arr: IInputColor[]) => i !== arr.length - 1);
        }

        setInputs(newInputs);
    };

    if (tick && shift) {
        move();
        setTick(false);
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setTick(true);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    console.log('render ColorContainer');
    return (
        <ColorTest
            inputs={inputs} setInputs={setInputs}
            color={color} setColor={setColor}
            deg={deg} setDeg={setDeg}
            shift={shift} setShift={setShift}
        />
    );
};

export default ColorContainer;
