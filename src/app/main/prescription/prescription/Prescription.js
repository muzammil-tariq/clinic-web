import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PrescriptionSheet from '../componets/PrescriptionSheet';
import MedicinesComponent from '../componets/MedicinesComponent';
import axios from '../../../services/axiosbaseinstance';

const initialArray = [{ id: 1, name: '', type: '', strength: '', quantity: '', timming: '' }];

const initialPrescriptionArray = [
	{
		complaints: '',
		bp: '',
		temp: '',
		rrate: '',
		pulse: '',
		chronic_disease: '',
		gravida: '',
		parity: '',
		lmp: '',
		edd: '',
		gestation_age: '',
		bishop_score: '',
		risk_grading: '',
		diagnosis: '',
		sugar: '',
		hcv: '',
		notes: '',
		next_appointment: '',
		instructions: ''
	}
];

const Prescription = () => {
	const [medicines, setMedicines] = useState(initialArray);
	const [prescriptionData, setPrescriptionData] = useState(initialPrescriptionArray);

	const handlePrescriptionDataChange = event => {
		setPrescriptionData({ ...prescriptionData, [event.target.name]: event.target.value });
	};

	function handleMedicinesTable(data) {
		setMedicines(data);
        // alert( JSON.stringify(laboratoryTable))
	}

	function handleSaveProduct() {

		let data = {
			medicines: medicines,
			prescriptionData: prescriptionData
		}
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
				<div className="">
					<div class="md:flex w-full text-center py-20 justify-center">
						<Typography variant="h4">Prescription</Typography>
					</div>
						<div className=" md:flex w-full border p-10 rounded border-gray-400">
							<Button variant="contained" onClick={handleSaveProduct}>
								Submit
							</Button>
						</div>
					<div class="flex w-full  ">
						
						<div class="md:w-1/3 pb-20">
							{/* <div class="p-10">
                                    <Typography variant="subtitle2">Enter Investigations</Typography>
                                </div> */}
							<div class="flex flex-wrap w-full p-10 ">
								<div class="flex w-full p-6">
									<Typography variant="subtitle2">Dr Fuozia Hassan </Typography>
								</div>
								<div class="flex w-full p-6">
									<Typography variant="subtitle2">MBBS,FCPS </Typography>
								</div>
								<div class="flex w-full p-6">
									<Typography variant="subtitle2">Gynaecologist </Typography>
								</div>
							</div>
						</div>

						<div class="md:w-1/3 md:px-10 pb-20">
							{/* <div class="p-10">
                                    <Typography variant="subtitle2">Upload as Image</Typography>
                                </div> */}
							<div class="flex flex-wrap w-full p-10">
								<div class="flex w-full p-6">
									<Typography variant="subtitle2">Khadija Bibi </Typography>
								</div>
								<div class="flex w-full p-6">
									<Typography variant="subtitle2">25 years Femals, pt.id 235 </Typography>
								</div>
								<div class="flex w-full p-6">
									<Typography variant="subtitle2">Allergies: Cephalosporin </Typography>
								</div>
							</div>
						</div>

						<div class="md:w-1/3 pr-10 pb-20">
							{/* <div class="p-10">
                                    <Typography variant="subtitle2">Order Investigations</Typography>
                                </div> */}
							<div class="flex flex-wrap items-center w-full p-10">
								<div class="flex w-full p-6">
									<Button
										style={{ fontSize: '12px' }}
										variant="contained"
										color="secondary"
										fullWidth
									>
										Print
									</Button>
								</div>
								<div class="flex w-full p-6">
									<Button
										style={{ fontSize: '12px' }}
										variant="contained"
										color="secondary"
										fullWidth
									>
										Email
									</Button>
								</div>
								<div class="flex w-full p-6">
									<Button
										style={{ fontSize: '12px' }}
										variant="contained"
										color="secondary"
										fullWidth
									>
										SMS
									</Button>
								</div>
							</div>
						</div>
					</div>

					{/* video and voice block */}

					<div class="w-full py-20">
						<div class="w-full border rounded border-gray-400 ">
							<div class="md:flex w-full items-center">
								<div class="w-full p-6">
									<Button
										style={{ fontSize: '12px' }}
										variant="contained"
										color="secondary"
										fullWidth
									>
										Voice Notes Rec
									</Button>
								</div>
								<div class="w-full p-6">
									<Button
										style={{ fontSize: '12px' }}
										variant="contained"
										color="secondary"
										fullWidth
									>
										Video Consultation
									</Button>
								</div>
								<div class="w-full p-6">
									<Button
										style={{ fontSize: '12px' }}
										variant="contained"
										color="secondary"
										fullWidth
									>
										Send to pharmacy
									</Button>
								</div>
								<div class="flex w-full p-6">
									<TextField
										id="admit-patient"
										label="Admit Patient To"
										onChange={e => setMedicines(e)}
										variant="outlined"
										size="small"
										fullWidth
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Medicines table */}

					<div class="md:flex w-full  pb-20">
						<div class="w-full border rounded border-gray-400 ">
							<div class="p-10">
								<Typography variant="subtitle2">Medicines</Typography>
							</div>

							<div class="px-20 py-10">
								<MedicinesComponent handleChange={handleMedicinesTable} />
							</div>
						</div>
					</div>

					{/* bottom of medicines table */}

					<div class="md:w-full pb-20">
						<div class="w-full border rounded border-gray-400 ">
							<div class="flex flex-wrap w-full p-10 ">
								<div class="md:w-1/3 pb-10 w-full">
									<div class="w-full border rounded border-gray-400">
										<div class="p-10">
											<Typography variant="subtitle2">Enter Important Investigations</Typography>
										</div>

										<div class="flex flex-wrap w-full p-10">
											<div class="flex w-full pb-10">
												<TextField
													id="sugar"
													label="Sugar Result"
													name="sugar"
													value={prescriptionData.sugar}
													onChange={e => handlePrescriptionDataChange(e)}
													variant="outlined"
													size="small"
													fullWidth
												/>
											</div>
											<div class="flex w-full">
												<TextField
													id="hcv"
													label="HCV Result"
													name="hcv"
													value={prescriptionData.hcv}
													onChange={e => handlePrescriptionDataChange(e)}
													variant="outlined"
													size="small"
													fullWidth
												/>
											</div>
										</div>
									</div>
								</div>
								<div class="md:w-1/3 md:px-10 w-full">
									<div class="w-full border rounded border-gray-400 ">
										<div class="p-10">
											<Typography variant="subtitle2">Order Investigations</Typography>
										</div>
										<div class="flex flex-wrap w-full p-4 ">
											<div class="flex w-full">
												<div class="sm:w-1/2 p-6">
													<TextField
														placeholder=""
														id="lab"
														label="lab"
														name="lab"
														variant="outlined"
														size="small"
														fullWidth
													/>
												</div>
												<div class="sm:w-1/2 p-6">
													<Button
														style={{ fontSize: '12px' }}
														variant="contained"
														color="secondary"
														fullWidth
													>
														send lab
													</Button>
												</div>
											</div>

											<div class="flex w-full">
												<div class="sm:w-1/2 p-6">
													<TextField
														placeholder=""
														id="radiology"
														label="Radiology"
														name="radiology"
														variant="outlined"
														size="small"
														fullWidth
													/>
												</div>
												<div class="sm:w-1/2 p-6">
													<Button
														style={{ fontSize: '12px' }}
														variant="contained"
														color="secondary"
														fullWidth
													>
														Send Radiolo
													</Button>
												</div>
											</div>

											<div class="flex w-full">
												<div class="sm:w-1/2 p-6">
													<TextField
														placeholder=""
														id="others"
														label="Others"
														name="others"
														variant="outlined"
														size="small"
														fullWidth
													/>
												</div>
												<div class="sm:w-1/2 p-6">
													<Button
														style={{ fontSize: '12px' }}
														variant="contained"
														color="secondary"
														fullWidth
													>
														Send Dept
													</Button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="md:w-1/3 pb-10 w-full">
									<div class="flex w-full pb-10 ">
										<TextField
											id="notes_postive_findings"
											label="Notes/ Positive findings"
											name="notes_postive_findings"
											value={prescriptionData.notes_postive_findings}
											onChange={e => handlePrescriptionDataChange(e)}
											variant="outlined"
											size="small"
											fullWidth
										/>
									</div>
									<div class="flex w-full pb-10">
										<TextField
											id="next_appointment"
											label="Next Appointment"
											name="next_appointment"
											value={prescriptionData.next_appointment}
											onChange={e => handlePrescriptionDataChange(e)}
											variant="outlined"
											size="small"
											fullWidth
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="md:w-full pb-20">
							<div class="w-full border rounded border-gray-400 ">
								<div class="flex flex-wrap w-full p-10 ">
									<div class="flex w-full pb-10">
										<TextField
											id="complaints"
											label="Complaints"
											name="complaints"
											value={prescriptionData.complaints}
											onChange={e => handlePrescriptionDataChange(e)}
											variant="outlined"
											size="small"
											fullWidth
										/>
									</div>

									<div class="w-full border rounded border-gray-400">
										<div class="p-10">
											<Typography variant="subtitle2">Vitals</Typography>
										</div>
										<div class="flex w-full p-10 ">
											<div class="w-full p-6">
												<TextField
													id="bp"
													label="B.P"
													name="bp"
													value={prescriptionData.bp}
													onChange={e => handlePrescriptionDataChange(e)}
													variant="outlined"
													size="small"
													fullWidth
												/>
											</div>
											<div class="w-full p-6">
												<TextField
													id="temp"
													label="Temp"
													name="temp"
													value={prescriptionData.temp}
													onChange={e => handlePrescriptionDataChange(e)}
													variant="outlined"
													size="small"
													fullWidth
												/>
											</div>
											<div class="w-full p-6">
												<TextField
													id="rrate"
													label="R.Rate"
													name="rrate"
													value={prescriptionData.rrate}
													onChange={e => handlePrescriptionDataChange(e)}
													variant="outlined"
													size="small"
													fullWidth
												/>
											</div>
											<div class="w-full p-6">
												<TextField
													id="pulse"
													label="Pulse"
													name="pulse"
													value={prescriptionData.pulse}
													onChange={e => handlePrescriptionDataChange(e)}
													variant="outlined"
													size="small"
													fullWidth
												/>
											</div>
										</div>
									</div>

									<div class="flex w-full py-10">
										<TextField
											id="chronic_disease"
											label="Chronic Disease"
											name="chronic_disease"
											value={prescriptionData.chronic_disease}
											onChange={e => handlePrescriptionDataChange(e)}
											variant="outlined"
											size="small"
											fullWidth
										/>
									</div>

									<div class="flex w-full py-10">
										<TextField
											id="diagnosis"
											label="Diagnosis"
											name="diagnosis"
											value={prescriptionData.diagnosis}
											onChange={e => handlePrescriptionDataChange(e)}
											variant="outlined"
											size="small"
											fullWidth
										/>
									</div>
									<div class="flex w-full py-10">
										<TextField
											id="instruction"
											label="Instruction"
											name="instruction"
											value={prescriptionData.instruction}
											onChange={e => handlePrescriptionDataChange(e)}
											variant="outlined"
											size="small"
											fullWidth
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="md:flex w-full  ">
						{/* Prescription sheet */}
						<div class="md:w-6/6 pb-20">
							<div class="w-full border rounded border-gray-400 ">
								<div class="flex flex-wrap w-full px-10">
									<PrescriptionSheet medicine={medicines} prescriptionData={prescriptionData} />
								</div>
							</div>
						</div>

						{/* right side */}
						{/* <div class="md:w-1/6 pb-20">
                            <div class="w-full border rounded border-gray-400 ">
                            
                                <div class="flex flex-wrap w-full p-10 ">
                                    <div class="pb-10 w-full">
                                    <div class="w-full border rounded border-gray-400">
                                        <div class="p-10">
                                            <Typography variant="subtitle2">Enter Important Investigations</Typography>
                                        </div>
                                       
                                        <div class="flex flex-wrap w-full p-10">
                                            <div class="flex w-full pb-10">
                                                <TextField
                                                    id="sugar"
                                                    label='Sugar Result'
                                                    name="sugar"
                                                    value={prescriptionData.sugar}
                                                    onChange={(e)=>handlePrescriptionDataChange(e)}
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                
                                                />  
                                            </div> 
                                            <div class="flex w-full pb-10">
                                                <TextField
                                                    id="hcv"
                                                    label='HCV Result'
                                                    name="hcv"
                                                    value={prescriptionData.hcv}
                                                    onChange={(e)=>handlePrescriptionDataChange(e)}
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                
                                                />  
                                            </div>
                                            
                                        </div>
                                    </div>
                                    </div>

                                    <div class="w-full border rounded border-gray-400 ">
                                        <div class="p-10">
                                            <Typography variant="subtitle2">Order Investigations</Typography>
                                        </div>
                                        <div class="flex flex-wrap w-full p-10 ">
                                            <div class="flex w-full pb-10">
                                                <TextField
                                                    id="lab"
                                                    label='Lab'
                                                    name="lab"
                                                    // value={prescriptionData}
                                                    // onChange={(e)=>handlePrescriptionDataChange(e)}
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                
                                                />  
                                            </div>
                                            <div class="flex w-full pb-10">
                                                <Button style={{ fontSize: '12px'}} variant="contained" color="secondary" fullWidth>
                                                    Send lab
                                                </Button>  
                                            </div> 

                                            <div class="flex w-full pb-10">
                                                <TextField
                                                    id="radiology"
                                                    label='Radiology'
                                                    name="radiology"
                                                    // value={prescriptionData}
                                                    // onChange={(e)=>handlePrescriptionDataChange(e)}
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                
                                                />  
                                            </div>
                                            <div class="flex w-full pb-10">
                                                <Button style={{ fontSize: '12px'}} variant="contained" color="secondary" fullWidth>
                                                    Send radiolo
                                                </Button>  
                                            </div> 

                                            <div class="flex w-full pb-10">
                                                <TextField
                                                    id="other"
                                                    label='Other'
                                                    name="other"
                                                    // value={prescriptionData}
                                                    // onChange={(e)=>handlePrescriptionDataChange(e)}
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                
                                                />  
                                            </div>
                                            <div class="flex w-full">
                                                <Button style={{ fontSize: '12px'}} variant="contained" color="secondary" fullWidth>
                                                    Send Dept
                                                </Button>  
                                            </div> 
                                            
                                            

                                        </div>
                                    </div>  
 

                                    <div class="flex w-full py-10 ">
                                        <TextField
                                            id="notes"
                                            label='Notes/findings'
                                            name="notes"
                                            value={prescriptionData.notes}
                                            onChange={(e)=>handlePrescriptionDataChange(e)}
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        
                                        />  
                                    </div> 
                                    <div class="flex w-full pb-10">
                                        <TextField
                                            id="next_appointment"
                                            label='Next Appointment'
                                            name="next_appointment"
                                            value={prescriptionData.next_appointment}
                                            onChange={(e)=>handlePrescriptionDataChange(e)}
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        
                                        />  
                                    </div>
                                    <div class="flex w-full">
                                        <TextField
                                            id="instructions"
                                            label='Instructions'
                                            name="instructions"
                                            value={prescriptionData.instructions}
                                            onChange={(e)=>handlePrescriptionDataChange(e)}
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        
                                        />  
                                    </div>




 
                                   
                                    
                                </div>  
                            </div>
                            
                            
                    
                        </div> */}
					</div>
				</div>
			}
		/>
	);
};

export default Prescription;
