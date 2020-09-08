

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
let endpoint = '/api/purchases';


export default function Show(props) {
	const [fruit, updateFruit] = useState({});
	const history = useHistory();

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`${endpoint}/${props.match.params.id}`);
				const data = await response.json();
				await updateFruit(data);
				console.log(fruit);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleSubmit = async event => {
		history.push('/');

		try {
			const response = await fetch(`${endpoint}/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(fruit)
			});
			const data = await response.json();

			await updateFruit({
				name: '',
				color: '',
				readyToEat: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		updateFruit({ ...fruit, [event.target.id]: event.target.value });
	};
	// const handleCheckbox = () => {
	// 	updateFruit({ ...fruit, [event.target.id]: event.target.checked });
	// };

	return (
		<div className="Page-wrapper">
			{Object.keys(fruit).length > 0 ? (
				<div>
					<form onSubmit={handleSubmit} className="task-form">
						<h1> Edit Form </h1>
						Coin Name:{' '}
						<input
							type="text"
							name="name"
							id="name"
							value={fruit.coin}
							onChange={handleChange}
						/>
						<br />
						Price:{' '}
						<input
							type="text"
							name="color"
							id="color"
							value={fruit.price}
							onChange={handleChange}
						/>
						<br />
						Shares:{' '}
						<input
							type="text"
							name="color"
							id="color"
							value={fruit.shares}
							onChange={handleChange}
						/>
						<br />
						<button type="submit">Edit</button>
					</form>
				</div>
			) : (
				<h1>Nothing found on </h1>
			)}
			<h3>
				{/* <Link to={'/'}>Go Back Home</Link> */}
			</h3>
		</div>
	);
}


// import React from "react";

// function Edit(props) {
//   return (
//     <div className="signupform">
//       <h2>EDIT</h2>
//       <form>
//         <div className="field">
//           <label className="label">Name</label>
//           <div className="control">
//             <input className="input" type="text"  />
//           </div>
//         </div>

//         <div className="field">
//           <label className="label">Price</label>
//           <div className="control">
//             <input
//               className="input"
//               type="email"
              
//             />
//           </div>
//         </div>
//         <div className="field">
//           <label className="label">Shares</label>
//           <div className="control">
//             <input
//               className="input"
//               type="email"
              
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Edit;
