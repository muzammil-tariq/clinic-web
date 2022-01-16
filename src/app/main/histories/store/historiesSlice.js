import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../services/axiosbaseinstance';

export const getProduct = createAsyncThunk('historyApp/product/getProduct', async params => {
	const response = await axios.get('/api/e-commerce-app/product', { params });
	const data = await response.data;

	return data === undefined ? null : data;
});

export const removeProduct = createAsyncThunk(
	'historyApp/product/removeProduct',
	async (val, { dispatch, getState }) => {
		const { id } = getState().historyApp.product;
		await axios.post('/api/e-commerce-app/remove-product', { id });

		return id;
	}
);

export const createHistories = createAsyncThunk(
	'historyApp/product/createHistories',
	async (productData, { dispatch, getState }) => {
		const { product } = getState().historyApp;

		const response = await axios.post('/api/e-commerce-app/product/save', {
			...product,
			...productData
		});
		const data = await response.data;

		return data;
	}
);

const initialState = {
	historyData: {
		id: '',
		hpi: '',
		past: '',
		family: '',
		social: '',
		medical: '',
		occupational: '',
		patientId: ''
	},
	medicalHistory: {
		id: '',
		medicineName: '',
		medicineId: '',
		saltId: '',
		duration: '',
		historyId: ''
	},
	surgicalHistory: {
		id: '',
		proceduralPerformed: '',
		date: '',
		outCome: '',
		historyId: ''
	},
	error: []
};

const historySlice = createSlice({
	name: 'historyApp/history',
	initialState,
	reducers: {
		resetProduct: () => null,
		newProduct: {
			reducer: (state, action) => action.payload,
			prepare: event => ({
				payload: {
					id: 0,
					name: '',
					handle: '',
					description: '',
					categories: [],
					tags: [],
					images: [],
					priceTaxExcl: 0,
					priceTaxIncl: 0,
					taxRate: 0,
					comparedPrice: 0,
					quantity: 0,
					sku: '',
					width: '',
					height: '',
					depth: '',
					weight: '',
					extraShippingFee: 0,
					active: true
				}
			})
		}
	},
	extraReducers: {
		[getProduct.fulfilled]: (state, action) => action.payload,
		[createHistories.fulfilled]: (state, action) => action.payload,
		[removeProduct.fulfilled]: (state, action) => null
	}
});

export const { historySuccess, historyError } = historySlice.actions;

export default historySlice.reducer;
