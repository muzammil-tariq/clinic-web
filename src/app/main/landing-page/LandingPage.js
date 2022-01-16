import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const initialArray = [{ id: 1, test: '', result: '', unit: '' }];

const LandingPage = () => {
	const [allergies, setAllergies] = useState(initialArray);

	return (
		<FusePageSimple
			content={
				<div className="md:p-24">
					<div class="md:flex w-full text-center p-20 justify-center">
						<Typography variant="h4">Surgery</Typography>
					</div>

					<div class="md:flex w-full px-20 pb-20">
						<div class="w-full border rounded border-gray-400 ">
							<div class="p-10">
								<Typography variant="subtitle2">Allergies</Typography>
							</div>

							<div class="p-20">
								<TableContainer component={Paper}>
									<Table aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell>Allergens (Food Etc)</TableCell>
												<TableCell>Medicine</TableCell>
												<TableCell>salt</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{allergies.map((row, index) => (
												<TableRow key={index}>
													<TableCell>
														{
															<TextField
																id="allergens"
																label="Allergens"
																name={'allergens'}
																// value={row.testCode}
																// onChange={handdleRowDataChange(index,row)}
																variant="outlined"
																size="small"
																fullWidth
															></TextField>
														}
													</TableCell>

													<TableCell>
														{
															<TextField
																id="medicine"
																label="Medicine"
																name={'medicine'}
																// value={row.testCode}
																// onChange={handdleRowDataChange(index,row)}
																variant="outlined"
																size="small"
																fullWidth
															></TextField>
														}
													</TableCell>

													<TableCell>
														{
															<TextField
																id="salt"
																label="salt"
																name={'salt'}
																// value={row.testCode}
																// onChange={handdleRowDataChange(index,row)}
																variant="outlined"
																size="small"
																fullWidth
															></TextField>
														}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</div>

							{/* <div class="flex flex-row-reverse p-20">
                                <Button onClick={addNew} variant="contained" color="primary">
                                    add new 
                                </Button>
                            </div> */}
						</div>
					</div>

					<div class="md:flex w-full px-20 pb-20">
						<div class="w-full border rounded border-gray-400 ">
							<div class="p-10">
								<Typography variant="subtitle2">Vitals</Typography>
							</div>
							<div class="w-full px-10 pb-20">
								<div class="flex w-full p-6">
									<TextField
										placeholder=""
										id=""
										label="Blood Pressure"
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
										label="Temperature"
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
										label="Resp. Rate"
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
										label="Chronic Disease"
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
			}
		/>
	);
};

export default LandingPage;
