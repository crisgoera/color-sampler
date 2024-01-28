import './index.css';
import { useState } from 'react';
import ColorDisplay from './ColorDisplay';
import SearchColor from './SearchColor';
import FontToggle from './FontToggle';
import colorNames from 'colornames'

function App() {

    const [color, setColor] = useState('');
    const [fontColor, setFontColor] = useState('black')
    const [RGBValue, setRGBValue] = useState('')


    const handleFontColor = () => {
        (fontColor === 'black') ? setFontColor('white') : setFontColor('black')
    }

    const handleColor = (color) => {
        setColor(color)
        setRGBValue(colorNames(color))
    }

    return (
        <div className='App'>
            <ColorDisplay
                color = {color}
                fontColor = {fontColor}
                RGBValue = {RGBValue}
            />
            <SearchColor
                color = {color}
                handleColor = {handleColor}
            />
            <FontToggle
                handleFontColor = {handleFontColor}
            />
        </div>
    );
}

export default App;
