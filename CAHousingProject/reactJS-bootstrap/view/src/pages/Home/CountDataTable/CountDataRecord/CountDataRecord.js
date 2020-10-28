import React from "react";
import { connect } from "react-redux";

const CountDataRecord = ({ longitude, age, rooms, bedrooms, population, households, income, value, latitude }) => (
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
            {population}
        </td>
        <td>
            {households}
        </td>
        <td>
            {income}
        </td>
        <td>
            {value}
        </td>
        <td>
            null
        </td>
    </tr>
);

export default connect(
    null
)(CountDataRecord);