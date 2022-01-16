import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from '../../services/axiosbaseinstance';
import Button from '@material-ui/core/Button';

const DetailExamination = () => {
	const [detailExaminationData, setDetailExaminationData] = useState({
		general_appearance: '',
		skin_integumantary: '',
		head_neck: '',
		eye: '',
		ent: '',
		cardiovascular_system: '',
		respiratory_system: '',
		gastrointestinal_system: '',
		urogenital_system: '',
		central_nervous_system: '',
		endocrinal_system: '',
		musculoskeletal_system: '',
		gynae_obs: '',
		psychatric_mental_health: ''
	});

	const onChangeUseState = e => {
		const { name, value } = e.target;
		setDetailExaminationData(prevState => ({ ...prevState, [name]: value }));
	};

	function handleSaveDetailExamination() {
		let data = detailExaminationData;
		axios
			.post('api/auth/test', data)
			.then(response => {
				debugger;
			})
			.catch(er => {
				debugger;
			});

		// dispatch(createHistories(getValues()));
	}


	return (
		<FusePageSimple
			content={
				<div className="md:p-24">
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
										name="general_appearance"
										value={detailExaminationData.general_appearance}
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
										name="skin_integumantary"
										value={detailExaminationData.skin_integumantary}
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
										name="head_neck"
										value={detailExaminationData.head_neck}
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
										name="cardiovascular_system"
										value={detailExaminationData.cardiovascular_system}
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
										name="respiratory_system"
										value={detailExaminationData.respiratory_system}
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
										name="gastrointestinal_system"
										value={detailExaminationData.gastrointestinal_system}
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
										name="urogenital_system"
										value={detailExaminationData.urogenital_system}
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
										name="central_nervous_system"
										value={detailExaminationData.central_nervous_system}
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
										name="endocrinal_system"
										value={detailExaminationData.endocrinal_system}
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
										name="musculoskeletal_system"
										value={detailExaminationData.musculoskeletal_system}
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
										name="gynae_obs"
										value={detailExaminationData.gynae_obs}
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
										name="psychatric_mental_health"
										value={detailExaminationData.psychatric_mental_health}
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
