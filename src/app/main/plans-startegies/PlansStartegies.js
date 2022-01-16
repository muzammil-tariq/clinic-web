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
import axios from '../../services/axiosbaseinstance';
import Button from '@material-ui/core/Button';

const initialDescriptionArray = [{ id: 1, date: '', description: '' }];

const PlanStartegies = () => {
	const [descrption, setDescrption] = useState(initialDescriptionArray);

	const handleInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...descrption];
		list[index][name] = value;
		setDescrption(list);
	};

	function handleSaveProduct() {
		let data = descrption;
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
						<Typography variant="h4">Plan & Startegies</Typography>
					</div>
					

					<div class="w-full px-20 pb-20">
						<div className=" md:flex w-full border p-10 rounded border-gray-400">
							<Button variant="contained" onClick={handleSaveProduct}>
								Submit
							</Button>
						</div>
						
						<div class="w-full border rounded border-gray-400 ">
							{/* <div class="p-10">
                                <Typography variant="subtitle2">SURGICAL HISTORY</Typography>
                            </div> */}

							<div class="p-20">
								<TableContainer component={Paper}>
									<Table aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell>Dates</TableCell>
												<TableCell>Descriptions</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{descrption.map((row, index) => (
												<TableRow key={index}>
													<TableCell>
														{
															<TextField
																id="date"
																name="date"
																type="date"
																value={row.date}
																onChange={e => handleInputChange(e, index)}
																variant="outlined"
																size="small"
																fullWidth
															></TextField>
														}
													</TableCell>

													<TableCell>
														{
															<TextField
																id="description"
																label="Description"
																name="description"
																value={row.description}
																onChange={e => handleInputChange(e, index)}
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
				</div>
			}
		/>
	);
};

export default PlanStartegies;
