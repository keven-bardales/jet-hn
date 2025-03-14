import Image from "next/image";

export default function Viewer3D() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-start py-28 items-center">
      <h1 className="font-bold text-5xl">VISUALIZADOR 3D</h1>
      <Image
        className=" w-[60%] h-full mt-5"
        src="/visualizador.png"
        width={200}
        height={200}
        alt="Car"
      />
    </section>
  );
}
