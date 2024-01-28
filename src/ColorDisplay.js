
const ColorDisplay = ( {color, fontColor, RGBValue} ) => {

    return (
        <div className='square' id="square" style = {{backgroundColor: color, color: fontColor}}>
            <p>{color}</p>
            <p>{RGBValue}</p>
        </div>
    )
}

export default ColorDisplay
