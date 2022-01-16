import FusePageSimple from '@fuse/core/FusePageSimple';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import axios from '../../../services/axiosbaseinstance';

const HistoryMedicationComponent = props => {
	const [patient, setPatient] = useState({ patientName: '', cnic: '', phoneNumber: '', email: '' });

	// handle input change
	const handleChangeState = e => {
		const { name, value } = e.target;
		setPatient(prevState => ({ ...prevState, [name]: value }));
	};

	function getPatientDetails() {
		debugger;
		axios
			.get('api/patients/getPatientByCNIC/91082091820912')
			.then(async response => {
				setPatient(response);
			})
			.catch(er => {
				debugger;
			});
	}

	return (
		<FusePageSimple
			content={
				<Card className="p-20">
					<div className="w-full text-center p-20 rounded border-gray-400">
						<form>
							<div className="md:flex w-full">
								<TextField
									className="m-10"
									placeholder=""
									label="Patient CNIC"
									name="cnic"
									variant="outlined"
									size="small"
									fullWidth
									onChange={handleChangeState}
								/>
							</div>
							<br />
							<div className="text-center">
								<Button variant="contained" size="medium" onClick={getPatientDetails}>
									Search
								</Button>
							</div>
						</form>
					</div>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<TextField
								className="m-10"
								placeholder=""
								label="Patient Name"
								name="cnic"
								variant="outlined"
								size="small"
								fullWidth
								onChange={handleChangeState}
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								className="m-10"
								placeholder=""
								label="Patient Email"
								name="cnic"
								variant="outlined"
								size="small"
								fullWidth
								onChange={handleChangeState}
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								className="m-10"
								placeholder=""
								label="Patient Phone"
								name="cnic"
								variant="outlined"
								size="small"
								fullWidth
								onChange={handleChangeState}
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								className="m-10"
								placeholder=""
								label="Patient CNIC"
								name="cnic"
								variant="outlined"
								size="small"
								fullWidth
								onChange={handleChangeState}
							/>
						</Grid>
					</Grid>
				</Card>
			}
		/>
	);
};

export default HistoryMedicationComponent;
