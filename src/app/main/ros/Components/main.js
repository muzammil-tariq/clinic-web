import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const main = props => {

	function handleChange(event) {
        // Here, we invoke the callback with the new value
		props.data[event.target.name] = event.target.checked
		
        props.onChange(props.indextop, props.keya, event.target.name, event.target.checked);
		// alert( JSON.stringify(props.data))
    }

	return (
		<div class="flex items-center">
			<div class=" w-2/4">
				<Typography variant="subtitle2">{props.data.title}</Typography>
			</div>
			<div class=" w-1/4">
				<FormControlLabel
					value={props.data.yes}
					name='yes'
					onChange={(event)=> {handleChange(event)}}
					control={<Checkbox color="primary" />}
					label="Yes"
					labelPlacement="end"
				/>
			</div>
			<div class=" w-1/4">
				<FormControlLabel
					value={props.data.no}
					name='no'
					onChange={(event)=> {handleChange(event)}}
					control={<Checkbox color="primary" />}
					label="No"
					labelPlacement="end"
				/>
			</div>
		</div>
	);
};

export default main;
