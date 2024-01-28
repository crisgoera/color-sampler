import './index.css';
import { useState } from 'react';
import ColorDisplay from './ColorDisplay';
import SearchColor from './SearchColor';

function App() {

    const [color, setColor] = useState('');

    return (
        <div className='App'>
            <ColorDisplay
                color = {color}
            />
            <SearchColor
                color = {color}
                setColor = {setColor}
            />
        </div>
    );
}

export default App;
