import Image from "next/image"
import Link from "next/link"

import logo from '@/assets/logo.png'

export const Header = () => {

	return (
		<header className="header w-full pt-4 pb-4 text-black border border-b-gray-400">
			<div className="container mx-auto px-4 flex items-center justify-between">
				<Link href='/' className="header__link-logo">
					<Image src={logo} alt="logo" width={60} height={60} />
				</Link>
			</div>
		</header>
	)
}
