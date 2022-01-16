import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from '../../services/axiosbaseinstance';
import Button from '@material-ui/core/Button';

const SmartExamination = () => {
	const [smartExaminationData, setSmartExaminationData] = useState({
		face_eyes: '',
		extra_ocular_movements: '',
		pharynx_throat: '',
		lymph_nodes_cervical: '',
		hand_fingers: '',
		pulse: '',
		skin: '',
		edema: '',
		chest: '',
		abdomen: '',
		joints: '',
		knee_reflex: '',
		planter: '',
		others: ''
	});

	const onChangeUseState = e => {
		const { name, value } = e.target;
		setSmartExaminationData(prevState => ({ ...prevState, [name]: value }));
	};

	function handleSaveSmartExamination() {
		let data = smartExaminationData;
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
										name="face_eyes"
										value={smartExaminationData.face_eyes}
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
										name="extra_ocular_movements"
										value={smartExaminationData.extra_ocular_movements}
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
										name="pharynx_throat"
										value={smartExaminationData.pharynx_throat}
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
										name="lymph_nodes_cervical"
										value={smartExaminationData.lymph_nodes_cervical}
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
										name="hand_fingers"
										value={smartExaminationData.hand_fingers}
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
										name="pulse"
										value={smartExaminationData.pulse}
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
										name="skin"
										value={smartExaminationData.skin}
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
										name="edema"
										value={smartExaminationData.edema}
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
										name="chest"
										value={smartExaminationData.chest}
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
										name="abdomen"
										value={smartExaminationData.abdomen}
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
										name="joints"
										value={smartExaminationData.joints}
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
										name="planter"
										value={smartExaminationData.planter}
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
										label="Others"
										name="others"
										value={smartExaminationData.others}
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

export default SmartExamination;
