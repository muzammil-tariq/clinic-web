// import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Main from '../components/main';

const body = props => {

	function handleChange(indextop, indexInner, property, value) {
		props.data[indextop].obj[indexInner][property] = value;
		// alert(JSON.stringify(props.data))
		props.onChange(props.data);
	}

	return (
        
		<div class="">
			{props.data.map((labData, indexOne ) => {
				return (
                    <div class="md:flex w-full px-20 pb-20 ">
                        <div class="w-full border rounded border-gray-400 ">
                            <div class="p-10">
                                <Typography variant="subtitle2">{labData.mainTitle}</Typography>
                            </div>
							{ labData.obj.map((objData, indexTwo) => {
								return <Main  indextop= {indexOne} indexInner={indexTwo}  data={objData} onChange={handleChange} />;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default body;
