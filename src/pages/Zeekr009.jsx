import xeekr009 from "../../public/zeekr009.mp4";

const Zeekr009 = () => {
  return (
    <section className="relative h-screen w-full flex justify-center items-center">
      <video
        className="object-cover w-full h-full absolute inset-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={xeekr009} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <div className="absolute z-10 text-center">
        <div className="transition-all duration-800">
          <p className="text-6xl font-medium text-white">ZEEKR 009</p>
          <p className="text-3xl font-normal text-white mt-6">
            Первый в мире MPV электромобиль класса Luxe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Zeekr009;
