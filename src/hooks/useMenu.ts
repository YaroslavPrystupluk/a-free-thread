import React, { useState } from 'react';

export function useMenu(
	initialValue: null,
): [HTMLElement | null, (event: React.MouseEvent<HTMLButtonElement>) => void, () => void] {
	const [value, setValue] = useState<null | HTMLElement>(initialValue);
	const menuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setValue(event.currentTarget);
	};
	const menuClose = () => {
		setValue(null);
	};

	return [value, menuOpen, menuClose];
}
