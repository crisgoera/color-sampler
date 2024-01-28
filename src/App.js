import './index.css';
import { useState } from 'react';
import ColorDisplay from './ColorDisplay';
import SearchColor from './SearchColor';
import FontToggle from './FontToggle';

function App() {

    const [color, setColor] = useState('');
    const [fontColor, setFontColor] = useState('black')

    const handleFontColor = () => {
        (fontColor === 'black') ? setFontColor('white') : setFontColor('black')
    }

    return (
        <div className='App'>
            <ColorDisplay
                color = {color}
                fontColor = {fontColor}
            />
            <SearchColor
                color = {color}
                setColor = {setColor}
            />
            <FontToggle
                handleFontColor = {handleFontColor}
            />
        </div>
    );
}

export default App;
