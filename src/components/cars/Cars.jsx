import { Container } from '../../style/style'
import Button from '../UI/Button'
import zeekr001 from '../../assets/car/zeekr001.jpg'
import zeekrX from '../../assets/car/zeekrX.jpg'
import zeekr009 from '../../assets/car/zeekr009.jpg'
import lixiangLi7 from '../../assets/car/lixiangLi7.webp'
import lixiangLi8 from '../../assets/car/lixiangLi8.png'
import lixiangLi9 from '../../assets/car/lixiangLi9.jpg'
import b from '../../assets/hero1/b.jpg'
import { ParallaxCar } from '../UI/ParallaxCar'
import { Link } from 'react-router-dom'
import { PATH } from '../../utils/constants/constants'

const Cars = () => {
	return (
		<>
			<ParallaxCar imageUrl={zeekr001} offset={900} speed={0.2}>
				<Container>
					<div className=''>
						<h1 className='text-black uppercase font-semibold pt-[200px] text-5xl mb-10'>
							ZEEKR 001
						</h1>
						<p className='text-normal text-[20px] text mb-10'>
							Крупный лифтбек <br /> с красивыми пропорциями
						</p>
						<Link to={PATH.zeekr001}>
							<Button className=' bg-white text-black p-5 uppercase font-bold mt-5'>
								Посмотреть характеристики
							</Button>
						</Link>
					</div>
				</Container>
			</ParallaxCar>
			<ParallaxCar imageUrl={zeekrX} offset={2300} speed={0.2}>
				<Container>
					<div className=''>
						<h1 className='text-black uppercase font-semibold pt-[200px] text-5xl mb-10'>
							ZEEKR X
						</h1>
						<p className='text-normal text-[20px] text mb-10'>
							Компактный <br /> электромобиль-кроссовер
						</p>
						<Link to={PATH.zeekrX}>
							<Button className=' bg-white text-black p-5 uppercase font-bold mt-5'>
								Посмотреть характеристики
							</Button>
						</Link>
					</div>
				</Container>
			</ParallaxCar>
			<ParallaxCar imageUrl={zeekr009} offset={2500} speed={0.2}>
				<Container>
					<div className=''>
						<h1 className='text-black uppercase font-semibold pt-[200px] text-5xl mb-10'>
							ZEEKR 009
						</h1>
						<p className='text-normal text-[20px] text mb-10'>
							Первый в мире MPV
							<br /> электромобиль класса Luxe
						</p>
						<Link to={PATH.zeekr009}>
							{' '}
							<Button className=' bg-white text-black p-5 uppercase font-bold mt-5'>
								осмотреть характеристики
							</Button>
						</Link>
					</div>
				</Container>
			</ParallaxCar>
			<ParallaxCar imageUrl={lixiangLi7} offset={3300} speed={0.2}>
				<Container>
					<div className=''>
						<h1 className='text-black uppercase font-semibold pt-[200px] text-5xl mb-10'>
							lixiang Li7
						</h1>
						<p className='text-normal text-[20px] text mb-10'>
							Флагманский 5-местный
							<br /> семейный внедорожник
						</p>
						<Link to={PATH.LixiangLi7}>
							{' '}
							<Button className=' bg-white text-black p-5 uppercase font-bold mt-5'>
								осмотреть характеристики
							</Button>
						</Link>
					</div>
				</Container>
			</ParallaxCar>
			<ParallaxCar imageUrl={lixiangLi8} offset={3300} speed={0.2}>
				<Container>
					<div className=''>
						<h1 className='text-black uppercase font-semibold pt-[200px] text-5xl mb-10'>
							lixiang Li8
						</h1>
						<p className='text-normal text-[20px] text mb-10'>
							роскошный 6-местный <br />
							семейный внедорожник
						</p>
						<Link to={PATH.lixiangLi8}>
							{' '}
							<Button className=' bg-white text-black p-5 uppercase font-bold mt-5'>
								осмотреть характеристики
							</Button>
						</Link>
					</div>
				</Container>
			</ParallaxCar>
			<ParallaxCar imageUrl={lixiangLi9} offset={4200} speed={0.2}>
				<Container>
					<div className=''>
						<h1 className='text-black uppercase font-semibold pt-[200px] text-5xl mb-10'>
							lixiang Li9
						</h1>
						<p className='text-normal text-[20px] text mb-10'>
							Полноразмерный 6-местный
							<br /> флагманский внедорожник
						</p>
						<Link to={PATH.LixiangLi9}>
							{' '}
							<Button className=' bg-white text-black p-5 uppercase font-bold mt-5'>
								осмотреть характеристики
							</Button>
						</Link>
					</div>
				</Container>
			</ParallaxCar>
			<ParallaxCar imageUrl={b} offset={100} speed={0.2}>
				<div className='bg-hero-pattern h-[700px] bg-no-repeat bg-cover bg-center bg-fixed'></div>
			</ParallaxCar>
		</>
	)
}

export default Cars
