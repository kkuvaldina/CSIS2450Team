import React from "react";
import { connect } from "react-redux";

const MeanDataRecord = ({ longitude, latitude, age, bedrooms, holds, income, value, population, rooms }) => (
    <tr>
        <td>
            {longitude}
        </td>
        <td>
            {latitude}
        </td>
        <td>
            {age}
        </td>
        <td>
            {rooms}
        </td>
        <td>
            {bedrooms}
        </td>
        <td>
            {holds}
        </td>
        <td>
            {income}
        </td>
        <td>
            {value}
        </td>
        <td>
            {population}
        </td>
    </tr>
);

export default connect(
    null
)(MeanDataRecord);