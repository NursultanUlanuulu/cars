import monjaro from "../../public/monjaro.mp4";

export default function Monjaro() {
  return (
    <section className="relative h-screen w-full flex justify-center items-center">
      <video
        className="object-cover w-full h-full absolute inset-0"
        poster="https://officewebsite-prod-blob-cn.azureedge.net/assets-em/images/poster-model-001.png"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={monjaro} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <div className="absolute z-10 text-center">
        <div className="transition-all duration-800">
          <p className="text-6xl font-medium text-white">Monjaro </p>
          <p className="text-6xl font-medium text-white mt-3">
            Полноразмерный 6-местный
          </p>
          <p className="text-2xl font-normal text-white mt-6">
            флагманский внедорожник
          </p>
        </div>
      </div>
    </section>
  );
}
