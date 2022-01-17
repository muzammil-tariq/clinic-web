import React from 'react';
import Typography from '@material-ui/core/Typography';

function ItemRadio({ name, label, onChange }) {
	return (
		<div class="flex items-center">
			<div class="w-2/4">
				<Typography variant="subtitle2">{label}</Typography>
			</div>
			<div className="p-20">
				<input type="radio" id="true" name={name} value="true" onChange={onChange} />
				<label for="true" className="m-10" style={{ fontSize: '16px' }}>
					Yes
				</label>
			</div>
			<div className="p-20">
				<input type="radio" id="false" name={name} value="false" onChange={onChange} />
				<label for="false" className="m-10" style={{ fontSize: '16px' }}>
					No
				</label>
			</div>
		</div>
	);
}

export default ItemRadio;
