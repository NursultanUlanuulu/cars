import { useEffect, useState } from "react";
import openImg from "../../../../public/ContactPopup/panda.png";
import closeImg from "../../../../public/ContactPopup/panda2.png";
import whats from "../../../../public/ContactPopup/ws.png";
import tg from "../../../../public/ContactPopup/tg.webp";
import ph from "../../../../public/ContactPopup/ph.png";
import x from "../../../../public/ContactPopup/x.png";
import styled from "styled-components";

export default function ContactPopup() {
  const [showContacts, setShowContacts] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [imageSrc, setImageSrc] = useState(openImg);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  const toggleContacts = () => {
    setShowContacts(!showContacts);
    setImageSrc(showContacts ? openImg : closeImg);
  };

  return (
    showComponent && (
      <div className={`fixed top-[35rem] right-16 z-50 cursor-pointer`}>
        {showContacts && (
          <div className="flex flex-col mb-2 absolute bottom-16 left-2">
            <img src={x} alt="WhatsApp" width={50} onClick={toggleContacts} />
            <A
              href="https://wa.me/0502102270"
              target="_blank"
              rel="noopener noreferrer"

            >
              <img src={whats} alt="WhatsApp" width={50} />
            </A>
            <A
              href="https://t.me/Nur6ultan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tg} alt="Telegram" width={50} />
            </A>
            <A href="tel:+996502102270">
              <img src={ph} alt="Phone" width={50} />
            </A>
          </div>
        )}
        <img
          src={imageSrc}
          alt="Smiley"
          className="visible w-[70px]"
          onClick={toggleContacts}
        />
      </div>
    )
  );
}

const A = styled.a`
    margin: 3px 0;
`