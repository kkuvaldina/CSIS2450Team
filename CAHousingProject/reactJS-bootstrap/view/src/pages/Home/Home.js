//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
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

import CountDataTable from "./CountDataTable/CountDataTable";
import HalfDataTable from "./HalfDataTable/HalfDataTable";
import HousingDataTable from "./HousingDataTable/HousingDataTable";
import MaxDataTable from "./MaxDataTable/MaxDataTable";
import MeanDataTable from "./MeanDataTable/MeanDataTable";
import MinDataTable from "./MinDataTable/MinDataTable";
import QuarterDataTable from "./QuarterDataTable/QuarterDataTable";
import STDDataTable from "./STDDataTable/STDDataTable";
import ThreeQuarterDataTable from "./ThreeQuarterDataTable/ThreeQuarterDataTable";

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
                            <Row>
                                <Col>
                                    <Tabs defaultActiveKey="upload" id="uncontrolled-tab-example">
                                        <Tab eventKey="upload" title="Upload CSV">
                                            <Row className="mt-5">
                                                <Col>
                                                    <CsvParse
                                                        keys={keys}
                                                        onDataUploaded={this.handleData}
                                                        onError={this.handleError}
                                                        render={onChange => <input type="file" onChange={onChange} />}
                                                    />
                                                </Col>
                                            </Row>                                            
                                        </Tab>
                                        <Tab eventKey="all-data" title="Uploaded Data">
                                            <HousingDataTable housingData={this.state.data} />
                                        </Tab>
                                        <Tab eventKey="count-data" title="Count">
                                            <CountDataTable housingData={this.state.data} />
                                        </Tab>
                                        <Tab eventKey="mean-data" title="Mean">
                                            <MeanDataTable housingData={this.state.data} />
                                        </Tab>
                                        <Tab eventKey="std-data" title="STD">
                                            <STDDataTable housingData={this.state.data} />
                                        </Tab>
                                        <Tab eventKey="min-data" title="MIN">
                                            <MinDataTable housingData={this.state.data} />
                                        </Tab>
                                        <Tab eventKey="quarter-data" title="25%">
                                            <QuarterDataTable housingData={this.state.data} />
                                        </Tab>
                                        <Tab eventKey="half-data" title="50%">
                                            <HalfDataTable housingData={this.state.data} />
                                        </Tab>
                                        <Tab eventKey="three-quarter-data" title="75%">
                                            <ThreeQuarterDataTable housingData={this.state.data} />
                                        </Tab>
                                        <Tab eventKey="max-data" title="Max">
                                            <MaxDataTable housingData={this.state.data} />
                                        </Tab>
                                    </Tabs>                                    
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