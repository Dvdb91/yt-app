import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
	const [ term, setTerm ] = useState('');

	const onInputChange = (e) => {
		return setTerm(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		onTermSubmit(term);
	};
	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={onSubmit}>
				<div className="field">
					<label>Video Search:</label>
					<input type="text" value={term} onChange={onInputChange} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
