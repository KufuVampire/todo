import { createContext, Dispatch, SetStateAction } from "react";

interface OpenModalContext {
	isOpen: boolean,
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ModalContext = createContext<OpenModalContext | null>(null)