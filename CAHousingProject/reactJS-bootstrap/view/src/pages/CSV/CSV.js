//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import CsvParse from '@vtex/react-csv-parse';//https://github.com/vtex/react-csv-parse/blob/master/demo/src/index.js
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import HousingDataTable from "./HousingDataTable/HousingDataTable";
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

class CSV extends Component {

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
        //console.log(this.state.data);
        //...
        return (
            <Row className="mt-5">
                <Col>
                    <CsvParse
                        keys={keys}
                        onDataUploaded={this.handleData}
                        onError={this.handleError}
                        render={onChange => <input type="file" onChange={onChange} />}
                    />
                    <h1 className="text-center mb-5">Application</h1>
                    <Card className="w-50 mx-auto mt-5">
                        <Card.Body>
                            <Row>
                                <Col>
                                    
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <HousingDataTable housingData={this.state.data} />
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                    {this.state.data && (
                        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
                    )}

                    {this.state.error && (
                        <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
                    )}
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    /*
    const housingDataRecords = getHousingDataRecordsByVisibilityFilter(state, visibilityFilter);
    return { housingDataRecords };
    */
};

export default connect(
    mapStateToProps
)(CSV);