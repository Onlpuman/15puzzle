import { useState } from "react";
import { Square } from "./Square";
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";

const emptyElement = 'empty';

export const Pzl = () => {
	const [field, setField] = useState([emptyElement, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

	// const onSquareClick = (element) => {
	// 	const elementIndex = field.indexOf(element);
	// 	const emptyElementIndex = field.indexOf(emptyElement);
	// 	console.log(elementIndex)
		
	// 	if (
	// 		(elementIndex - 1 == emptyElementIndex && ![3, 7, 11].includes(emptyElementIndex))
	// 		|| (elementIndex + 1 == emptyElementIndex && ![4, 8, 12].includes(emptyElementIndex))
	// 		|| elementIndex - emptyElementIndex == 4
	// 		|| emptyElementIndex - elementIndex == 4
	// 	) {
	// 		const copy = [...field];
	// 		copy.splice(elementIndex, 1, emptyElement);
	// 		copy.splice(emptyElementIndex, 1, element);
			
	// 		setField(copy);
	// 	}
	// };

	return (
		<div className="pzl">
			{field.map((element) => {
				return (
					<Square
						key={ element }
						id={ element }
						onClick={ onSquareClick }
					/>
				)
			})}
		</div>
	)
}