import React from "react";
import user from "../assets/user.svg";
import './NSNavbar.css';

export class NSNavbar extends React.Component {

    render() {
        const sectionName = this.props.sectionName;
        const sectionIcon = this.props.sectionIcon;
        return <div className="Navbar">
            <div style={{display: 'flex'}}>
                <img style={{height: '37px', paddingRight: '10px'}} src={sectionIcon} alt="logo"/>
                <span>{sectionName}</span>
            </div>
            <div>
                <img style={{height: '37px', paddingLeft: '10px'}} src={user} alt="logo"/>
            </div>
        </div>;
    }
}
