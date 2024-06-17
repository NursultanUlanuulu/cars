import xeekrX from "../../public/zeekrX.mp4";

const ZeekrX = () => {
  return (
    <section className="relative h-screen w-full flex justify-center items-center">
      <video
        className="object-cover w-full h-full absolute inset-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={xeekrX} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <div className="absolute z-10 text-center">
        <div className="transition-all duration-800">
          <p className="text-6xl font-medium text-white">ZEEKR X</p>
          <p className="text-6xl font-medium text-white mt-3">
            Стильный, умный, комфортабельный
          </p>
          <p className="text-2xl font-normal text-white mt-6">
            Городской кроссовер, расширяющий горизонты ваших возможностей.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZeekrX;
