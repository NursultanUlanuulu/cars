import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export const ParallaxCar = ({
	imageUrl,
	offset = 700,
	speed = 0.2,
	children,
}) => {
	const carRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			const car = carRef.current
			let pageOffset = window.pageYOffset
			car.style.backgroundPositionY = `calc(30% + ${
				(pageOffset - offset) * speed
			}px)`
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [offset, speed])

	const carStyles = {
		backgroundImage: `url(${imageUrl})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '100vh',
	}

	return (
		<div className='min-h-screen relative overflow-hidden'>
			<div className='car' style={carStyles} ref={carRef}>
				{children}
			</div>
		</div>
	)
}

ParallaxCar.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	offset: PropTypes.number,
	speed: PropTypes.number,
	children: PropTypes.node,
}
