import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const main = props => {


	function handleChange(event) {
        // Here, we invoke the callback with the new value
        const { name, value } = event.target;
		props.data[name] = value;
        props.onChange(props.indextop, props.indexInner, name, value);
		// alert( JSON.stringify(props.data))
    }

	return (

        <div class="md:flex w-full px-20 pb-20 ">
            <div class="w-full border rounded border-gray-400 ">
                <div class="p-10">
                    <Typography variant="subtitle2">{props.data.title}</Typography>
                </div>
                <div class="flex flex-wrap w-full p-10">
            
                    <div class="w-1/2 p-6">
                        <TextField
                            id='date'
                            name="date"
                            type="date"
                            value={props.date}
                            onChange={(event)=> {handleChange(event)}}
                            variant="outlined"
                            size="small"
                            fullWidth
                        
                        ></TextField>
                    </div>
                    <div class="w-1/2 p-6">
                        <TextField
                            id='unit'
                            label='unit'
                            name="unit"
                            value={props.unit}
                            onChange={(event)=> {handleChange(event)}}
                            variant="outlined"
                            size="small"
                            fullWidth
                        
                        ></TextField>
                    </div>
                
                
                 </div>    

             </div>
        
        </div>




		// <div class="flex items-center">
		// 	<div class=" w-2/4">
		// 		<Typography variant="subtitle2">{props.data.title}</Typography>
		// 	</div>
		// 	<div class=" w-1/4">
		// 		<FormControlLabel
		// 			value={props.data.yes}
		// 			name='yes'
		// 			onChange={(event)=> {handleChange(event)}}
		// 			control={<Checkbox color="primary" />}
		// 			label="Yes"
		// 			labelPlacement="end"
		// 		/>
		// 	</div>
		// 	<div class=" w-1/4">
		// 		<FormControlLabel
		// 			value={props.data.no}
		// 			name='no'
		// 			onChange={(event)=> {handleChange(event)}}
		// 			control={<Checkbox color="primary" />}
		// 			label="No"
		// 			labelPlacement="end"
		// 		/>
		// 	</div>
		// </div>
	);
};

export default main;
