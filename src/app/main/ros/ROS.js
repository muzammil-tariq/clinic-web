import FusePageSimple from '@fuse/core/FusePageSimple';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Body from './Components/body';
import axios from '../../services/axiosbaseinstance';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const initialRosArray = [
	{
		srno: 1,
		mainTitle: 'Constitutional / General',
		obj: [
			{
				id: 1,
				title: 'Recent Wieght Loss'
			},
			{
				id: 2,
				title: 'Fever'
			},
			{
				id: 3,
				title: 'Chill'
			},
			{
				id: 4,
				title: 'Body aches / fatigue'
			},
			{
				id: 5,
				title: 'Loss of Apitite'
			},
			{
				id: 6,
				title: 'Excessive sweating'
			},
			{
				id: 7,
				title: 'Sleep disorder'
			}
		]
	},

	{
		srno: 2,
		mainTitle: 'Respiratory',
		obj: [
			{
				id: 1,
				title: 'Cough'
			},
			{
				id: 2,
				title: 'Shortness of Breath'
			},
			{
				id: 3,
				title: 'Wheezing'
			},
			{
				id: 4,
				title: 'Hemoptysis'
			}
		]
	},
	{
		srno: 3,
		mainTitle: 'Skin & Integumantary',
		obj: [
			{
				id: 1,
				title: 'Rashes'
			},
			{
				id: 2,
				title: 'Sores'
			},
			{
				id: 3,
				title: 'Blister'
			},
			{
				id: 4,
				title: 'Growths'
			}
		]
	},
	{
		srno: 4,
		mainTitle: 'Eye',
		obj: [
			{
				id: 1,
				title: 'Visual Changes'
			},
			{
				id: 2,
				title: 'Red eye'
			}
		]
	},
	{
		srno: 5,
		mainTitle: 'GastroIntestinal',
		obj: [
			{
				id: 1,
				title: 'Abdominal Pain'
			},
			{
				id: 2,
				title: 'Heart burn/Gerd'
			},
			{
				id: 3,
				title: 'Nausea/Vomiting'
			},
			{
				id: 4,
				title: 'Constipation'
			},
			{
				id: 5,
				title: 'Diarrhea'
			},
			{
				id: 6,
				title: 'Hematesis'
			},
			{
				id: 7,
				title: 'Blood in Stool'
			}
		]
	},
	{
		srno: 6,
		mainTitle: 'Neurological',
		obj: [
			{
				id: 1,
				title: 'Numbness/Tingling Sensation'
			},
			{
				id: 2,
				title: 'Sensation Loss'
			},
			{
				id: 3,
				title: 'Burning Sensations'
			},
			{
				id: 4,
				title: 'Seizures'
			}
		]
	},
	{
		srno: 7,
		mainTitle: 'ENT',
		obj: [
			{
				id: 1,
				title: 'Hearing Loss'
			},
			{
				id: 2,
				title: 'Nasal discharge'
			},
			{
				id: 3,
				title: 'Epitaxis'
			},
			{
				id: 4,
				title: 'Dysphagia'
			}
		]
	},
	{
		srno: 8,
		mainTitle: 'Allergies/ Immunity',
		obj: [
			{
				id: 1,
				title: 'Allergic Reaction'
			},
			{
				id: 2,
				title: 'Recurrent Infection'
			}
		]
	},
	{
		srno: 8,
		mainTitle: 'Psychatric',
		obj: [
			{
				id: 1,
				title: 'Nervousness/Anxiety'
			},
			{
				id: 2,
				title: 'Depression'
			}
		]
	},
	{
		srno: 9,
		mainTitle: 'CVS',
		obj: [
			{
				id: 1,
				title: 'Chest Pain/Discomfort'
			},
			{
				id: 2,
				title: 'Palpitaion / Arrythmia'
			},
			{
				id: 3,
				title: 'Shortness of Breath'
			},
			{
				id: 4,
				title: 'Perepheral Edema'
			},
			{
				id: 5,
				title: 'Orthopnea'
			},
			{
				id: 6,
				title: 'PND'
			},
			{
				id: 7,
				title: 'Syncope'
			},
			{
				id: 8,
				title: 'Vericose Vaiens'
			},
			{
				id: 9,
				title: 'Cramping in Legs'
			},
			{
				id: 10,
				title: 'Others'
			}
		]
	},
	{
		srno: 10,
		mainTitle: 'Genitourinary',
		obj: [
			{
				id: 1,
				title: 'Frequency'
			},
			{
				id: 2,
				title: 'Urgency'
			},
			{
				id: 3,
				title: 'Incontenence'
			},
			{
				id: 4,
				title: 'Dysuria'
			},
			{
				id: 5,
				title: 'Hematuria'
			}
		]
	},
	{
		srno: 11,
		mainTitle: 'Endocrine',
		obj: [
			{
				id: 1,
				title: 'Heat intolerence'
			},
			{
				id: 2,
				title: 'Cold intolerence'
			},
			{
				id: 3,
				title: 'Polydypsia'
			},
			{
				id: 4,
				title: 'Polyuria'
			},
			{
				id: 5,
				title: 'Polyphagia'
			},
			{
				id: 6,
				title: 'Weight Gain'
			}
		]
	},
	{
		srno: 12,
		mainTitle: 'Musculoskeletal',
		obj: [
			{
				id: 1,
				title: 'Joint Pain/Swelling'
			},
			{
				id: 2,
				title: 'Stiffness'
			},
			{
				id: 3,
				title: 'Muscle pain'
			},
			{
				id: 4,
				title: 'Muscle pain'
			}
		]
	},
	{
		srno: 13,
		mainTitle: 'Haematology/Lympahtics',
		obj: [
			{
				id: 1,
				title: 'Abnormal Bleeding'
			},
			{
				id: 2,
				title: 'Brusing'
			}
		]
	},
	{
		srno: 14,
		mainTitle: 'Gyn/Ob/Breast',
		obj: [
			{
				id: 1,
				title: 'Menorrhagia'
			},
			{
				id: 2,
				title: 'Vaginal Discharge'
			},
			{
				id: 3,
				title: 'Lump Breast'
			}
		]
	}
];

