//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card, Tab, Tabs, Alert, Spinner } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//CSV Upload Dependancy
import CsvParse from '@vtex/react-csv-parse';//https://github.com/vtex/react-csv-parse/blob/master/demo/src/index.js

//Page Elements
//import { fetchHousingData } from "../../redux/actions"; If we choose Database Route.
//Redux Store Components
//import { getHousingDataRecordsByVisibilityFilter } from "../../redux/selectors"; If we choose Database Route.

//CSV Page Route...
import CountDataTable from "./CountDataTable/CountDataTable";
import HalfDataTable from "./HalfDataTable/HalfDataTable";
import HousingDataTable from "./HousingDataTable/HousingDataTable";
import MaxDataTable from "./MaxDataTable/MaxDataTable";
import MeanDataTable from "./MeanDataTable/MeanDataTable";
import MinDataTable from "./MinDataTable/MinDataTable";
import QuarterDataTable from "./QuarterDataTable/QuarterDataTable";
import STDDataTable from "./STDDataTable/STDDataTable";
import ThreeQuarterDataTable from "./ThreeQuarterDataTable/ThreeQuarterDataTable";
//Web-App Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator} from "@fortawesome/free-solid-svg-icons";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            countRecords: null,
            error: null,
            loading: false,
        }
    }

    handleData = data => {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({ data, countRecords: Object.keys(data).length, loading: false })
        }, 1000)
    }

    handleError = error => {
        this.setState({ error, loading: false })
    }
    
    render() {
        //this.props.fetchHousingData();//Redux Call to Our DataBase.
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

        //...
        return (            
            <Row className="mt-5">                
                <Col>
                    <h1 className="text-center mb-5">Application</h1>
                    <Card className="w-50 mx-auto mt-5 mb-5">
                        <Card.Body>                            
                            <Row>
                                <Col>
                                    <Tabs defaultActiveKey="upload" id="uncontrolled-tab-example">
                                        <Tab eventKey="upload" title="Upload CSV">
                                            <Row className="mt-5">
                                                <Col>
                                                    <Row>
                                                        <Col xs md lg="1">
                                                            {this.state.loading ?
                                                                <Spinner animation="border" role="status" variant="primary" classNam="mt-5">
                                                                    <span className="sr-only">Loading...</span>
                                                                </Spinner> :
                                                                null
                                                            }
                                                        </Col>
                                                        <Col xs md lg="4">
                                                            <CsvParse
                                                            keys={keys}
                                                            onDataUploaded={this.handleData}
                                                            onError={this.handleError}
                                                            render={onChange => <input type="file" onChange={onChange} />
                                                            } />
                                                        </Col>
                                                        {this.state.countRecords && (
                                                            <Col>
                                                                <Alert variant="success">Loaded: <b>{this.state.countRecords}</b> records.</Alert>
                                                            </Col>
                                                        )}
                                                    </Row>                                                                                                        
                                                </Col>
                                            </Row>                                            
                                        </Tab>
                                        <Tab eventKey="table-data" title='Result Tables'>
                                            <Row className="mt-5">
                                                <Col>
                                                    <h1><FontAwesomeIcon icon={faCalculator} /> <b>Sum</b></h1>
                                                    <CountDataTable housingData={this.state.data} />
                                                    <h1><FontAwesomeIcon icon={faCalculator} /> <b>Mean</b></h1>
                                                    <MeanDataTable housingData={this.state.data} />
                                                    <h1><FontAwesomeIcon icon={faCalculator} /> <b>STD</b></h1>
                                                    <STDDataTable housingData={this.state.data} />
                                                    <h1><FontAwesomeIcon icon={faCalculator} /> <b>Min</b></h1>
                                                    <MinDataTable housingData={this.state.data} />
                                                    <h1><FontAwesomeIcon icon={faCalculator} /> <b>Max</b></h1>
                                                    <MaxDataTable housingData={this.state.data} />
                                                </Col>
                                            </Row>                                            
                                        </Tab>
                                        <Tab eventKey="all-data" title="Show All Data">
                                            <HousingDataTable housingData={this.state.data} />
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            {this.state.countRecords && (
                                <Row>
                                    <Col>
                                        <Alert variant="secondary" className="float-right"><b>{this.state.countRecords}</b> total records.</Alert>
                                    </Col>
                                </Row>    
                            )}
                            {this.state.error && (
                                <Row>
                                    <Col>
                                        <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
                                    </Col>
                                </Row>
                            )}                                
                        </Card.Footer>
                    </Card>
                </Col>                
            </Row>
        )
    }
}

/* Database Route
const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const housingDataRecords = getHousingDataRecordsByVisibilityFilter(state, visibilityFilter);
    return { housingDataRecords };    
};
*/

export default connect(
    null,
)(Home);