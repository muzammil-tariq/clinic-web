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

const Index = () => {
	const [inputList, setInputList] = useState([{ name: '', salt: '', duration: '' }]);
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
	};

	// handle click event of the Remove button
	const handleRemoveClick = index => {
		const list = [...inputList];
		list.splice(index, 1);
		setInputList(list);
	};

	// handle click event of the Add button
	const handleAddClick = () => {
		setInputList([...inputList, { name: '', salt: '', duration: '' }]);
	};

	return (
		<FusePageSimple
			content={
				<div className="md:p-24">
					{/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}

					<div className="w-full border rounded border-gray-400 ">
						<TableContainer component={Paper}>
							<Table aria-label="simple table">
								<TableHead>
									<TableRow>
										{/* {inputListName.map((x, i) => (
											<TableCell key={i}>{x.name}</TableCell>
										))} */}
										<TableCell>Name</TableCell>
										<TableCell>Salt</TableCell>
										<TableCell>Duration</TableCell>
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
														name="name"
														placeholder="Enter Name"
														value={x.name}
														onChange={e => handleInputChange(e, i)}
														id="name"
														label="Name"
														variant="outlined"
														size="small"
														fullWidth
													/>
												</TableCell>
												<TableCell>
													<TextField
														id="ff"
														label="Salt"
														variant="outlined"
														size="small"
														fullWidth
														name="salt"
														placeholder="Enter Salt"
														value={x.salt}
														onChange={e => handleInputChange(e, i)}
													/>
												</TableCell>
												<TableCell>
													<TextField
														id="ff"
														label="Duration"
														variant="outlined"
														size="small"
														fullWidth
														name="duration"
														placeholder="Enter Duration"
														value={x.duration}
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

export default Index;
