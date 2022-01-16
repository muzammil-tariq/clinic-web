import FusePageSimple from '@fuse/core/FusePageSimple';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Body from './Components/body';
import axios from '../../services/axiosbaseinstance';

import Button from '@material-ui/core/Button';

const initialRosArray = [
	{
		srno: 1,
		mainTitle: 'Constitutional / General',
		obj: [
			{
				id: 1,
				title: 'Recent Wieght Loss',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Fever',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Chill',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Body aches / fatigue',
				yes: '',
				no: ''
			},
			{
				id: 5,
				title: 'Loss of Apitite',
				yes: '',
				no: ''
			},
			{
				id: 6,
				title: 'Excessive sweating',
				yes: '',
				no: ''
			},
			{
				id: 7,
				title: 'Sleep disorder',
				yes: '',
				no: ''
			}
		]
	},

	{
		srno: 2,
		mainTitle: 'Respiratory',
		obj: [
			{
				id: 1,
				title: 'Cough',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Shortness of Breath',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Wheezing',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Hemoptysis',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 3,
		mainTitle: 'Skin & Integumantary',
		obj: [
			{
				id: 1,
				title: 'Rashes',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Sores',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Blister',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Growths',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 4,
		mainTitle: 'Eye',
		obj: [
			{
				id: 1,
				title: 'Visual Changes',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Red eye',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 5,
		mainTitle: 'GastroIntestinal',
		obj: [
			{
				id: 1,
				title: 'Abdominal Pain',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Heart burn/Gerd',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Nausea/Vomiting',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Constipation',
				yes: '',
				no: ''
			},
			{
				id: 5,
				title: 'Diarrhea',
				yes: '',
				no: ''
			},
			{
				id: 6,
				title: 'Hematesis',
				yes: '',
				no: ''
			},
			{
				id: 7,
				title: 'Blood in Stool',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 6,
		mainTitle: 'Neurological',
		obj: [
			{
				id: 1,
				title: 'Numbness/Tingling Sensation',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Sensation Loss',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Burning Sensations',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Seizures',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 7,
		mainTitle: 'ENT',
		obj: [
			{
				id: 1,
				title: 'Hearing Loss',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Nasal discharge',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Epitaxis',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Dysphagia',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 8,
		mainTitle: 'Allergies/ Immunity',
		obj: [
			{
				id: 1,
				title: 'Allergic Reaction',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Recurrent Infection',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 8,
		mainTitle: 'Psychatric',
		obj: [
			{
				id: 1,
				title: 'Nervousness/Anxiety',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Depression',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 9,
		mainTitle: 'CVS',
		obj: [
			{
				id: 1,
				title: 'Chest Pain/Discomfort',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Palpitaion / Arrythmia',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Shortness of Breath',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Perepheral Edema',
				yes: '',
				no: ''
			},
			{
				id: 5,
				title: 'Orthopnea',
				yes: '',
				no: ''
			},
			{
				id: 6,
				title: 'PND',
				yes: '',
				no: ''
			},
			{
				id: 7,
				title: 'Syncope',
				yes: '',
				no: ''
			},
			{
				id: 8,
				title: 'Vericose Vaiens',
				yes: '',
				no: ''
			},
			{
				id: 9,
				title: 'Cramping in Legs',
				yes: '',
				no: ''
			},
			{
				id: 10,
				title: 'Others',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 10,
		mainTitle: 'Genitourinary',
		obj: [
			{
				id: 1,
				title: 'Frequency',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Urgency',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Incontenence',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Dysuria',
				yes: '',
				no: ''
			},
			{
				id: 5,
				title: 'Hematuria',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 11,
		mainTitle: 'Endocrine',
		obj: [
			{
				id: 1,
				title: 'Heat intolerence',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Cold intolerence',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Polydypsia',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Polyuria',
				yes: '',
				no: ''
			},
			{
				id: 5,
				title: 'Polyphagia',
				yes: '',
				no: ''
			},
			{
				id: 6,
				title: 'Weight Gain',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 12,
		mainTitle: 'Musculoskeletal',
		obj: [
			{
				id: 1,
				title: 'Joint Pain/Swelling',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Stiffness',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Muscle pain',
				yes: '',
				no: ''
			},
			{
				id: 4,
				title: 'Muscle pain',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 13,
		mainTitle: 'Haematology/Lympahtics',
		obj: [
			{
				id: 1,
				title: 'Abnormal Bleeding',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Brusing',
				yes: '',
				no: ''
			}
		]
	},
	{
		srno: 14,
		mainTitle: 'Gyn/Ob/Breast',
		obj: [
			{
				id: 1,
				title: 'Menorrhagia',
				yes: '',
				no: ''
			},
			{
				id: 2,
				title: 'Vaginal Discharge',
				yes: '',
				no: ''
			},
			{
				id: 3,
				title: 'Lump Breast',
				yes: '',
				no: ''
			}
		]
	}
];

const ROS = () => {
	const [rosData, setRosData] = useState(initialRosArray);

	function handleChange(newValue) {
		// const newData = [...rosData];
		debugger;
		setRosData(newValue)
		
		alert( JSON.stringify(rosData))
		
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

		// dispatch(createHistories(getValues()));
	}
	return (
		<FusePageSimple
			content={
				<div className="md:p-24">
					<div class="md:flex w-full text-center p-20 justify-center">
						<Typography variant="h4">Review of System(ROS)</Typography>
					</div>
					<div className=" md:flex w-full border p-10 rounded border-gray-400">
						<Button variant="contained" onClick={handleSaveProduct}>
							Submit
						</Button>
					</div>

					<div className=" md:flex w-full border p-10 rounded border-gray-400">{JSON.stringify(rosData)}</div>

					{/*Rapid Assesment*/}
					<div class="w-full px-20 pb-20">
						<div class=" w-full border p-10 rounded border-gray-400 ">
							<Body data={rosData} onChange={handleChange} />
						</div>
					</div>
				</div>
			}
		/>
	);
};

export default ROS;
