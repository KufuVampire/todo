"use client"
import { ModalContext } from "@/context/modalContext";
import { store } from "@/store/store";
import { useState } from "react";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
			<Provider store={store}>{children}</Provider>
		</ModalContext.Provider>
	)
}