import FusePageSimple from '@fuse/core/FusePageSimple';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SurgicalHistoryComponent = props => {
	const [inputList, setInputList] = useState([{ procedure_performed: '', date: '', outcome: '' }]);
	const [inputListName, setInputListName] = useState([
		{ name: 'name', value: '' },
		{ name: 'salt', value: '' },
		{ name: 'duration', value: '' }
	]);

	// handle input change
	const handleInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputList];
		list[index][name] = value;
		setInputList(list);
		props.handleChange(list);
	};

	// handle click event of the Remove button
	const handleRemoveClick = index => {
		const list = [...inputList];
		list.splice(index, 1);
		setInputList(list);
		props.handleChange(list);
	};

	// handle click event of the Add button
	const handleAddClick = () => {
		setInputList([...inputList, { procedure_performed: '', date: '', outcome: '' }]);
	};

	const top100Films = [
		{ label: 'Panadol', year: 1994 },
		{ label: 'The Godfather', year: 1972 },
		{ label: 'The Godfather: Part II', year: 1974 },
		{ label: 'The Dark Knight', year: 2008 },
		{ label: '12 Angry Men', year: 1957 },
		{ label: "Schindler's List", year: 1993 },
		{ label: 'Pulp Fiction', year: 1994 }
	];

	return (
		<FusePageSimple
			content={
				<div>
					{/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}

					<div className="w-full border rounded border-gray-400 ">
						<TableContainer component={Paper}>
							<Table aria-label="simple table">
								<TableHead>
									<TableRow>
										{/* {inputListName.map((x, i) => (
											<TableCell key={i}>{x.name}</TableCell>
										))} */}
										<TableCell>Procedure Performed</TableCell>
										<TableCell>Date</TableCell>
										<TableCell>Outcome</TableCell>
										{inputList.length !== 1 && <TableCell>Action</TableCell>}
									</TableRow>
								</TableHead>
								<TableBody>
									{inputList.map((x, i) => {
										return (
											<TableRow key={i}>
												{/* {inputListName.map((x, i) => (
													<TableCell>
														<TextField
															name={x.name}
															placeholder={`Enter ${x.name}`}
															value={x.value}
															onChange={e => handleInputChange(e, i)}
															id={x.name}
															label={x.name}
															variant="outlined"
															size="small"
															fullWidth
														/>
													</TableCell>
												))}
												<TableCell>
													{inputList.length !== 1 && (
														<Button
															variant="contained"
															onClick={() => handleRemoveClick(i)}
														>
															Remove
														</Button>
													)}
												</TableCell> */}

												<TableCell>
													<TextField
														name="procedure_performed"
														placeholder="Procedure Performed"
														value={x.procedure_performed}
														onChange={e => handleInputChange(e, i)}
														id="name"
														label="Procedure Performed"
														variant="outlined"
														size="small"
														fullWidth
													/>
													{/* <Autocomplete
														id="combo-box-demo"
														options={top100Films}
														getOptionLabel={option => option.label.toString()}
														// getOptionSelected={option => option.label === 1994}'
														onSelect={e => handleInputChange(e, i)}
														renderInput={params => (
															<TextField
																{...params}
																name="name"
																label="Combo box"
																variant="outlined"
																size="small"
																fullWidth
															/>
														)}
													/> */}
												</TableCell>

												<TableCell>
													<TextField
														id="ff"
														variant="outlined"
														type="date"
														size="small"
														fullWidth
														name="date"
														placeholder=""
														value={x.salt}
														onChange={e => handleInputChange(e, i)}
													/>
												</TableCell>
												<TableCell>
													<TextField
														id="ff"
														label="outcome"
														variant="outlined"
														size="small"
														fullWidth
														name="outcome"
														placeholder="Enter Outcome"
														value={x.outcome}
														onChange={e => handleInputChange(e, i)}
													/>
												</TableCell>
												<TableCell>
													{inputList.length !== 1 && (
														<Button
															variant="contained"
															onClick={() => handleRemoveClick(i)}
														>
															Remove
														</Button>
													)}
												</TableCell>
											</TableRow>
										);
									})}

									<Button variant="contained" onClick={handleAddClick} endIcon={<AddIcon />}>
										Add
									</Button>
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
			}
		/>
	);
};

export default SurgicalHistoryComponent;
