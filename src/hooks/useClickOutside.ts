'use client'

import { RefObject, useEffect } from 'react'

export const useClickOutside = (
	ref: RefObject<HTMLElement>,
	callback: () => void
) => {
	const handleClick = (event: MouseEvent) => {
		if (ref) {
			if (event.target instanceof Node && !ref.current?.contains(event.target)) {
				callback();
			}
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		}
	})
}