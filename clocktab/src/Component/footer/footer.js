import './footer.css'


const Footer = () => {
    return (
        <div>
            <div className="justify-content-center mt-3">
                <h3> Options </h3>
            </div>
            <div className="d-flex justify-content-center">
                <div className="m-3">
                    <button type="textbox" onClick={time_format}>
                        <span>12-hr</span>
                    </button>
                </div>
                <div className="m-3">
                    <button onClick={display_seconds}>
                        <span>Seconds</span>
                    </button>
                </div>
                <div className="m-3">
                    <button onClick={display_date}>
                        <span>Seconds</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

function time_format() { 
    console.log("changed time Format")
}

function display_seconds() {
    console.log("removed Seconds")
}

function display_date() {
    console.log("removed Date")
}

export default Footer;