import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from '../../services/axiosbaseinstance';
import Button from '@material-ui/core/Button';
import PatientSeacrher from '../ReusableComponent/PatientSearcher';

const SmartExamination = () => {
	const [smartExaminationData, setSmartExaminationData] = useState({
		FaceAndEyes: '',
		ExtraOcular: '',
		PharynxThroat: '',
		Lymph: '',
		Hand: '',
		Pulse: '',
		Skin: '',
		Edema: '',
		Chest: '',
		Abdomen: '',
		Joints: '',
		knee_reflex: '',
		Planter: ''
	});

	const onChangeUseState = e => {
		const { name, value } = e.target;
		setSmartExaminationData(prevState => ({ ...prevState, [name]: value }));
	};

	function handleSaveSmartExamination() {
		try {
			axios.post('api/smart-examination', smartExaminationData);
			setSmartExaminationData({
				FaceAndEyes: '',
				ExtraOcular: '',
				PharynxThroat: '',
				Lymph: '',
				Hand: '',
				Pulse: '',
				Skin: '',
				Edema: '',
				Chest: '',
				Abdomen: '',
				Joints: '',
				knee_reflex: '',
				Planter: ''
			});
		} catch (error) {
			console.log(error.errMsg);
		}
		// dispatch(createHistories(getValues()));
	}
	function handleGetPatientId(data) {
		setSmartExaminationData({ ...smartExaminationData, patientId: data });
	}
	return (
		<FusePageSimple
			content={
				<div className="md:p-24">
					<PatientSeacrher getPatientId={handleGetPatientId} />
					<div class="md:flex w-full text-center p-20 justify-center">
						<Typography variant="h4">Smart Examination</Typography>
					</div>

					<div class="w-full px-20 pb-20">
						<div className=" md:flex w-full border p-10 rounded border-gray-400">
							<Button variant="contained" onClick={handleSaveSmartExamination}>
								Submit
							</Button>
						</div>
						<div class=" md:flex w-full border p-10 rounded border-gray-400 ">
							<div class="flex flex-wrap w-full">
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Face & Eyes"
										name="FaceAndEyes"
										value={smartExaminationData.FaceAndEyes}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Extra Ocular movements"
										name="ExtraOcular"
										value={smartExaminationData.ExtraOcular}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Pharynx / Throat "
										name="PharynxThroat"
										value={smartExaminationData.PharynxThroat}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Lymph nodes cervical"
										name="Lymph"
										value={smartExaminationData.Lymph}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Hands & Fingers"
										name="Hand"
										value={smartExaminationData.Hand}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Pulse"
										name="Pulse"
										value={smartExaminationData.Pulse}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Skin"
										name="Skin"
										value={smartExaminationData.Skin}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Edema"
										name="Edema"
										value={smartExaminationData.Edema}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Chest"
										name="Chest"
										value={smartExaminationData.Chest}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Abdomen"
										name="Abdomen"
										value={smartExaminationData.Abdomen}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Joints"
										name="Joints"
										value={smartExaminationData.Joints}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Knee Reflex"
										name="knee_reflex"
										value={smartExaminationData.knee_reflex}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Planter"
										name="Planter"
										value={smartExaminationData.Planter}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div>
								{/* <div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Others"
										name="others"
										value={smartExaminationData.others}
										variant="outlined"
										size="small"
										fullWidth
										onChange={onChangeUseState}
									/>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			}
		/>
	);
};

export default SmartExamination;
