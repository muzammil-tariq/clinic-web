import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const main = props => {
	function handleChange(event) {
		// Here, we invoke the callback with the new value
		props.data[event.target.name] = event.target.checked;

		props.onChange(props.indextop, props.keya, event.target.name, event.target.checked);
		// alert( JSON.stringify(props.data))
	}

	function removeSpace(text) {
		let s = text.replace(/\s/g, '');
		return s ? s : text;
	}

	return (
		<div class="flex items-center">
			<div class=" w-2/4">
				<Typography variant="subtitle2">{props.data.title}</Typography>
			</div>
			<RadioGroup aria-label={removeSpace(props.data.title)} row name={removeSpace(props.data.title)}>
				<FormControlLabel
					onChange={event => {
						handleChange(event);
					}}
					value="true"
					control={<Radio />}
					label="Yes"
				/>
				<FormControlLabel
					onChange={event => {
						handleChange(event);
					}}
					value="false"
					control={<Radio />}
					label="No"
				/>
			</RadioGroup>

			{/* <div class=" w-1/4">
				<FormControlLabel
					value="true"
					name={props.data.title}
					onChange={event => {
						handleChange(event);
					}}
					control={<Radio color="primary" />}
					label="Yes"
					labelPlacement="end"
				/>
			</div>
			<div class=" w-1/4">
				<FormControlLabel
					value="false"
					name={props.data.title}
					onChange={event => {
						handleChange(event);
					}}
					control={<Radio color="primary" />}
					label="No"
					labelPlacement="end"
				/>
			</div> */}
		</div>
	);
};

export default main;
