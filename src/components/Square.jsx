export const Square = props => {
	const { id, onClick } = props;

	if (id === 'empty') {
		return <div className="empty"/>;
	}

	const handleClick = () => {
		onClick(id);
	}

	return (
		<div className="item" onClick={ handleClick }>{ id }</div>
	)
}