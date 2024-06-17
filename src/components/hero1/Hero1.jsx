import { Container } from "../../style/style";
import b from "../../assets/hero1/b.jpg";
import { ParallaxCar } from "../UI/ParallaxCar";

const Hero1 = () => {
  return (
    <div>
      <ParallaxCar imageUrl={b} offset={700} speed={0.2}>
        <div className="bg-hero-pattern h-[700px] bg-no-repeat bg-cover bg-center bg-fixed">
          <Container>
            <div className="text-center uppercase text-white text-7xl	pt-[40px] font-semibold">
              <p className="pt-[220px] ">
                Откройте дверь в мир <br /> новых возможностей <br />{" "}
                <span className="underline decoration-solid	">
                  автомобили из Китая 
                </span>
                <br />с любовью к деталям 
              </p>
            </div>
          </Container>
        </div>
      </ParallaxCar>
    </div>
  );
};

export default Hero1;
