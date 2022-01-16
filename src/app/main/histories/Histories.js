import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
// import { useFormContext } from 'react-hook-form';
// import * as yup from 'yup';
import reducer from './store';
import { createHistories } from './store/historiesSlice';
import TextField from '@material-ui/core/TextField';
import HistoryMedicationComponent from './components/HistoryMedicationComponent';
import SurgicalHistoryComponent from './components/SurgicalHistoryComponent';
import axios from '../../services/axiosbaseinstance';
import PatientSeacrher from '../ReusableComponent/PatientSearcher';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Histories = () => {
	const dispatch = useDispatch();
	// const historyData = useSelector(({ historyApp }) => historyApp.historyData);
	// const { formState, watch, getValues } = methods;

	const [historyData, setHistoryData] = useState({
		hpi: 'good',
		pfsh: 'good',
		past: 'good',
		family: 'good',
		social: 'good',
		occupational: 'good',
		medical: 'good',
		PatientId: '61ddca81fd25250b80da0e83'
	});

	const [surgicalHistory, setSurgicalHistory] = useState([]);
	const [historyMedication, setHistoryMedication] = useState([]);

	const onChangeUseState = e => {
		const { name, value } = e.target;
		setHistoryData(prevState => ({ ...prevState, [name]: value }));
	};

	function handleHistoryMedication(data) {
		setHistoryMedication(data);
	}

	function handleSurgicalHistory(data) {
		setSurgicalHistory(data);
	}

	function handleSaveProduct() {
		let data = {
			history: historyData,
			HistoryMedication: historyMedication,
			surgicalHistory: surgicalHistory
		};
		// let data = historyData;
		debugger;
		axios
			.post('api/history/historycreate', data)
			.then(async response => {
				debugger;
				// await handleSaveMedicalHistory(response);
				// await handleSaveSurgicalHistory(response);
			})
			.catch(er => {
				debugger;
			});

		// dispatch(createHistories(getValues()));
	}

	function handleSaveMedicalHistory(res) {
		let data = {
			history: historyData,
			HistoryMedication: historyMedication,
			surgicalHistory: surgicalHistory
		};
		axios
			.post('api/medicine-history', data)
			.then(response => {
				debugger;
			})
			.catch(er => {
				debugger;
			});
	}

	function handleSaveSurgicalHistory(res) {
		let data = {
			history: historyData,
			HistoryMedication: historyMedication,
			surgicalHistory: surgicalHistory
		};
		axios
			.post('api/surgical-history', data)
			.then(response => {
				debugger;
			})
			.catch(er => {
				debugger;
			});
	}

	return (
		<FusePageSimple
			content={
				<div className="md:p-24">
					<PatientSeacrher />
					<div className="md:flex w-full text-center p-20 justify-center">
						<Typography variant="h4">Histories</Typography>
					</div>
					<div className="w-full px-20 pb-20">
						<div className="md:flex w-full border p-10 rounded border-gray-400">
							<Button variant="contained" onClick={handleSaveProduct}>
								Submit
							</Button>
						</div>
						<div className=" md:flex w-full border p-10 rounded border-gray-400 ">
							<div className="md:flex w-full">
								<div className="flex flex-wrap w-full  ">
									<div className="flex w-full p-6">
										<TextField
											placeholder=""
											id=""
											label="HISTORY PRESENT ILLNESS (HPI)"
											name="hpi"
											value={historyData.hpi}
											variant="outlined"
											size="small"
											fullWidth
											onChange={onChangeUseState}
										/>
									</div>
									<div className="flex w-full p-6">
										<TextField
											placeholder=""
											id=""
											label="HISTORY (PFSH)"
											name="pfsh"
											value={historyData.pfsh}
											variant="outlined"
											size="small"
											fullWidth
											onChange={onChangeUseState}
										/>
									</div>
									<div className="flex w-full p-6">
										<TextField
											placeholder=""
											id=""
											label="Past History"
											name="past"
											value={historyData.past}
											variant="outlined"
											size="small"
											fullWidth
											onChange={onChangeUseState}
										/>
									</div>
									<div className="flex w-full p-6">
										<TextField
											placeholder=""
											id=""
											label="Family History"
											name="family"
											value={historyData.family}
											variant="outlined"
											size="small"
											fullWidth
											onChange={onChangeUseState}
										/>
									</div>
									<div className="flex w-full p-6">
										<TextField
											placeholder=""
											id=""
											label="Social History"
											name="social"
											value={historyData.social}
											variant="outlined"
											size="small"
											fullWidth
											onChange={onChangeUseState}
										/>
									</div>
									<div className="flex w-full p-6">
										<TextField
											placeholder=""
											id=""
											label="Medical History"
											name="medical"
											value={historyData.medical}
											variant="outlined"
											size="small"
											fullWidth
											onChange={onChangeUseState}
										/>
									</div>
									<div className="flex w-full p-6">
										<TextField
											placeholder=""
											id=""
											label="Occupational History"
											name="occupational"
											value={historyData.occupational}
											variant="outlined"
											size="small"
											fullWidth
											onChange={onChangeUseState}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="md:flex w-full px-20 pb-20">
						<div className="w-full border rounded border-gray-400 ">
							<div className="p-10">
								<Typography variant="subtitle2">HISTORY MEDICATION</Typography>
							</div>

							<div className="p-20">
								<HistoryMedicationComponent handleChange={handleHistoryMedication} />
							</div>
						</div>
					</div>

					<div className="md:flex w-full px-20 pb-20">
						<div className="w-full border rounded border-gray-400 ">
							<div className="p-10">
								<Typography variant="subtitle2">SURGICAL HISTORY</Typography>
							</div>

							<div className="p-20">
								<SurgicalHistoryComponent handleChange={handleSurgicalHistory} />
							</div>
						</div>
					</div>
				</div>
			}
		/>
	);
};

export default withReducer('historyApp', reducer)(Histories);
