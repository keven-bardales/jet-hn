"use client";

import { createContext, useContext, useState } from "react";
import { NavBar } from "@/components/ui/navbar";
import ContactForm from "@/components/ui/footer";
import Viewer3D from "@/components/ui/landing/viewer";
import { SpecsSection } from "@/components/ui/landing/specs-section";
import { CarSpects } from "@/components/ui/landing/car-specs";
import { CarGallerySection } from "@/components/ui/landing/car-gallery-section";
import { SinglePictureSection } from "@/components/ui/landing/single-picture-section";
import { InformativeGallery } from "@/components/ui/landing/informative-gallery";
import { InformativeCard } from "@/components/ui/landing/informative-card";
import { WideImage } from "@/components/ui/landing/wide-image";
import { VideoPlayer } from "@/components/ui/landing/video-player";
import {
  BenchmarkRow,
  BenchMarkSection,
  CarColorSection,
} from "@/components/ui/landing/benchmarks-section";
import {
  CarBenchmarks,
  CarColor,
} from "@/components/ui/landing/car-benchmarks";
import { HeroSection } from "@/components/ui/landing/hero";
import ColorContext from "@/components/ui/color-context";

export default function LandingPage() {
  const translateCenter = { transform: "translate(-50%, -50%)" };

  const CarPlaceholder = ({ customClass }: { customClass: string }) => {
    return (
      <h1 className={`absolute ${customClass}`} style={translateCenter}>
        🚗
      </h1>
    );
  };

  const primaryColor = "#00a3b4";

  return (
    <>
      <ColorContext.Provider value={primaryColor}>
        <NavBar />
      </ColorContext.Provider>
      <HeroSection
        image="/hero.png"
        title="X70 PLUS"
        subtitle="INNOVACIÓN Y AMPLITUD REDEFINIDAS"
      />

      <BenchMarkSection>
        <CarPlaceholder customClass="top-[49%] left-[50%] text-[25rem]" />
        <CarPlaceholder customClass="text-[18rem] top-[35%] left-[20%]" />
        <CarPlaceholder customClass="text-[18rem] top-[35%] left-[80%]" />

        <BenchmarkRow top={true}>
          <CarBenchmarks title="Caballos de Fuerza Máx." benchMark="197" />
          <CarBenchmarks title="Torque Máximo" benchMark="290" />
          <CarBenchmarks title="Velocidad Máxima (KM/H)" benchMark="180" />
        </BenchmarkRow>

        <BenchmarkRow top={false}>
          <CarBenchmarks title="Distancia entre ejes (MM)" benchMark="275" />
          <CarBenchmarks title="Desplazamiento (ML)" benchMark="1598" />
          <CarBenchmarks
            title="Consumo de combustible (L/100KM)"
            benchMark="7.5"
          />
        </BenchmarkRow>

        <CarColorSection>
          <CarColor customClass="bg-[#304b6f]" />
          <CarColor customClass="bg-[#1d1d1b]" />
          <CarColor customClass="border border-2" />
        </CarColorSection>
      </BenchMarkSection>

      <VideoPlayer video="/video-landing.mp4" />

      <ColorContext.Provider value={primaryColor}>
        <WideImage title="Seguridad ante todos" image="/image1.png" />
      </ColorContext.Provider>

      <ColorContext.Provider value={primaryColor}>
        <WideImage title="TECNOLOGÍA ESPACIAL" image="/image2.png" />
      </ColorContext.Provider>

      <InformativeGallery title="COMODIDAD DESDE DONDE LO VEAS">
        <InformativeCard
          image="/interior1.png"
          text="Modelo Tridimensional Multinivel"
        />

        <InformativeCard
          image="/interior2.png"
          text="Techo Corredizo Panorámico"
        />
        <InformativeCard
          image="/interior3.png"
          text="Distancia entre ejes súper larga"
        />
        <InformativeCard image="/image4.png" text="Ejemplo" />
      </InformativeGallery>

      <SinglePictureSection
        title="SEGURIDAD Y RESPALDO PARA DISFRUTAR EL VIAJE"
        image="/image3.png"
      />

      <CarGallerySection
        images={["/image4.png", "/image5.png", "/image6.png", "/image7.png"]}
      />

      <SpecsSection>
        <ColorContext.Provider value={primaryColor}>
          <CarSpects
            title="Descripción general"
            specs={{ Test: "This is a test" }}
          />
        </ColorContext.Provider>

        <ColorContext.Provider value={primaryColor}>
          <CarSpects
            title="Parámetros básicos"
            specs={{ Test: "This is a test" }}
          />
        </ColorContext.Provider>

        <ColorContext.Provider value={primaryColor}>
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
        </ColorContext.Provider>
        <ColorContext.Provider value={primaryColor}>
          <CarSpects title="Chasis" specs={{ Test: "This is a test" }} />
        </ColorContext.Provider>
        <ColorContext.Provider value={primaryColor}>
          <CarSpects title="Frenos" specs={{ Test: "This is a test" }} />
        </ColorContext.Provider>
      </SpecsSection>

      <Viewer3D />

      <ColorContext.Provider value={primaryColor}>
        <ContactForm />
      </ColorContext.Provider>
    </>
  );
}
