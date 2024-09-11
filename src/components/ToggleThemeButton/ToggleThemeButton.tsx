"use client"
import Image from "next/image"

import DarkThemeIcon from '@/ui/darkThemeIcon.svg'
import LightThemeIcon from '@/ui/LightThemeIcon.svg'
import { useAppDispatch, useAppSelector } from "@/hooks/useToolkit"
import { toggleTheme } from "@/store/slices/themeSlice"

export const ToggleThemeButton = () => {
	const { currentTheme } = useAppSelector(state => state.theme);
	const dispatch = useAppDispatch();

	return (
		<button className='btn todo__btn todo__btn-theme' onClick={() => dispatch(toggleTheme())}>
			{
				currentTheme === 'light' ?
					<Image src={DarkThemeIcon} className='todo__btn-theme-icon' alt='dark theme icon' width={22} height={22} /> :
					<Image src={LightThemeIcon} className='todo__btn-theme-icon' alt='dark theme icon' width={22} height={22} />
			}
		</button>
	)
}
