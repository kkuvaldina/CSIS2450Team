//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//CSV Upload Dependancy
import CsvParse from '@vtex/react-csv-parse';//https://github.com/vtex/react-csv-parse/blob/master/demo/src/index.js
/*
{
    this.state.data && (
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
    )
}
{
    this.state.error && (
        <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
    )
}
*/
//Page Elements
//import { fetchHousingData } from "../../redux/actions"; If we choose Database Route.
//import HousingDataRecordsElement from './HousingDataRecordsElement/HousingDataRecordsElement'; If we choose Database Route.
//Redux Store Components
//import { getHousingDataRecordsByVisibilityFilter } from "../../redux/selectors"; If we choose Database Route.

import HousingDataTable from "./HousingDataTable/HousingDataTable";

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

        this.state = {
            data: null,
            error: null,
        }
    }

    handleData = data => {
        this.setState({ data })
    }

    handleError = error => {
        this.setState({ error })
    }

    render() {
        //this.props.fetchHousingData();//This fetches HousingData consistently and only applied on the Home Page.
        const keys = [
            'longitude',
            'latitude',
            'housing_median_age',
            'total_rooms',
            'total_bedrooms',
            'households',
            'median_income',
            'median_house_value',
            'population',
            'ocean_proximity'
        ];

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
                            <CsvParse
                                keys={keys}
                                onDataUploaded={this.handleData}
                                onError={this.handleError}
                                render={onChange => <input type="file" onChange={onChange} />}
                            />
                            <Row>
                                <Col>
                                    <HousingDataTable housingData={this.state.data} />
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    {this.state.error && (
                                        <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
                                    )}
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
    /*
    const { visibilityFilter } = state;
    const housingDataRecords = getHousingDataRecordsByVisibilityFilter(state, visibilityFilter);
    return { housingDataRecords };
    */
};

export default connect(
    mapStateToProps,
    //{ fetchHousingData }
)(Home);