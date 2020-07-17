import React, {ReactNode} from "react";
import user from "../assets/user.svg";
import feed from "../assets/feed.svg";
import './NSNavbar.css';
import {Link} from "react-router-dom";
import {Button, Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import {AuthService} from "../services/AuthService";
import {withRouter} from "react-router";

/**
 * Application main navigation bar component
 */
class NSNavbar extends React.Component {

    static propTypes = {
        sectionName: PropTypes.string,
        sectionIcon: PropTypes.node
    }

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        AuthService.logout().then(() => {
            this.props.history.push('/');
        })
    }

    /**
     * Render the navigation bar
     *
     * @returns {*}
     */
    render(): ReactNode{
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
                        <Dropdown.Item style={{padding: '0px'}}>
                            <Button className='logoutButton'
                                    onClick={() => this.logout()}>
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                Sign Out
                            </Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>;
    }
}

export default withRouter(NSNavbar);