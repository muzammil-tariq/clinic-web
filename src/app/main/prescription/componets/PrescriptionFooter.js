import React from 'react';
import Typography from '@material-ui/core/Typography';

function PrescriptionFooter() {
	return (
		<div className="flex flex-wrap w-full">
			<div className="text-center w-full mb-10">
				<Typography style={{ fontSize: 12 }}>
					Clinic Address; Medical Centre Phase 5, Main road DHA, Lahore
				</Typography>
				<Typography style={{ fontSize: 12 }}>
					Phone for appointment 0333 615966, 042 5785789. azmat@gmail.com
				</Typography>
			</div>
		</div>
	);
}

export default PrescriptionFooter;
