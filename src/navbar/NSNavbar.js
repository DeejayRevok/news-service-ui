import React from "react";
import user from "../assets/user.svg";
import feed from "../assets/feed.svg";
import './NSNavbar.css';
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

export class NSNavbar extends React.Component {

    static propTypes = {
        sectionName: PropTypes.string,
        sectionIcon: PropTypes.node
    }

    render() {
        const sectionName = this.props.sectionName;
        const sectionIcon = this.props.sectionIcon;
        return <div className="Navbar">
            <div style={{display: 'flex'}}>
                <img style={{height: '37px', paddingRight: '10px'}} src={sectionIcon} alt="logo"/>
                <span>{sectionName}</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {(sectionName !== "News feed") ?
                    <Link to="/feed">
                        <img style={{height: '37px', paddingRight: '10px'}} src={feed} alt="logo"/>
                    </Link>
                    :
                    null
                }
                <Dropdown>
                    <Dropdown.Toggle id='dropdown-user'
                                    className="NavbarUserDropdown">
                        <img style={{height: '37px', paddingLeft: '10px'}} src={user} alt="logo"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                Sign Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>;
    }
}
