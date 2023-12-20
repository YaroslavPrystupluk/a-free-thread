import { useState } from 'react';

export function useToggleButton(initialValue: number): [number, (buttonIndex: number) => void] {
	const [value, setValue] = useState(initialValue);

	const toggleButton = (buttonIndex: number) => {
		setValue(buttonIndex);
	};

	return [value, toggleButton];
}
