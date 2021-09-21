import "./nav.css"
import NASA_LOGO from "../../assets/images/nasa-logo.svg"

function Nav () {
    return <>
        <div className="nav-container">
            <div className="nav-inner-container">
                <div className="nav-brand">
                    Spacestagram
                </div>
                <div className="nav-credit">
                    Powered by NASA &nbsp;
                    <img className="nav-credit-image" src={NASA_LOGO}/>
                </div>  
            </div>
        </div>
        <div className="nav-spacer"></div>
    </>
}

export default Nav