import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";

const API_URL = "https://api.holidu.com/rest/v6/search/offers?searchTerm=";
export function* searchPropertiesSaga(action) {
	try {
		const response = yield axios.get(
			`${API_URL}=${JSON.stringify(action.text)}`
		);
		yield put(
			actions.setPropertiesData({
				apartments: response.data.offers,
				totalCount: response.data.metaData.cursor.totalCount
			})
		);
	} catch (error) {
		yield put(actions.setErorr());
	}
}

export function* searchProperties() {
	yield takeLatest("SEARCH_PROPERTIES_DATA", searchPropertiesSaga);
}
