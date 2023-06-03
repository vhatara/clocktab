import React, { useState }from 'react';
import "./clocktab.css";
import Clock from 'react-live-clock';
import background from "../../Assets/img/wolfgang-hasselmann-pVr6wvUneMk-unsplash.jpg"

const Clocktab = () => {
    const [displayAMPM, setDisplayAMPM] = useState(true);
    const [displaySeconds, setDisplaySeconds] = useState(true);
    const [displayDate, setDisplayDate] = useState(true);
    const [twelveHourFormat, setTwelveHourFormat] = useState(true);
    const [twentyFourHourFormat, setTwentyFourHourFormat] = useState(true);

    //Function to change Time Format
    const toggleTimeFormat = () => {
        if (useState) {
            setTwelveHourFormat(!twelveHourFormat); 
            setTwentyFourHourFormat(!twentyFourHourFormat);
        }
    }

    // Function to toggle the display of AM/PM
    const toggleDisplayAMPM = () => {
      setDisplayAMPM(!displayAMPM);
    };

    // Function to toggle the display of Seconds
    const toggleDisplaySeconds = () => {
        setDisplaySeconds(!displaySeconds);
    }

    // Function to toggle the display of AM/PM
    const toggleDisplayDate = () => {
        setDisplayDate(!displayDate);
    }
    return (
        <div>
        <div className="background"
        style = {{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="clock-date">
                {/* Hour, Minutes*/}
                <div className="digi-clock d-flex justify-content-center">
                    <div className="hour-mins">
                        {twelveHourFormat && <h1><Clock
                            format={'h:mm'}
                            style={{fontSize: '2em'}}
                             />
                        </h1>}

                        {!twentyFourHourFormat && <h1> <Clock
                            format={'HH:mm'}
                            style={{fontSize: '2em'}}
                             />
                        </h1>}
                    </div>
                        {/* AM/PM, Seconds */}
                        <div className="ampm-second my-auto ms-3">
                            {/* <div className="ampm_format">
                                <Clock
                                        format={'A'}
                                        style={{fontSize: '1.5em'}} />
                            </div> */}
                            {displayAMPM && <h5><Clock 
                                                format={'A'}
                                                style={{fontSize: '1.5em'}}/>
                                            </h5>}
                            <div className="seconds_tick">
                            {displaySeconds && <h5><Clock
                                    format={'ss'}
                                    style={{fontSize: '1.5em'}}
                                    ticking={true} /></h5>}
                            </div>
                        </div>
                </div>

                <div className="display_date">
                    {displayDate && <h5><Clock className="date-today"
                        style={{fontSize: '1.5em'}}
                        date={'1997-12-31T14:15:23+01:00'}
                        format={'dddd, MMMM Mo'} /></h5>}
                </div>
            </div>
        </div>     
    
            <footer>
            <div className="justify-content-center mt-3">
                <h3> Options </h3>
            </div>
            <div className="d-flex justify-content-center">
            <div className="m-3">
                    <button onClick={toggleTimeFormat}>
                        <span>12-hr</span>
                    </button>
                </div>
                <div className="m-3">
                    <button onClick={toggleDisplayAMPM}>
                        <span>AM/PM</span>
                    </button>
                </div>
                <div className="m-3">
                    <button onClick={toggleDisplaySeconds}>
                        <span>Seconds</span>
                    </button>
                </div>
                <div className="m-3">
                    <button onClick={toggleDisplayDate}>
                        <span>Date</span>
                    </button>
                </div>
            </div>
            </footer>
        </div>
        
    )
}

export default Clocktab;