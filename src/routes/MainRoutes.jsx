import { createBrowserRouter } from 'react-router-dom'
import { PATH } from '../utils/constants/constants'
import Zeekr001 from '../pages/Zeekr001'
import UserLayout from '../components/layout/UserLayout'
import Zeekr009 from '../pages/Zeekr009'
import ZeekrX from '../pages/ZeekrX'
import LixiangLi7 from '../pages/LixiangLi7'
import LixiangLi9 from '../pages/LixiangLi9'
import Monjaro from '../pages/Monjaro'
import Home from '../pages/Home'

const ScrollToTop = () => {
	window.scrollTo(0, 0)
	return null
}

export const router = createBrowserRouter([
	{
		path: PATH.main_page,
		element: <UserLayout />,
		children: [
			{
				path: PATH.main_page,
				element: (
					<>
						<ScrollToTop />
						<Home />,
					</>
				),
				children: [],
			},
			{
				path: PATH.zeekr001,
				element: (
					<>
						<ScrollToTop />
						<Zeekr001 />
					</>
				),
				children: [],
			},
			{
				path: PATH.zeekr009,
				element: (
					<>
						<ScrollToTop />
						<Zeekr009 />
					</>
				),
				children: [],
			},
			{
				path: PATH.zeekrX,
				element: (
					<>
						<ScrollToTop />
						<ZeekrX />
					</>
				),
				children: [],
			},
			{
				path: PATH.LixiangLi7,
				element: (
					<>
						<ScrollToTop />
						<LixiangLi7 />
					</>
				),
				children: [],
			},
			{
				path: PATH.LixiangLi9,
				element: (
					<>
						<ScrollToTop />
						<LixiangLi9 />
					</>
				),
				children: [],
			},
			{
				path: PATH.monjaro,
				element: (
					<>
						<ScrollToTop />
						<Monjaro />
					</>
				),
				children: [],
			},
		],
	},
])
