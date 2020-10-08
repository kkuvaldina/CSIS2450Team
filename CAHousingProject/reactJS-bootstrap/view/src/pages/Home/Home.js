//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import HousingDataRecordsElement from './HousingDataRecordsElement/HousingDataRecordsElement';
//Redux Store Components
import { getHousingDataRecordsByVisibilityFilter } from "../../redux/selectors";
import { fetchHousingData } from "../../redux/actions";
/*
//Web-App Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faCompressAlt } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
*/

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        this.props.fetchHousingData();//This fetches HousingData consistently and only applied on the Home Page.
        /*
        //Icon Elements
        const tableIcon = <FontAwesomeIcon icon={faTable} />;
        const accordionIcon = <FontAwesomeIcon icon={faCompressAlt} />;
        const listIcon = <FontAwesomeIcon icon={faList} />;
        */
        //...
        return (
            <Row className="mt-5">
                <Col>
                    <h1 className="text-center mb-5">Application</h1>
                    <Card className="w-50 mx-auto mt-5">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <HousingDataRecordsElement housingDataRecords={this.props.housingDataRecords.housingData.data} />
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>                                    
                                    
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const housingDataRecords = getHousingDataRecordsByVisibilityFilter(state, visibilityFilter);
    return { housingDataRecords };
};

export default connect(
    mapStateToProps,
    { fetchHousingData }
)(Home);