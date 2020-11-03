//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import MeanDataRecord from "./MeanDataRecord/MeanDataRecord";


class MeanDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //Means of each Column into one View record...
            longitudeMean: 0,
            latitudeMean: 0,
            ageMean: 0,
            roomsMean: 0,
            bedsMean: 0,
            holdsMean: 0,
            incomeMean: 0,
            valueMean: 0,
            populationMean: 0,
            OceanProxMean: null
        }
    }

    countRecords = () => {
        if (this.props.housingData != null) {
            return Object.keys(this.props.housingData).length;
        }
        return null
    }

    ageMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.ageMean += parseInt(this.props.housingData[i].housing_median_age);
            }
            return this.state.ageMean / this.countRecords();
        }
        return null;
    }

    bedsMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].total_bedrooms != "") {
                    this.state.bedsMean += parseFloat(this.props.housingData[i].total_bedrooms);
                }
            }
            return this.state.bedsMean / this.countRecords();
        }
        return null;
    }

    holdsMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.holdsMean += parseFloat(this.props.housingData[i].households);
            }
            return this.state.holdsMean / this.countRecords();
        }
        return null;
    }

    incomeMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.incomeMean += parseFloat(this.props.housingData[i].median_income);
            }
            return this.state.incomeMean / this.countRecords();
        }
        return null;
    }

    latitudeMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.latitudeMean += parseFloat(this.props.housingData[i].latitude);
            }
            return this.state.latitudeMean / this.countRecords();
        }
        return null;
    }

    longitudeMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                
                    this.state.longitudeMean += parseFloat(this.props.housingData[i].longitude);
                    
            }
            return this.state.longitudeMean / this.countRecords();
        }
        return null;
    }

    populationMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.populationMean += parseFloat(this.props.housingData[i].population);
            }
            return this.state.populationMean / this.countRecords();
        }
        return null;
    }

    roomsMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.roomsMean += parseFloat(this.props.housingData[i].total_rooms);
            }
            return this.state.roomsMean / this.countRecords();
        }
        return null;
    }

    valueMean = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.valueMean += parseFloat(this.props.housingData[i].median_house_value);
            }
            return this.state.valueMean / this.countRecords();
        }
        return null;
    }

    render() {
        //...
        return (
            <Table striped bordered hover size="sm" className="mt-5">
                <thead>
                    <tr>
                        <th>Longitude</th>
                        <th>Latitude</th>
                        <th>Age</th>
                        <th>Rooms</th>
                        <th>Beds</th>
                        <th>Holds</th>
                        <th>Income</th>
                        <th>Value</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <MeanDataRecord
                        longitude={this.longitudeMean()}
                        latitude={this.latitudeMean()}
                        age={this.ageMean()}
                        rooms={this.roomsMean()}
                        bedrooms={this.bedsMean()}
                        holds={this.holdsMean()}
                        income={this.incomeMean()}
                        value={this.valueMean()}
                        population={this.populationMean()}
                    />
                </tbody>
            </Table>
        )
    }
}

export default connect(null)(MeanDataTable);