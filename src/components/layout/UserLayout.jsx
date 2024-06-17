import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'
// import Home from "../../pages/Home";
import ContactPopup from './ContactPopup/ContactPopup'

const UserLayout = () => {
	return (
		<div>
			<Header />
			<ContactPopup />
			<Outlet />
			<Footer />
		</div>
	)
}

export default UserLayout
