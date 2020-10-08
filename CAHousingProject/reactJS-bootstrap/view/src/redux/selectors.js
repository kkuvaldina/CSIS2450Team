import { VISIBILITY_FILTERS } from "../constants";

export const getHousingDataRecordsState = store => store.housingDataRecords;

export const getHousingDataRecordsIds = store =>
    getHousingDataRecordsState(store) ? getHousingDataRecordsState(store).ids : [];

export const getHousingDataRecordsById = (store, id) =>
    getHousingDataRecordsState(store) ? { ...getHousingDataRecordsState(store).data[id], id } : {};

export const getHousingDataRecords = store =>
    getHousingDataRecordsIds(store).map(id => getHousingDataRecordsById(store, id));

export const getHousingDataRecordsByVisibilityFilter = (store, visibilityFilter) => {
    //console.log(store);
    const allHousingDataRecords = store;
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.ADMIN:
            //return allHousingDataRecords.filter(housingDataRecord => housingDataRecord.admin);
        case VISIBILITY_FILTERS.USER:
            //return allHousingDataRecords.filter(housingDataRecord => housingDataRecord.user);
        default:
            return allHousingDataRecords;
    }
};