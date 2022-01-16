import FusePageSimple from '@fuse/core/FusePageSimple';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import axios from '../../../services/axiosbaseinstance';

const HistoryMedicationComponent = props => {
	const [cnic, setPatientCNIC] = useState('91082091820912');
	const [errors, setErrors] = useState('');
	const [patient, setPatient] = useState({});
	const [user, setUser] = useState({
		gender: '',
		id: '',
		email: '',
		firstName: '',
		lastName: '',
		date: '',
		age: '',
		phoneNumber: '',
		address: '',
		city: '',
		cnic: ''
	});

	// handle input change
	const handleChangeState = e => {
		const { value } = e.target;
		setPatientCNIC(value);
	};

	function getPatientDetails() {
		setPatient({});
		setUser({
			gender: '',
			id: '',
			email: '',
			firstName: '',
			lastName: '',
			date: '',
			age: '',
			phoneNumber: '',
			address: '',
			city: '',
			cnic: ''
		});
		props.getPatientId('');

		axios
			.get(`api/patients/getPatientByCNIC/${cnic}`)
			.then(async response => {
				setPatient(response.patient);
				setUser(response.user);
				props.getPatientId(response.patient._id);
				setErrors('');
			})
			.catch(er => {
				debugger;
				setErrors('No Patient found.');
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
									value={cnic}
									size="small"
									fullWidth
									onChange={handleChangeState}
									error={errors && true}
									helperText={errors}
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
								label="Patient First Name"
								name="cnic"
								variant="outlined"
								size="small"
								fullWidth
								disabled
								value={user.firstName}
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								className="m-10"
								placeholder=""
								label="Patient Last Name"
								name="cnic"
								variant="outlined"
								size="small"
								fullWidth
								disabled
								value={user.lastName}
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
								disabled
								value={user.email}
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
								disabled
								value={user.phoneNumber}
							/>
						</Grid>
					</Grid>
				</Card>
			}
		/>
	);
};

export default HistoryMedicationComponent;
