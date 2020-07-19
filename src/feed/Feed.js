import React, {ReactNode} from 'react';
import './Feed.css';
import {EMPTY_NEW} from "./NewsContainer";
import NewsContainer from "./NewsContainer";
import feed from "../assets/feed.svg";
import {Col, Container, Row} from "react-bootstrap";
import {NewViewer} from "../newViewer/NewViewer";
import {EntityTypeViewer} from "../entityTypeViewer/EntityTypeViewer";
import NSNavbar from "../navbar/NSNavbar";

/**
 * News main feed component
 */
export class Feed extends React.Component {

    state = {
        selectedNew: EMPTY_NEW
    };

    constructor(props) {
        super(props);
        this.onSelectNew = this.onSelectNew.bind(this);
    }

    /**
     * Update the selected new data
     *
     * @param newData Data of the selected new
     */
    onSelectNew = newData => {
        this.setState((state) => {
            state.selectedNew = newData;
            return state;
        });
    };

    /**
     * Render the feed component
     *
     * @returns {*}
     */
    render(): ReactNode {
        return <Container className="Feed">
            <Row>
                <Col style={{paddingLeft: 0, paddingRight: 0}}>
                    <NSNavbar sectionName="News feed" sectionIcon={feed}/>
                </Col>
            </Row>
            <Row className="Feed-body">
                <Col>
                    <Row style={{paddingBottom: '10px', marginBottom: '0'}}>
                        <Col>
                            <NewsContainer onSelectNew={this.onSelectNew}/>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: '10px', minHeight: '100vh', marginTop: '0'}}>
                        <Col className="col-10">
                            <div style={{height: '67%'}}>
                                <NewViewer newData={this.state.selectedNew} sentimentLink={true}/>
                            </div>
                        </Col>
                        <Col className="col-2">
                            <div style={{height: '67%'}}>
                                <EntityTypeViewer/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>;
    }
}
