import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React,{ useState } from 'react';
import TextField from '@material-ui/core/TextField';
import LaboratoryTableComponent from './components/LaboratoryTableComponent';
import Body from './components/body';
import axios from '../../services/axiosbaseinstance';


const initialArray = [
    { id: 1,  date: "", test: "", result: "",unit:""},
    { id: 2,  date: "", test: "", result: "",unit:""},
    { id: 3,  date: "", test: "", result: "",unit:""},
];

const initialTestArray = [
	{
		srno: 1,
		mainTitle: 'Radiology',
		obj: [
			{
				id: 1,
				title: 'X rays',
				date: '',
				unit: ''
			},
			{
				id: 2,
				title: 'Retrograde Pyelogram',
				date: '',
				unit: ''
			},
            {
				id: 3,
				title: 'Ultrasound',
				date: '',
				unit: ''
			},
            {
				id: 4,
				title: 'Barium Meal',
				date: '',
				unit: ''
			},
            {
				id: 5,
				title: ' C.T Scan',
				date: '',
				unit: ''
			},
            {
				id: 6,
				title: 'Barium Meal',
				date: '',
				unit: ''
			},
            {
				id: 7,
				title: 'Mamography',
				date: '',
				unit: ''
			},
            {
				id: 8,
				title: 'MRI Scan',
				date: '',
				unit: ''
			},
            {
				id: 9,
				title: 'Others',
				date: '',
				unit: ''
			},
           	
			
		]
	},
    {
		srno: 2,
		mainTitle: 'Special Diagnostics',
		obj: [
			{
				id: 1,
				title: 'ECG',
				date: '',
				unit: ''
			},
			{
				id: 2,
				title: 'Angiography',
				date: '',
				unit: ''
			},
            {
				id: 3,
				title: 'Others',
				date: '',
				unit: ''
			},
           	
			
		]
	},
    {
		srno: 3,
		mainTitle: 'Echocardiolography',
		obj: [
			{
				id: 1,
				title: 'Echocardiolography',
				date: '',
				unit: ''
			},
			{
				id: 2,
				title: 'Endoscopy',
				date: '',
				unit: ''
			},
            {
				id: 3,
				title: 'Others',
				date: '',
				unit: ''
			},
           	
			
		]
	},
]



const Investigations = () => {

    const [labTest,setLabTest] = useState (initialTestArray);
    const [laboratoryTable,setLaboratoryTable] = useState ();
    

    function handleLaboratoryTable(data) {
		setLaboratoryTable(data);
        // alert( JSON.stringify(laboratoryTable))
	}

    function handleChangeLab(newValue) {
		debugger;
		setLabTest(newValue)
		// alert( JSON.stringify(labTest))
		
	  }

    function handleSaveProduct() {
		let data = labTest;
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
                        
                        <Typography variant="h4">Investigations</Typography>
                       
                    </div>

                    
                    <div class='w-full px-20 pb-20'>
                        <div className=" md:flex w-full border p-10 rounded border-gray-400">
							<Button variant="contained" onClick={handleSaveProduct}>
								Submit
							</Button>
						</div>
                        <div class="w-full border rounded border-gray-400 ">
                            <div class="p-10">
                                <Typography variant="subtitle2">Laboratory</Typography>
                            </div>

                            <div class ="p-20">
                                <LaboratoryTableComponent handleChange={handleLaboratoryTable}  />
                            </div>
                        </div>
                    </div>

                   

                    <div class="md:flex w-full px-20 ">
                        <div class="md:w-2/3 md:pr-10 pb-20">
                            <div class="w-full border rounded border-gray-400 ">
                                <div class="p-10">
                                    <Typography variant="subtitle2">Upload as Image</Typography>
                                </div>
                                <div class="flex flex-wrap w-full p-10">
                                
                                    <div class="w-1/3 p-6">
                                        <Typography variant="subtitle2">Photos</Typography>
                                    </div>
                                    <div class="w-1/3 p-6">
                                        <Button variant="contained" color="secondary">
                                            Browse
                                        </Button>  
                                    </div>
                                    <div class="w-1/3 p-6">
                                        <Button variant="contained" color="secondary">
                                            Upload
                                        </Button> 
                                    </div> 
                                    <div class="w-1/3 p-6">
                                        <Typography variant="subtitle2">Radiology</Typography>
                                    </div>
                                    <div class="w-1/3 p-6">
                                        <Button variant="contained" color="secondary">
                                            Browse
                                        </Button>  
                                    </div>
                                    <div class="w-1/3 p-6">
                                        <Button variant="contained" color="secondary">
                                            Upload
                                        </Button> 
                                    </div> 
                                    <div class="w-1/3 p-6">
                                        <Typography variant="subtitle2">Lab.Report</Typography>
                                    </div>
                                    <div class="w-1/3 p-6">
                                        <Button variant="contained" color="secondary">
                                            Browse
                                        </Button>  
                                    </div>
                                    <div class="w-1/3 p-6">
                                        <Button variant="contained" color="secondary">
                                            Upload
                                        </Button> 
                                    </div> 
                                    
                                </div>    

                            </div>
                                    
                        </div>

                        <div class="md:w-1/3 pb-20">
                            <div class="w-full border rounded border-gray-400 ">
                                <div class="p-10">
                                    <Button variant="contained" color="secondary" fullWidth>
                                    See Previous Reports
                                    </Button> 
                                </div>
                                <div class="px-10 pb-10">
                                    <Button variant="contained" color="secondary" fullWidth>
                                    Get reports from Radiology
                                    </Button> 
                                </div> 
                            </div>    
                        </div>

                    </div>

                    <Body data={labTest} onChange={handleChangeLab} />

                    

                    
                   
                </div>
            }

            
        />

       
    );
  };

  export default Investigations;