const ROS = () => {
	const [rosDataa, setRosDataa] = useState(initialRosArray);
	const [rosData, setRosData] = useState({
		weightLoss: false,
		fever: false,
		chill: false,
		bodyAshes: false,
		lossOfApitite: false,
		excessiveSwesting: false,
		sleepDisorder: false,
		visualChanges: false,
		redEye: false,
		hearingLoss: false,
		nasalDischarge: false,
		epitaxis: false,
		dysphagia: false,
		chestPain: false,
		palpitations: false,
		shortnessOfBreath: false,
		perepheralEdema: false,
		orthopnea: false,
		pnd: false,
		syncope: false,
		vericoseVaiens: false,
		crampingInLegs: false,
		other: false,
		respiratoryShortnessOfBreath: false,
		cough: false,
		wheezing: false,
		hemoptysis: false,
		abdominalPain: false,
		heartBurn: false,
		nausea: false,
		constipation: false,
		diarrhea: false,
		hematesis: false,
		bloodShoot: false,
		allergicReaction: false,
		patientId: ''
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setRosData(prevState => ({ ...prevState, [name]: value }));
	}

	function handleSaveProduct() {
		let data = rosData;
		axios
			.post('api/auth/test', data)
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
					<div class="md:flex w-full text-center p-20 justify-center">
						<Typography variant="h4">Review of System(ROS)</Typography>
					</div>

					{/*Rapid Assesment*/}

					<div class="w-full px-20 pb-20">
						<div className=" md:flex w-full border p-10 rounded border-gray-400">
							<Button variant="contained" onClick={handleSaveProduct}>
								Submit
							</Button>
						</div>
						<div class=" w-full border p-10 rounded border-gray-400 ">
							<Body data={rosDataa} onChange={handleChange} />
							<div class="grid grid-cols-2 gap-4">
								<div class=" p-6">
									<div class="w-full border p-10 rounded border-gray-400 bg-white">
										<div class="py-10">
											<Typography variant="subtitle2">
												<b>Constitutional / General</b>
											</Typography>
										</div>
										<div class="flex items-center">
											<div class=" w-2/4">
												<Typography variant="subtitle2">Abdominal Pain</Typography>
											</div>
											<RadioGroup aria-label="abdominalPain" row name="abdominalPain">
												<FormControlLabel
													onChange={event => {
														handleChange(event);
													}}
													value="true"
													control={<Radio />}
													label="Yes"
												/>
												<FormControlLabel
													onChange={event => {
														handleChange(event);
													}}
													value="false"
													control={<Radio />}
													label="No"
												/>
											</RadioGroup>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		/>
	);
};

export default ROS;
