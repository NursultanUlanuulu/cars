import lixiangLi7 from "../../public/lixiangLi7.mp4";

export default function LixiangLi7() {
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
        <source src={lixiangLi7} type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <div className="absolute z-10 text-center">
        <div className="transition-all duration-800">
          <p className="text-6xl font-medium text-white">Lixiang Li7</p>
          <p className="text-6xl font-medium text-white mt-3">
            Флагманский 5-местный
          </p>
          <p className="text-2xl font-normal text-white mt-6">
            семейный внедорожник
          </p>
        </div>
      </div>
    </section>
  );
}
