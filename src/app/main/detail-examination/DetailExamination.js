import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from '../../services/axiosbaseinstance';
import Button from '@material-ui/core/Button';
import PatientSeacrher from '../ReusableComponent/PatientSearcher';

const DetailExamination = () => {
	const [detailExaminationData, setDetailExaminationData] = useState({
		generalAppearance: '',
		skin: '',
		headNeck: '',
		eye: '',
		ent: '',
		cardiovascularSystem: '',
		respiratorySystem: '',
		gastrointestinalSystem: '',
		urogenitalSystem: '',
		centralNervousSystem: '',
		endocrineSystem: '',
		musculoSkeletalSystem: '',
		gynae: '',
		psychiatric: ''
	});

	const onChangeUseState = e => {
		const { name, value } = e.target;
		setDetailExaminationData(prevState => ({ ...prevState, [name]: value }));
	};

	function handleSaveDetailExamination() {
		try {
			axios.post('api/detailsexams', detailExaminationData);
			setDetailExaminationData({
				generalAppearance: '',
				skin: '',
				headNeck: '',
				eye: '',
				ent: '',
				cardiovascularSystem: '',
				respiratorySystem: '',
				gastrointestinalSystem: '',
				urogenitalSystem: '',
				centralNervousSystem: '',
				endocrineSystem: '',
				musculoSkeletalSystem: '',
				gynae: '',
				psychiatric: ''
			});
		} catch (error) {
			console.log(error.errMsg);
		}
	}

	function handleGetPatientId(data) {
		setDetailExaminationData({ ...detailExaminationData, patientId: data });
	}
	return (
		<FusePageSimple
			content={
				<div className="md:p-24">
					<PatientSeacrher getPatientId={handleGetPatientId} />

					<div class="md:flex w-full text-center p-20 justify-center">
						<Typography variant="h4">Detail Examination</Typography>
					</div>

					<div class="w-full px-20 pb-20">
						<div className=" md:flex w-full border p-10 rounded border-gray-400">
							<Button variant="contained" onClick={handleSaveDetailExamination}>
								Submit
							</Button>
						</div>
						<div class=" md:flex w-full border p-10 rounded border-gray-400 ">
							<div class="flex flex-wrap w-full ">
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="General appearance"
										name="generalAppearance"
										value={detailExaminationData.generalAppearance}
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
										label="Skin & Integumantary"
										name="skin"
										value={detailExaminationData.skin}
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
										label="Head and Neck "
										name="headNeck"
										value={detailExaminationData.headNeck}
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
										label="Eye"
										name="eye"
										value={detailExaminationData.eye}
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
										label="ENT"
										name="ent"
										value={detailExaminationData.ent}
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
										label="Cardiovascular System"
										name="cardiovascularSystem"
										value={detailExaminationData.cardiovascularSystem}
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
										label="Respiratory System"
										name="respiratorySystem"
										value={detailExaminationData.respiratorySystem}
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
										label="Gastrointestinal System"
										name="gastrointestinalSystem"
										value={detailExaminationData.gastrointestinalSystem}
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
										label="UroGenital System"
										name="urogenitalSystem"
										value={detailExaminationData.urogenitalSystem}
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
										label="Central Nervous System"
										name="centralNervousSystem"
										value={detailExaminationData.centralNervousSystem}
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
										label="Endocrinal System"
										name="endocrineSystem"
										value={detailExaminationData.endocrineSystem}
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
										label="MusculoSkeletal System"
										name="musculoSkeletalSystem"
										value={detailExaminationData.musculoSkeletalSystem}
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
										label="Gynae & Obs."
										name="gynae"
										value={detailExaminationData.gynae}
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
										label="Psychatric & Mental Health"
										name="psychiatric"
										value={detailExaminationData.psychiatric}
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
			}
		/>
	);
};

export default DetailExamination;
