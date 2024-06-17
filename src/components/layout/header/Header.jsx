import { Container, Li } from "../../../style/style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PATH, carTitle } from "../../../utils/constants/constants";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../../assets/panda.svg";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import styled from "styled-components";
import PhoneNumberInput from "../../UI/PhoneNumberInput";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-white fixed z-10 w-full">
      <Container>
        <header className="flex justify-between items-center  ">
          <div>
            <Link to={PATH.main_page}>
              <img src={logo} width={200} />
            </Link>
          </div>
          <nav>
            <ul className="flex justify-between">
              <li
                className="m-[30px] text-[#424551] text-base font-bold  list-none relative w-[120px] cursor-pointer "
                onClick={toggleSubMenu}
              >
                Модели <ArrowDropDownIcon />
                {showSubMenu && (
                  <ul
                    className="absolute left-0 top-full p-0  bg-white shadow-md rounded-md  "
                    style={{ zIndex: "10000" }}
                  >
                    {carTitle.map((el) => (
                      <Link to={el.path} key={el.id}>
                        <li className="py-2 px-4 border-b-2	">{el.title} </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
              <Li className="m-[30px]">
                <Link>Автомобили в наличии</Link>
              </Li>
              <Li className="m-[30px]">
                <Link to={PATH.garantee}>Гарантия</Link>
              </Li>
              <Li className="m-[30px]">
                <Link href="#">Контакты</Link>
              </Li>
            </ul>
          </nav>
          <button
            className="border-2 border-black p-2 text-[#000000] text-base font-semibold
          "
            onClick={openModal}
          >
            оставить заявку
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            className=" rounded-xl bg-[#373636] p-1"
          >
            <CloseIcon
              className=" ml-[370px] mt-1 text-white"
              onClick={closeModal}
            />
            <div className=" p-2">
              <p className="text-white uppercase text-center text-3xl font-bold mb-2">
                Заявка
              </p>
              <form>
                <div>
                  <Input type="text" placeholder="Ваше имя" required />
                </div>
                <div>
                  <Input type="text" placeholder="Ваш город " required />
                </div>
                <div className=" mb-[10px]">
                  <PhoneNumberInput />
                </div>
                <div>
                  <textarea
                    rows="3"
                    placeholder="Ваш коментарий"
                    className="w-full outline-none p-4 rounded-l"
                    required
                  ></textarea>
                </div>
                <div className="text-center ">
                  <Button
                    className="bg-white text-black w-full uppercase font-bold p-3  rounded-l"
                    type="submit"
                  >
                    отправить завку
                  </Button>
                </div>
              </form>
            </div>
          </Modal>
          <select name="" id="">
            <option value="">en</option>
            <option value="">ch</option>
          </select>
          <button>
            <LoginIcon />
            LogIn
          </button>
        </header>
      </Container>
    </div>
  );
};

export default Header;

const Input = styled.input`
  padding: 16px 0;
  width: 100%;
  border-radius: 6px;
  color: black;
  margin-bottom: 10px;
  outline: none;
  padding: 13px;
`;
