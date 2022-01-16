// import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Main from '../Components/main';

const body = props => {
	function handleChange(indextop, index, property, value) {
		// alert(`${indextop} and  ${index} and ${property} and ${value} and`)
		props.data[indextop].obj[index][property] = value;
		// alert(JSON.stringify(props.data))
		props.onChange(props.data);
	}

	return (
		<div class="grid grid-cols-2 gap-4">
			{props.data.map((rosData, ione) => {
				return (
					<div class=" p-6">
						<div class="w-full border p-10 rounded border-gray-400">
							<div class="py-10">
								<Typography variant="subtitle2">
									<b>{rosData.mainTitle}</b>
								</Typography>
							</div>
							{rosData.obj.map((objData, itwo) => {
								return <Main indextop={ione} keya={itwo} data={objData} onChange={handleChange} />;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default body;
