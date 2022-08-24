import "./styles/BlueOrRed.scss"

function BlueOrRed (props) {
    return (
        <div id="blue-or-red-container">
            <div className="button-container">
                <div class="blue">
                    Blue
                </div>
                <div>
                    +
                </div>
            </div>
            <div className="button-container" >
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