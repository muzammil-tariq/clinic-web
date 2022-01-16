import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useRef  } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useReactToPrint } from 'react-to-print';


const initialArray = [
    { id: 1,  name: "", strength: "", dosage: "",route: "", timings:"" , other:""  },
    { id: 2,  name: "", strength: "", dosage: "",route: "", timings:"" , other:""  },
    { id: 3,  name: "", strength: "", dosage: "",route: "", timings:"" , other:""  },
];

class Example extends React.Component {

    state = {
        testDataAPI: [],
        tabValue: 0,
        treatment: initialArray
      }
   
    componentDidMount() {
       
    }

    render() {  

        const addNew = () => {

            let newTest = {
                 name: "",
                 dosage: "",
                 strength: "",
                 route: "",
                 timings: "",
                 other: ""
             };

             this.setState({ 
                treatment: [...this.state.treatment, newTest] 
           })
     
             
        }

        return (
            <FusePageSimple
               
               
                content={
                    <div className="md:p-24">
                        <div class="md:flex w-full text-center p-20 justify-between ">
                            <Typography variant="h6"></Typography>
                            <Typography variant="h4">Paeds Triage</Typography>
                            <Typography variant="subtitle2">20/25/2020</Typography>
                        </div>

                        <div class="md:flex w-full p-20">
                        

                            <div className="md:flex md:w-1/3 ">
                                <div class="flex flex-wrap w-full">
                                   
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Patient Name</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>Sulman</Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Age</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>28</Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Phone</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>033152415</Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Address</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>block 15 dera ghazi khan</Typography>
                                    </div>
                                </div>            
                            </div>


                            <div className="md:flex md:w-1/3">
                                <div class="flex flex-wrap w-full">
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Father/Husband Name</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>Sulman</Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Gender</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>Male</Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Email</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>sulman@fgmail.com</Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Chronic Disease</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>Nothing</Typography>
                                    </div>
                                </div>            
                            </div>


                            <div className="md:flex md:w-1/3 ">
                                <div class="flex flex-wrap w-full">
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Mr No #</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>1524115</Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Hospital #</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>205555</Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Cnic</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}>120215</Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}><b>Allergies</b></Typography>
                                    </div>
                                    <div class="w-1/2 px-2">
                                        <Typography style={{fontSize:12}}></Typography>
                                    </div>
                                </div>            
                            </div>
                        </div>
                        <div class="md:flex w-full px-20 ">
                            <div class="md:w-1/3 pb-20">
                                <div class="w-full border p-10 rounded border-gray-400 ">
                                <div class="flex w-full p-6">
                                    <TextField
                                        placeholder=""
                                        id=""
                                        label="Presenting Complaint"
                                        name=""
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                                <div class="flex w-full p-6">
                                    <TextField
                                        placeholder=""
                                        id=""
                                        label="Hopi"
                                        name=""
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                                </div>
                                
                            </div>

                            <div class="md:w-1/3 md:px-10 pb-20">
                                <div class="w-full border rounded border-gray-400 ">
                                    <div class="p-10">
                                        <Typography variant="subtitle2">Vitals</Typography>
                                    </div>
                                    <div class="flex flex-wrap w-full p-10">
                            
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Temp"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="R.R"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Pulse"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Others"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                     </div>    
                                </div>   
                            </div>


                            <div class="md:w-1/3 pb-20">
                                <div class="w-full border rounded border-gray-400 ">
                                    <div class="p-10">
                                        <Typography variant="subtitle2">Allergies</Typography>
                                    </div>
                                    <div class="flex flex-wrap w-full p-10">
                            
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label=""
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label=""
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label=""
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label=""
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        
                                    </div>    
                                </div>
                        
                            </div>

                        </div>

                        {/*Rapid Assesment*/}
                        <div class="md:flex w-full px-20 pb-20">
                            
                            <div class="w-full border p-10 rounded border-gray-400 ">
                                <div class="p-10">
                                    <Typography variant="subtitle2">Rapid Assesment</Typography>
                                </div>
                                <div class="md:flex">
                                    {/*left section */}
                                    <div class="md:w-1/2">
                                        {/*left section 1 */}
                                        <div class="w-full p-6">
                                            <div class="flex p-10 border rounded border-gray-400">
                                                <div class="flex flex-wrap w-full items-center">
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Temperature High fever on touch"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Respiratory rate > 70/min"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Weight < 1800 gms"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Pulse"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Normal"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="weak"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"> 160/min in infants"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"> 140/min in age 1 year and up"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Cappilary refill > 3 seconds "}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*left section 2 */}
                                        <div class="w-full p-6">
                                            <div class="flex p-10 border rounded border-gray-400">
                                                <div class="flex flex-wrap w-full items-center">
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Breathing Normal"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Gasping"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Stridor"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Grunting"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Labored"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Central Cyanosis"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*left section 3 */}
                                        <div class="w-full p-6">
                                            <div class="flex p-10 border rounded border-gray-400">
                                                <div class="flex flex-wrap w-full items-center">
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Lethargic"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Sunken eyes"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Skin pinch recovery time > 2 seconds "}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Edema both feet"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Jaundice"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Abdominal distention"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    {/*Right section */}
                                    <div class="md:w-1/2">
                                        {/*Right section 1*/}
                                        <div class="w-full p-6">
                                            <div class="flex p-10 border rounded border-gray-400">
                                                <div class="flex flex-wrap w-full items-center">
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">H/O Active bleeding</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">H/O Diarrhea</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">H/O Vomiting</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">H/O Foreign body Aspiration</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">H/O Drug/ chemical intake </Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Right section 2*/}
                                        <div class="w-full p-6">
                                            <div class="flex p-10 border rounded border-gray-400">
                                                <div class="flex flex-wrap w-full items-center">
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Trauma Head/Nack"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Severe Trauma"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        {/*Right section 3*/}
                                        <div class="w-full p-6">
                                            <div class="flex p-10 border rounded border-gray-400">
                                                <div class="flex flex-wrap w-full items-center">
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Response to vocal command"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Response to touch"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Response to pain stimulus"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Convulsions / Fits"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                         {/*Right section 4*/}
                                        <div class="w-full p-6">
                                            <div class="flex p-10 border rounded border-gray-400">
                                                <div class="flex flex-wrap w-full items-center">
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Severe Pallor"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Severe Pain"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Severe Malnutrition"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Major congenital malformation"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Posseting"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Superficial infections"}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-2/4">
                                                        <Typography variant="subtitle2">{"Transitional Stool "}</Typography>
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                    <div class="flex w-1/4">
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Checkbox color="primary" />}
                                                            label="No"
                                                            labelPlacement="end"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div class="flex flex-wrap w-full ">
                                    
                                    
                                    

                                   
    
    
                                  
                                   
                                </div>
                            </div>
                                
                        </div>

                        {/*Burn */}
                        <div class="flex w-full px-20 pb-20">
                            
                            <div class="w-full border p-10 rounded border-gray-400 ">
                                <div class="p-10">
                                    <Typography variant="subtitle2">Burn</Typography>
                                </div>
                                <div class="md:flex md:flex-wrap w-full">
                                    <div class="md:w-1/2 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Type"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/2 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Vital area Involevement"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/2 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Degree"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/2 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Inhalation injuries"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/2 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Age"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/2 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Concomitent trauma"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/2 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Associated diseases"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </div>
                                
                        </div>


                        {/* important investegation */}

                        <div class="flex w-full px-20 pb-20">
                            
                            <div class="w-full border p-10 rounded border-gray-400 ">
                                <div class="p-10">
                                    <Typography variant="subtitle2">Important investegation</Typography>
                                </div>
                                <div class="md:flex md:flex-wrap w-full">
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="PO2"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="PTT"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="HCO3"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Amylase"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="TLC"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="APTT"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="RBS"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Lipase"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Hb"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Na+"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Urea"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Bilirubin"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Platelets"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="K+"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Creatinine"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-1/4 p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Other"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-full p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="X-rays"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-full p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Ultrasound"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="md:w-full p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Other"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </div>
                                
                        </div>



                        {/*Investigations section */}

                        <div class="md:flex w-full px-20 ">
                            <div class="md:w-1/3 pb-20">
                                <div class="w-full border rounded border-gray-400 ">
                                    <div class="p-10">
                                        <Typography variant="subtitle2">Order Investigations</Typography>
                                    </div>
                                    <div class="flex flex-wrap items-center w-full p-10">
                            
                                        <div class="flex w-3/4 p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Laboratory"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-1/4 p-6">
                                            <Button variant="contained" color="secondary">
                                                send
                                            </Button>  
                                        </div>
                                        <div class="flex w-3/4 p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Radiology"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-1/4 p-6">
                                            <Button variant="contained" color="secondary">
                                                send
                                            </Button>  
                                        </div>
                                        <div class="flex w-3/4 p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Others"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-1/4 p-6">
                                            <Button variant="contained" color="secondary">
                                                send
                                            </Button>  
                                        </div>
                                        
                                    </div>    
                                </div>
                        
                            </div>

                            <div class="md:w-1/3 md:px-10 pb-20">
                                <div class="w-full border rounded border-gray-400 ">
                                    <div class="p-10">
                                        <Typography variant="subtitle2">Enter Investigations</Typography>
                                    </div>
                                    <div class="flex flex-wrap w-full p-10">
                            
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Laboratory"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Radiology"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Others"
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        
                                    </div>    
                                </div>
                        
                            </div>

                            <div class="md:w-1/3 pb-20">
                                <div class="w-full border rounded border-gray-400 ">
                                    <div class="p-10">
                                        <Typography variant="subtitle2">Upload as Image</Typography>
                                    </div>
                                    <div class="flex flex-wrap w-full items-center p-10">
                                    
                                        <div class="w-1/3 p-6">
                                            <Typography variant="subtitle2">Lab</Typography>
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
                                            <Typography variant="subtitle2">Others</Typography>
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

                           

                        </div>

                        {/*Diagnosis section */}
                        <div class="flex w-full px-20 pb-20">
                            
                            <div class="w-full border p-10 rounded border-gray-400 ">
                                {/* <div class="p-10">
                                    <Typography variant="subtitle2">Burn</Typography>
                                </div> */}
                                <div class="flex flex-wrap w-full">
                                    <div class="flex w-full p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Provisional Diagnosis"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="flex w-full p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Final Diagnosis"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="flex w-full p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Plan & Startegy"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                    <div class="flex w-full p-6">
                                        <TextField
                                            placeholder=""
                                            id=""
                                            label="Refered To"
                                            name=""
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </div>
                                
                        </div>


                        
                        
                        {/* treatment medicines */}


                        <div class='md:flex w-full px-20 '>        
                            <div class="md:w-2/3 pb-20">
                                <div class="w-full border rounded border-gray-400 ">
                                    <div class="p-10">
                                        <Typography variant="subtitle2">Treatment Medicines</Typography>
                                    </div>

                                    <div class ="p-20">
                                        <TableContainer component={Paper}>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                <TableRow>
                                                    <TableCell>Name</TableCell>
                                                    <TableCell >Strength</TableCell>
                                                    <TableCell >Route</TableCell>
                                                    <TableCell >Dosage</TableCell>
                                                    <TableCell >Timings</TableCell>
                                                    <TableCell >Other</TableCell>
                                                </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                {this.state.treatment.map((row,index) => (
                                                    <TableRow key={index}>
                                                    
                                                        
                                                        <TableCell >{
                                                            <TextField
                                                            id='name'
                                                            label='Name'
                                                            name={"name"}
                                                            // value={row.testCode}
                                                            // onChange={handdleRowDataChange(index,row)}
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                        
                                                            >
                                                            
                                                            </TextField>
                                                        }</TableCell>

                                                        <TableCell >{
                                                            <TextField
                                                            id='strength'
                                                            label='Strength'
                                                            name={"strength"}
                                                            // value={row.testCode}
                                                            // onChange={handdleRowDataChange(index,row)}
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                        
                                                            >
                                                            
                                                            </TextField>
                                                        }</TableCell>


                                                        < TableCell >{
                                                            <TextField
                                                            id='route'
                                                            label='Route'
                                                            name={"route"}
                                                            // value={row.testCode}
                                                            // onChange={handdleRowDataChange(index,row)}
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                        
                                                            >
                                                            
                                                            </TextField>
                                                        }</TableCell>


                                                        <TableCell >{
                                                            <TextField
                                                            id='dosage'
                                                            label='Dosage'
                                                            name={"dosage"}
                                                            // value={row.testCode}
                                                            // onChange={handdleRowDataChange(index,row)}
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                        
                                                            >
                                                            
                                                            </TextField>
                                                        }</TableCell>

                                                       


                                                        <TableCell >{
                                                            <TextField
                                                            id='timings'
                                                            label='Timings'
                                                            name={"timings"}
                                                            // value={row.testCode}
                                                            // onChange={handdleRowDataChange(index,row)}
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                        
                                                            >
                                                            
                                                            </TextField>
                                                        }</TableCell>



                                                        <TableCell >{
                                                            <TextField
                                                            id='other'
                                                            label='Other'
                                                            name={"other"}
                                                            // value={row.testCode}
                                                            // onChange={handdleRowDataChange(index,row)}
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                        
                                                            >
                                                            
                                                            </TextField>
                                                        }</TableCell>
                                                
                                                    
                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                        
                                        </TableContainer>

                                    </div>

                                    <div class="flex flex-row-reverse p-20">
                                        <Button onClick={addNew} variant="contained" color="primary">
                                            add new 
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div class="md:w-1/3 md:pl-20 pb-20">
                                <div class="w-full border rounded border-gray-400 ">
                                    <div class="p-10">
                                        <Typography variant="subtitle2">Instructions & Orders</Typography>
                                    </div>
                                    <div class="flex flex-wrap w-full p-10">
                            
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label=""
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label=""
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label=""
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="flex w-full p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label=""
                                                name=""
                                                variant="outlined"
                                                size="small"
                                                fullWidth
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

    }

	
}




const IntakeOutput = () => {
    

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
   
    return (

        <FusePageSimple
            content={
                <div className="h-full">
                <Example  ref={componentRef} />
                    {/* <MyOtherComponent ref={componentRef} /> */}
                    <div class="flex flex-row-reverse pb-20 px-20">
                        <Button onClick={handlePrint} variant="contained" color="primary">
                            Print Report
                        </Button>
                    </div>
                    {/* <canvas ref={inputRef} /> */}
                </div>

            }
        />
    );
  };

  export default IntakeOutput;