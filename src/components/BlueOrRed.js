import "./styles/BlueOrRed.scss"

function BlueOrRed (props) {
    const changeColor = (color) => {
        props.toggleColor(color); 
        console.log(color);
    }
    return (
        <div id="blue-or-red-container">
            <div className="button-container" onClick={() => changeColor("blue")}>
                <div class="blue">
                    Blue
                </div>
                <div>
                    +
                </div>
            </div>
            <div className="button-container" onClick={() => changeColor("red")}>
                <div className="red">
                    Red
                </div>
                <div>
                    +
                </div>
            </div>
        </div>
        
    )
}

export default BlueOrRed