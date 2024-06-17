import styled from "styled-components";
import xeekr001 from "../../public/zeekr001.mp4";
import black1 from "../../public/zeekr001/black1.png";
import div1 from "../../public/zeekr001/div1.png";
import div4 from "../../public/zeekr001/div4.png";
import interior from "../../public/zeekr001/interior.png";
import interior2 from "../../public/zeekr001/interior2.png";
import { Container } from "../style/style";
import { useState } from "react";

const Zeekr001 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      title: "Сверхнизкий коэффициент лобового сопротивления",
      dscr: "Превосходный аэродинамический дизайн, созданный на основе многократной оптимизации симуляцией, улучшает конструкцию 11 элементов сопротивления ветру для всего автомобиля, повышая выносливость и существенно снижая шум от ветра.",
      image: "../../public/zeekr001/tab1.png",
    },
    {
      title: "Безрамочные двери",
      dscr: "Превосходный аэродинамический дизайн, созданный на основе многократной оптимизации симуляцией, улучшает конструкцию 11 элементов сопротивления ветру для всего автомобиля, повышая выносливость и существенно снижая шум от ветра.",
      image: "../../public/zeekr001/tab2.png",
    },
    {
      title: "Колесные диски",
      dscr: "22-дюймовые кованые диски с 4-поршневыми суппортами,22-дюймовые диски Energy Light Blade с 4-поршневыми суппортами.",
      image: "../../public/zeekr001/tab3.png",
    },
  ];

  const changeTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <section className="relative h-screen w-full flex justify-center items-center">
        <video
          className="object-cover w-full h-full absolute inset-0"
          poster="https://officewebsite-prod-blob-cn.azureedge.net/assets-em/images/poster-model-001.png"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={xeekr001} type="video/mp4" />
          Ваш браузер не поддерживает видео тег.
        </video>
        <div className="text-center" style={{ zIndex: "1" }}>
          <div className="transition-all duration-800">
            <p className="text-6xl font-medium text-white">ZEEKR 001</p>
            <p className="text-6xl font-medium text-white mt-3">
              Инновационный люксовый
            </p>
            <p className="text-6xl font-medium text-white mt-3">шутинг-брейк</p>
            <p className="text-2xl font-normal text-white mt-6">
              Источник неповторимых ощущений.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f1efeb]  flex justify-center items-center h-[700px]">
        <Container1>
          <p className="text-[44px] font-medium">
            Первый в мире электрический шутинг-брейк, созданный на базе
            спорткара, массового производства. У ZEEKR 001 есть, что предложить
            каждому. Сочетание органичного и геометрического дизайна позволяют
            вам наслаждаться роскошными поездками каждый день.
          </p>
        </Container1>
      </section>
      {/* надо исправить стили */}
      <section className=" border-b-2 border-gray-600 pb-3">
        <Container1>
          <div>
            <div>
              <p className="text-[44px] font-medium">Цвета экстерьера</p>
            </div>
            <div>
              <p>
                Безупречно плавные поверхности изысканно подчеркиваются
                выразительными передней и задней частями кузова.
              </p>
              <div></div>
            </div>
          </div>
        </Container1>
        <div>
          <picture>
            <img src={black1} alt="" />
          </picture>
        </div>
      </section>
      <section>
        <Container1>
          <div className="flex justify-between mt-12">
            <div>
              <p className="text-[44px] font-medium">Особенности экстерьера</p>
            </div>
            <div>
              <p className=" text-xl w-[542px] ">
                Изящный, элегантный и мощный – ZEEKR 001 обладает эффектным
                внешним видом.
              </p>
            </div>
          </div>
        </Container1>
        <Container2>
          <div className="flex flex-wrap justify-between mt-12">
            <Div>
              <img src={div1} alt="" />
            </Div>
            <Div2>
              <div className="text-xl font-medium text-start w-[371px]">
                <p>Интеллектуальные матричные светодиодные фары</p>
              </div>
              <div className="text-[16px] font-normal mt-2 w-[371px]">
                <p>
                  Интеллектуальные матричные светодиодные фары с адаптивным
                  дальним светом (Adaptive Driving Beam – ADB), с 64
                  независимыми источниками интеллектуального управления и
                  динамической регулировкой матрицы дальнего света сопровождают
                  вас полной безопасностью в ночные поездки.
                </p>
              </div>
            </Div2>
            <Div2>
              <div className="text-xl font-medium text-start w-[371px]">
                <p>Встроенные задние фонари сквозного типа</p>
              </div>
              <div className=" text-[16px] font-normal mt-2 w-[371px]">
                <p>
                  Интегрированные задние фонари длиной 1,47 м создают яркий и
                  стильный внешний вид, усиливая уникальную эстетическую
                  привлекательность и узнаваемость.
                </p>
              </div>
            </Div2>
            <Div>
              <img src={div4} alt="" />
            </Div>
          </div>
        </Container2>
      </section>
      <section className="tabs bg-[#121215]">
        <Container>
          <Container1>
            <p className="text-[30px] font-medium w-[37rem] pt-32 pb-12 text-white">
              Кузов, выполненный в стиле шутинг-брейк, наглядно олицетворяет
              динамичный характер автомобиля.
            </p>
          </Container1>
          <div className="tabs pb-16">
            <div className="tab-content">
              <img
                // height={450}
                src={tabData[activeTab].image}
                alt={`Фото ${activeTab + 1}`}
              />
            </div>
            <Container1>
              <div className="tab-headers text-white flex justify-between">
                {tabData.map((tab, index) => (
                  <div
                    key={index}
                    className={
                      index === activeTab ? "tab-header active" : "tab-header"
                    }
                    onClick={() => changeTab(index)}
                  >
                    <div className="">
                      <div className=" mt-14 mb-3 border-2 "></div>
                      <p className=" text-2xl w-72">{tab.title}</p>
                      <p className=" text-base w-72 font-normal">{tab.dscr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container1>
          </div>
        </Container>
      </section>
      <section className="tipo-tabs"></section>
      <section>
        <Container1>
          <div className="flex justify-between mt-12">
            <div>
              <p className="text-[44px] font-medium">Особенности интерьера</p>
            </div>
            <div>
              <p className=" text-xl w-[542px] ">
                Высококачественные материалы, интуитивно понятный функционал,
                инновационные технологии.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                vitae similique quisquam quasi perspiciatis ea optio placeat,
                quos laboriosam autem, id accusamus ullam. In a omnis enim error
                nisi! Aliquam.
              </p>
            </div>
          </div>
        </Container1>
        <Container2>
          <div className="flex flex-wrap justify-between mt-12">
            <Div>
              <img src={interior} alt="" />
            </Div>
            <Div2>
              <div className="text-xl font-medium text-start w-[371px]">
                <p>Роскошный и комфортабельный интерьер</p>
              </div>
              <div className="text-[16px] font-normal mt-2 w-[371px]">
                <p>
                  Внутренняя отделка салона сочетает в себе передовые цифровые
                  технологии и использование материалов высшего качества. Наша
                  цель - создать комфортное и уютное пространство, которое
                  сделает каждое ваше путешествие особенным.
                </p>
              </div>
            </Div2>
            <Div2>
              <div className="text-xl font-medium text-start w-[371px]">
                <p>Багажник объемом до 2144 литров</p>
              </div>
              <div className=" text-[16px] font-normal mt-2 w-[371px]">
                <p>
                  Объем багажника может быть увеличен до 2144 литров при
                  сложенных задних сиденьях. Благодаря простой системе
                  разделения и удобной демонтажной опции, вы можете адаптировать
                  багажник согласно вашим потребностям.
                </p>
              </div>
            </Div2>
            <Div>
              <img src={interior2} alt="" />
            </Div>
          </div>
        </Container2>
      </section>
      <section className=" bg-black">
        <Container1>
          <div className="flex justify-between pt-24">
            <div>
              <p className="text-[44px] font-medium text-white">
                Производительность
              </p>
            </div>
            <div>
              <p className=" text-xl w-[542px] text-white">
                Пора в путь. Большие дистанции. Захватывающее вождение.
              </p>
            </div>
          </div>
        </Container1>
        <Container>
          <div className="text-[#ed8733] text-center text-3xl mt-24">
            <P>Разгон с 0 до 100 км/ч за 3,8 секунды (AWD)</P>
            <P>Пиковая мощность 400 кВт (AWD)</P>
            <P>Максимальная скорость 200 км/ч</P>
            <P className=" border-b-2 border-[#ed8733]">
              Диапазон WLTP 620 км (RWD)
            </P>
          </div>
        </Container>
        <Container1>
          <div className="mt-24">
            <p className="text-[44px] font-medium text-white">
              Совершенно новый опыт в электромобильности.{" "}
            </p>{" "}
          </div>
        </Container1>
        <Container></Container>
      </section>
    </div>
  );
};

export default Zeekr001;

const Container1 = styled.div`
  width: 1100px;
  margin: 0 auto;
`;
const Container2 = styled.div`
  width: 1250px;
  margin: 0 auto;
`;
const Div = styled.div`
  width: 614px;
  margin-bottom: 20px;
`;
const Div2 = styled.div`
  width: 614px;
  background-color: black;
  margin-bottom: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  border-top: 2px solid #ed8733;
  padding: 15px;
`;
