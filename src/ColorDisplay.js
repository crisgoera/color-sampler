
const ColorDisplay = ( {color, fontColor} ) => {

    return (
        <div className='square' style = {{backgroundColor: color, color: fontColor}}>
            <p>{color}</p>
        </div>
    )
}

export default ColorDisplay
