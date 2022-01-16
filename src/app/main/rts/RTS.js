
import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState, useRef  } from 'react';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useReactToPrint } from 'react-to-print';

class Example extends React.Component {

    state = {
        testDataAPI: [],
        tabValue: 0
      }
   
    componentDidMount() {
        // console.log(this.props.data);
        // const testApi = `http://localhost:3000/printReport/${this.props.data.id}`;
        // fetch(testApi)
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //         this.setState({testDataAPI: result});
        //     },
        //     (error) => {
   
        //     }
        // )
    }



  

    render() {

        const handleChange = (event, newValue) => {
            this.setState({
                tabValue:newValue
            })
        };

        
        return (
            <FusePageSimple
                classes={{
                    // root: classes.layoutRoot
                }}
               
                content={
                    <div className="md:p-24">
                        <div class="md:flex w-full text-center p-20 justify-between ">
                            <Typography variant="h6"></Typography>
                            <Typography variant="h4">RTS (Revised Truama Score)</Typography>
                            <Typography variant="subtitle2"></Typography>
                        </div> 
                        <Typography class="text-center px-20">Determines the severity and outcome of traumatic injuries in triage based on physiological scoring The on site triage method proposed in the revised trauma score evaluates the severity of the injury  based on the Glasgow Coma Scale and two vital signs: Systolic blood pressure (BP) and Respiratory rate.  </Typography>
                        <div class="md:flex w-full px-20 pb-20">
                            <div class="md:w-1/4">
                            </div>

                            <div class="md:w-2/4 px-10 py-20">
                                <div class="w-full border rounded border-gray-400 ">
                                    <div class="p-10">
                                        <Typography variant="subtitle2">Enter</Typography>
                                    </div>
                                    <div class="flex flex-wrap w-full p-10">
                                    
                                        <div class="w-1/2 p-6">
                                            <Typography variant="subtitle2">GCS  (Glassgow Coma Score)</Typography>
                                        </div>
                                        <div class="w-1/2 p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Total Score"
                                                name=""
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="w-1/2 p-6">
                                            <Typography variant="subtitle2">SBP (Systolic Blood Pressure)</Typography>
                                        </div>
                                        <div class="w-1/2 p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="mmHg"
                                                name=""
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </div>
                                        <div class="w-1/2 p-6">
                                            <Typography variant="subtitle2">RR (Respiratory rate)</Typography>
                                        </div>
                                        <div class="w-1/2 p-6">
                                            <TextField
                                                placeholder=""
                                                id=""
                                                label="Breath/min"
                                                name=""
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </div>  
                                    </div>    

                                </div>
                                
                                <div class="flex w-full pt-20 items-center justify-between ">
                                    <Button variant="contained" color="secondary">
                                        reset
                                    </Button> 
                                   
                                    <Button variant="contained" color="secondary">
                                        Calculate
                                    </Button> 

                                    <Typography variant="subtitle2">rts result</Typography>
                                   
                                    
                                </div>
                                
                            </div>


                            <div class="md:w-1/4">
                                
                            </div>
                           

                        </div>

                        {/* <Typography class="text-center">The RTS introduces the GCS score, the systolic blood pressure and the respiratory rate in the following formula: 
                                    Revised Trauma Score = (0.9368 x GCS Value) + (0.7326 x SBP Value) + (0.2908 x RR Value) 
                                    The RTS can be between 0 and 7.8408. A threshold of 4 is established as indicative for treatment in truama center.
                         </Typography> */}


				    
                               
				    </div>
			    }

                
            />
        );

    }

	
}




const RTS = () => {
  
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    // const { inputRef } = useBarcode({
    //     value: 'createnextapp',
    //     options: {
    //       background: '#ffff00',
    //     }
    //   });
   
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

  export default RTS;