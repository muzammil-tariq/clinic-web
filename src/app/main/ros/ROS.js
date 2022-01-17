import FusePageSimple from '@fuse/core/FusePageSimple';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Body from './Components/body';
import axios from '../../services/axiosbaseinstance';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Item from './Components/ItemRadio';

const initialRosArray = [
	{
		srno: 1,
		mainTitle: 'Constitutional / General',
		obj: [
			{
				id: 1,
				value: 'false',
				title: 'Recent Wieght Loss'
			},
			{
				id: 2,
				value: 'false',
				title: 'Fever'
			},
			{
				id: 3,
				value: 'false',
				title: 'Chill'
			},
			{
				id: 4,
				value: 'false',
				title: 'Body aches / fatigue'
			},
			{
				id: 5,
				value: 'false',
				title: 'Loss of Apitite'
			},
			{
				id: 6,
				value: 'false',
				title: 'Excessive sweating'
			},
			{
				id: 7,
				value: 'false',
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
				value: 'false',
				title: 'Cough'
			},
			{
				id: 2,
				value: 'false',
				title: 'Shortness of Breath'
			},
			{
				id: 3,
				value: 'false',
				title: 'Wheezing'
			},
			{
				id: 4,
				value: 'false',
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
				value: 'false',
				title: 'Rashes'
			},
			{
				id: 2,
				value: 'false',
				title: 'Sores'
			},
			{
				id: 3,
				value: 'false',
				title: 'Blister'
			},
			{
				id: 4,
				value: 'false',
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
				value: 'false',
				title: 'Visual Changes'
			},
			{
				id: 2,
				value: 'false',
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
				value: 'false',
				title: 'Abdominal Pain'
			},
			{
				id: 2,
				value: 'false',
				title: 'Heart burn/Gerd'
			},
			{
				id: 3,
				value: 'false',
				title: 'Nausea/Vomiting'
			},
			{
				id: 4,
				value: 'false',
				title: 'Constipation'
			},
			{
				id: 5,
				value: 'false',
				title: 'Diarrhea'
			},
			{
				id: 6,
				value: 'false',
				title: 'Hematesis'
			},
			{
				id: 7,
				value: 'false',
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
				value: 'false',
				title: 'Numbness/Tingling Sensation'
			},
			{
				id: 2,
				value: 'false',
				title: 'Sensation Loss'
			},
			{
				id: 3,
				value: 'false',
				title: 'Burning Sensations'
			},
			{
				id: 4,
				value: 'false',
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
				value: 'false',
				title: 'Hearing Loss'
			},
			{
				id: 2,
				value: 'false',
				title: 'Nasal discharge'
			},
			{
				id: 3,
				value: 'false',
				title: 'Epitaxis'
			},
			{
				id: 4,
				value: 'false',
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
				value: 'false',
				title: 'Allergic Reaction'
			},
			{
				id: 2,
				value: 'false',
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
				value: 'false',
				title: 'Nervousness/Anxiety'
			},
			{
				id: 2,
				value: 'false',
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
				value: 'false',
				title: 'Chest Pain/Discomfort'
			},
			{
				id: 2,
				value: 'false',
				title: 'Palpitaion / Arrythmia'
			},
			{
				id: 3,
				value: 'false',
				title: 'Shortness of Breath'
			},
			{
				id: 4,
				value: 'false',
				title: 'Perepheral Edema'
			},
			{
				id: 5,
				value: 'false',
				title: 'Orthopnea'
			},
			{
				id: 6,
				value: 'false',
				title: 'PND'
			},
			{
				id: 7,
				value: 'false',
				title: 'Syncope'
			},
			{
				id: 8,
				value: 'false',
				title: 'Vericose Vaiens'
			},
			{
				id: 9,
				value: 'false',
				title: 'Cramping in Legs'
			},
			{
				id: 10,
				value: 'false',
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
				value: 'false',
				title: 'Frequency'
			},
			{
				id: 2,
				value: 'false',
				title: 'Urgency'
			},
			{
				id: 3,
				value: 'false',
				title: 'Incontenence'
			},
			{
				id: 4,
				value: 'false',
				title: 'Dysuria'
			},
			{
				id: 5,
				value: 'false',
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
				value: 'false',
				title: 'Heat intolerence'
			},
			{
				id: 2,
				value: 'false',
				title: 'Cold intolerence'
			},
			{
				id: 3,
				value: 'false',
				title: 'Polydypsia'
			},
			{
				id: 4,
				value: 'false',
				title: 'Polyuria'
			},
			{
				id: 5,
				value: 'false',
				title: 'Polyphagia'
			},
			{
				id: 6,
				value: 'false',
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
				value: 'false',
				title: 'Joint Pain/Swelling'
			},
			{
				id: 2,
				value: 'false',
				title: 'Stiffness'
			},
			{
				id: 3,
				value: 'false',
				title: 'Muscle pain'
			},
			{
				id: 4,
				value: 'false',
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
				value: 'false',
				title: 'Abnormal Bleeding'
			},
			{
				id: 2,
				value: 'false',
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
				value: 'false',
				title: 'Menorrhagia'
			},
			{
				id: 2,
				value: 'false',
				title: 'Vaginal Discharge'
			},
			{
				id: 3,
				value: 'false',
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
		debugger;
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
							{/* <Body data={rosDataa} onChange={handleChange} /> */}
							<div class="grid grid-cols-2 gap-4">
								<div class="p-6">
									<div class="w-full border p-20 rounded border-gray-400 bg-white">
										<div class="py-5">
											<Typography variant="subtitle2">
												<b>Constitutional / General</b>
											</Typography>
										</div>
										<Item
											label="Recent Wieght Loss"
											name="weightLoss"
											value={rosData.weightLoss}
											onChange={handleChange}
										/>
										<Item
											label="Fever"
											name="fever"
											value={rosData.fever}
											onChange={handleChange}
										/>
										<Item
											label="Chill"
											name="chill"
											value={rosData.chill}
											onChange={handleChange}
										/>
										<Item
											label="Body aches / fatigue"
											name="bodyAshes"
											value={rosData.bodyAshes}
											onChange={handleChange}
										/>
										<Item
											label="Loss of Apitite"
											name="lossOfApitite"
											value={rosData.lossOfApitite}
											onChange={handleChange}
										/>
										<Item
											label="Excessive sweating"
											name="excessiveSwesting"
											value={rosData.excessiveSwesting}
											onChange={handleChange}
										/>
										<Item
											label="Sleep disorder"
											name="sleepDisorder"
											value={rosData.sleepDisorder}
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<div class="grid grid-cols-2 gap-4">
								<div class="p-6">
									<div class="w-full border p-20 rounded border-gray-400 bg-white">
										<div class="py-5">
											<Typography variant="subtitle2">
												<b>Respiratory</b>
											</Typography>
										</div>
										<Item
											label="Cough"
											name="cough"
											value={rosData.cough}
											onChange={handleChange}
										/>
										<Item
											label="Shortness of Breath"
											name="respiratoryShortnessOfBreath"
											value={rosData.respiratoryShortnessOfBreath}
											onChange={handleChange}
										/>
										<Item
											label="Wheezing"
											name="wheezing"
											value={rosData.wheezing}
											onChange={handleChange}
										/>
										<Item
											label="Hemoptysis"
											name="hemoptysis"
											value={rosData.hemoptysis}
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<div class="grid grid-cols-2 gap-4">
								<div class="p-6">
									<div class="w-full border p-20 rounded border-gray-400 bg-white">
										<div class="py-5">
											<Typography variant="subtitle2">
												<b>Skin & Integumantary</b>
											</Typography>
										</div>
										<Item
											label="Rashes"
											name="rashes"
											value={rosData.rashes}
											onChange={handleChange}
										/>
										<Item
											label="Sores"
											name="sores"
											value={rosData.sores}
											onChange={handleChange}
										/>
										<Item
											label="Blister"
											name="blister"
											value={rosData.blister}
											onChange={handleChange}
										/>
										<Item
											label="Growths"
											name="growths"
											value={rosData.growths}
											onChange={handleChange}
										/>
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
