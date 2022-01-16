import React, { useEffect, useState, useRef  } from 'react';
import Typography from '@material-ui/core/Typography';
import PrescriptionFooter from './PrescriptionFooter';

class PrescriptionSheet extends React.Component {

    state = {
        testDataAPI: [],
        tabValue: 0
      }
   
    componentDidMount() {
    
    }

    render() {

        return (
            <div>
                <div class="md:flex w-full  ">
                    <div class="md:w-2/5">  
                        <div class="flex flex-wrap w-full p-10 ">
                            <div class="flex w-full">
                                <Typography variant="subtitle2">Dr Fuozia Hassan </Typography>
                            </div>
                            <div class="flex w-full">
                                <Typography variant="subtitle2">MBBS,FCPS </Typography>
                            </div>
                            <div class="flex w-full ">
                                <Typography variant="subtitle2">Gynaecologist </Typography>
                            </div>
                        </div>    
                    </div>

                    <div class="md:w-2/5 md:px-10 ">     
                        <div class="flex flex-wrap w-full p-10">
                            <div class="flex w-full">
                                <Typography variant="subtitle2">Khadija Bibi </Typography>
                            </div>
                            <div class="flex w-full">
                                <Typography variant="subtitle2">25 years Femals, pt.id 235 </Typography>
                            </div>
                            <div class="flex w-full">
                                <Typography variant="subtitle2">Allergies: Cephalosporin </Typography>
                            </div>   
                        </div>     
                    </div>


                    <div class="md:w-1/5 pr-10">
                        <div class="flex flex-wrap items-center w-full p-10">
                            <div class="flex w-full p-6">
                                    <Typography variant="subtitle2">22/1/2021 </Typography>
                            </div>    
                        </div>      
                    </div>
                       
                </div>
                <hr />
                <div class="p-10">
                    <div class="md:flex w-full  ">
                        <div class="md:w-3/5">  
                            <div class="flex flex-wrap w-full py-10 ">
                                <div class="flex w-full pb-20">
                                    <Typography variant="subtitle2">Rx </Typography>
                                </div>
                                {
                                    this.props.medicine[0].name !== "" ? 

                                    this.props.medicine.map((row,index) => (
                                        <div class="w-full pl-10 pb-10">
                                            <Typography variant="subtitle2">{`${row.type} ${row.name} ${row.strength}`}</Typography>
                                            <Typography variant="subtitle2"> {`${row.quantity} ${row.timming} `}</Typography>
                                        </div>
                                    ))

                                       
                                    : null    
                                }
                               
                            </div>    
                        </div>

                        <div class="md:w-2/5 md:px-10 ">     
                            <div class="flex flex-wrap w-full p-10">
                                <div class="flex w-full">
                                    <Typography variant="subtitle2">Sugar </Typography>
                                    <Typography variant="subtitle2">{this.props.prescriptionData.sugar} ,</Typography>
                                    <Typography variant="subtitle2">HCV </Typography>
                                    <Typography variant="subtitle2">{this.props.prescriptionData.hcv}</Typography>
                                </div>
                                <div class="flex w-full">
                                    <Typography variant="subtitle2"><b>Complaints</b></Typography>
                                </div>
                                <div class="flex w-full">
                                    <Typography variant="subtitle2">{this.props.prescriptionData.complaints}</Typography>
                                </div> 
                                <div class="flex w-full">
                                    <Typography variant="subtitle2"><b>Ch.Diease</b></Typography>
                                </div> <div class="flex w-full">
                                    <Typography variant="subtitle2">{this.props.prescriptionData.chronic_disease}</Typography>
                                </div>
                                <div class="flex w-full">
                                    <Typography variant="subtitle2"><b>Vitals</b></Typography>
                                </div>
                                 <div class="flex w-full">
                                    <Typography variant="subtitle2">Bp {this.props.prescriptionData.bp}</Typography>
                                </div>
                                 <div class="flex w-full">
                                    <Typography variant="subtitle2">Temp {this.props.prescriptionData.temp}</Typography>
                                </div>
                                <div class="flex w-full">
                                    <Typography variant="subtitle2">Pulse {this.props.prescriptionData.pulse}</Typography>
                                </div>
                                <div class="flex w-full">
                                    <Typography variant="subtitle2"><b>Diagnosis</b></Typography>
                                </div> 
                                <div class="flex w-full">
                                    <Typography variant="subtitle2">{this.props.prescriptionData.diagnosis}</Typography>
                                </div>
                                <div class="flex w-full">
                                    <Typography variant="subtitle2"><b>Investigations</b></Typography>
                                </div> 
                                <div class="flex w-full">
                                    <Typography variant="subtitle2"></Typography>
                                </div>
                                <div class="flex w-full">
                                    <Typography variant="subtitle2"><b>Instruction</b></Typography>
                                </div> 
                                <div class="flex w-full">
                                    <Typography variant="subtitle2">{this.props.prescriptionData.instructions}</Typography>
                                </div>
                                <div class="flex w-full">
                                    <Typography variant="subtitle2"><b>Next Appointment</b></Typography>
                                </div> 
                                <div class="flex w-full">
                                    <Typography variant="subtitle2">{this.props.prescriptionData.next_appointment}</Typography>
                                </div>
                                
                            </div>     
                        </div>

                    </div>
                </div>
                <hr/>
                <div className="relative bottom-0 pt-6 w-full bottom-0" >
                    <PrescriptionFooter />
                </div>
				    
            </div>
        );

    }

	
}

export default PrescriptionSheet;
