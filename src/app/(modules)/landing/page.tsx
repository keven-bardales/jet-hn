"use client";

import { NavBar } from "@/components/ui/navbar";
import Image from "next/image";
import { PlayIcon } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { Form } from "@/components/ui/form";

export default function LandingPage() {
  const translateCenter = { transform: "translate(-50%, -50%)" };

  const CarPlaceholder = ({ customClass }: { customClass: string }) => {
    return (
      <h1 className={`absolute ${customClass}`} style={translateCenter}>
        🚗
      </h1>
    );
  };

  const CarBenchmarks = ({
    title,
    benchMark,
  }: {
    title: string;
    benchMark: string;
  }) => {
    return (
      <div className="flex flex-row items-center gap-2">
        <p className="font-medium">{title}</p>
        <span className="text-5xl text-red-700 font-bold">{benchMark}</span>
      </div>
    );
  };

  const CarColor = ({ customClass }: { customClass: string }) => {
    return <div className={`w-8 h-8 rounded-full ${customClass}`}></div>;
  };

  const CarInteriorCard = ({
    image,
    text,
  }: {
    image: string;
    text: string;
  }) => {
    return (
      <div className="flex flex-col gap-3 justify-center items-center">
        <Image src={image} width={300} height={400} alt="interior" />
        <p className="uppercase font-bold w-60 text-center">{text}</p>
      </div>
    );
  };

  const CarSpects = ({
    title,
    specs,
  }: {
    title: string;
    specs: Record<string, string>;
  }) => {
    const [mouseOver, setMouseOver] = useState(false);
    const [showData, setShowData] = useState(false);

    return (
      <div
        className={clsx(
          "group transition-all flex flex-col w-full px-4 py-6 rounded-2xl",
          mouseOver
            ? "bg-primaryBlue"
            : showData
            ? "bg-primaryBlue"
            : "bg-transparent"
        )}
        onMouseOver={() => {
          setMouseOver(true);
        }}
        onMouseOut={() => {
          setMouseOver(false);
        }}
        onClick={() => {
          setShowData(!showData);
        }}
      >
        <div className="flex flex-row justify-between">
          <p
            className={clsx(
              "transition-all group-hover:text-white text-xl font-bold",
              showData ? "text-white" : "text-black"
            )}
          >
            {title}
          </p>
          <PlayIcon
            style={{
              fill: mouseOver || showData ? "white" : "#00a3b4", // Simplified fill logic
              color: mouseOver || showData ? "white" : "#00a3b4", // Simplified color logic
            }}
            className={clsx(
              "transition transform", // Ensure transition and transform are applied for smooth effect
              mouseOver || showData ? "rotate-90" : "rotate-180", // Apply rotate-90 when either condition is true
              "group-hover:rotate-90"
            )}
          />
        </div>

        <div
          className={clsx(
            "overflow-hidden transition-max-height duration-300 ease-in-out",
            showData ? "max-h-screen" : "max-h-0"
          )}
        >
          <table className="w-full table-auto">
            <tbody>
              {Object.entries(specs).map(([keyframes, value], index) => (
                <tr key={index} className="text-white font-bold text-lg">
                  <td className="w-[50%] p-1">{keyframes}</td>
                  <td className="w-[50%] p-1">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <section
        className="relative h-screen w-full bg-cover bg-no-repeat bg-red-500"
        style={{
          backgroundImage: `url("/hero.png")`,
        }}
      >
        <div className="absolute top-[65%] left-[10%] font-bold text-white">
          <h1 className="text-[5.1rem] font-st">X70 PLUS</h1>
          <h2 className="text-3xl">
            INNOVACIÓN Y AMPLITUD <br />
            REDEFINIDAS
          </h2>
        </div>
      </section>
      <section className="h-screen w-full relative uppercase">
        <CarPlaceholder customClass="top-[49%] left-[50%] text-[25rem]" />
        <CarPlaceholder customClass="text-[18rem] top-[35%] left-[20%]" />
        <CarPlaceholder customClass="text-[18rem] top-[35%] left-[80%]" />

        <div className="w-full flex flex-row justify-around text-xl absolute top-28">
          <CarBenchmarks title="Caballos de Fuerza Máx." benchMark="197" />
          <CarBenchmarks title="Torque Máximo" benchMark="290" />
          <CarBenchmarks title="Velocidad Máxima (KM/H)" benchMark="180" />
        </div>

        <div className="w-full flex flex-row justify-around text-lg absolute bottom-5">
          <CarBenchmarks title="Distancia entre ejes (MM)" benchMark="275" />
          <CarBenchmarks title="Desplazamiento (ML)" benchMark="1598" />
          <CarBenchmarks
            title="Consumo de combustible (L/100KM)"
            benchMark="7.5"
          />
        </div>

        <div
          className="flex flex-row gap-5 w-40 absolute left-[53%] top-[85%]"
          style={translateCenter}
        >
          <CarColor customClass="bg-[#304b6f]" />
          <CarColor customClass="bg-[#1d1d1b]" />
          <CarColor customClass="border border-2" />
        </div>
      </section>

      <section className="h-screen w-full flex justify-center items-center">
        <video
          src="/video-landing.mp4"
          typeof="video/mp4"
          controls
          className="w-[70%] h-[70%] mt-20"
        ></video>
      </section>

      <section className="relative h-screen w-full flex flex-col justify-center items-center">
        <figure className="relative w-[95%] h-[80%] mt-20">
          <Image
            className=" w-full h-full"
            src="/image1.png"
            width={200}
            height={200}
            alt="Car"
          />
          <h1 className="absolute text-primaryBlue top-[-25px] left-0 font-bold uppercase">
            Seguridad ante todos
          </h1>
        </figure>
      </section>

      <section className="relative h-screen w-full flex flex-col justify-center items-center">
        <figure className="relative w-[95%] h-[80%] mt-20">
          <Image
            className=" w-full h-full"
            src="/image2.png"
            width={200}
            height={200}
            alt="Car"
          />
          <h1 className="absolute text-primaryBlue top-[-25px] left-0 font-bold uppercase">
            TECNOLOGÍA ESPACIAL
          </h1>
        </figure>
      </section>

      <section className="relative h-screen w-full flex flex-col justify-start py-28 items-center">
        <h1 className="font-bold text-4xl">COMODIDAD DESDE DONDE LO VEAS</h1>
        <figure className="mt-5 flex flex-row gap-2">
          <CarInteriorCard
            image="/interior1.png"
            text="Modelo Tridimensional Multinivel"
          />
          <CarInteriorCard
            image="/interior2.png"
            text="Techo Corredizo Panorámico"
          />
          <CarInteriorCard
            image="/interior3.png"
            text="Distancia entre ejes súper larga"
          />
        </figure>
      </section>

      <section className="relative h-screen w-full flex flex-col justify-start py-28 items-center">
        <h1 className="font-bold text-5xl">
          SEGURIDAD Y RESPALDO PARA DISFRUTAR EL VIAJE
        </h1>
        <Image
          className=" w-[60%] h-full mt-5"
          src="/image3.png"
          width={200}
          height={200}
          alt="Car"
        />
      </section>

      <section className="relative h-screen w-full flex justify-center items-center px-[8rem] pb-12 pt-28 ">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
          <Image
            src={"/image4.png"}
            width={200}
            height={200}
            className="w-full h-full"
            alt="Exterior 1"
          />
          <Image
            src={"/image5.png"}
            width={200}
            height={200}
            className="w-full h-full"
            alt="Exterior 2"
          />
          <Image
            src={"/image6.png"}
            width={200}
            height={200}
            className="w-full h-full"
            alt="Exterior 3"
          />
          <Image
            src={"/image7.png"}
            width={200}
            height={200}
            className="w-full h-full"
            alt="Exterior 4"
          />
        </div>
      </section>

      <section className="min-h-screen w-full flex flex-col justify-center items-center px-[8rem] pb-12 pt-28 ">
        <h1 className="font-bold text-4xl mb-16">ESPECIFICACIONES</h1>
        <div className="w-full flex flex-col gap-2">
          <CarSpects
            title="Descripción general"
            specs={{ Test: "This is a test" }}
          />
          <CarSpects
            title="Parámetros básicos"
            specs={{ Test: "This is a test" }}
          />
          <CarSpects
            title="Motor"
            specs={{
              Tipo: "1.6TGDI",
              "Desplazamiento (ml)": "1598",
              "Tipo de aspiración": "Turbo cargado",
              "Disposición del clinidro": "L",
              "Número de cilindros (piezas)": "4",
              "Número de válvulas por cilindro": "4",
              "Relación de compresión": "9.9",
              "Mecanismo elevación de válvulas": "DVVT",
              "diámetro del cilindro (mm)": "77",
              "Trazo (mm)": "85.8",
              "Potencia máxima (HP)": "197",
              "Potencia máxima (kW)": "145",
              "Velocidad máxima de potencia (RPM)": "5500",
              "Torque máximo (N•m)": "290",
              "Torque máxima velocidad (RPM)": "2000-4000",
            }}
          />
          <CarSpects title="Chasis" specs={{ Test: "This is a test" }} />
          <CarSpects title="Frenos" specs={{ Test: "This is a test" }} />
        </div>
      </section>

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
    </>
  );
}
