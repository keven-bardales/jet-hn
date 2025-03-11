import { useForm } from "react-hook-form";
import { Form } from "../form";

export default function Footer() {
  // const { control, handleSubmit, formState: { errors } } = useForm
  return (
    <section
      className="relative h-screen w-full bg-cover bg-no-repeat bg-red-500"
      style={{
        backgroundImage: `url("/Footer.png")`,
      }}
    >
      <div className="absolute right-12 top-32 w-[22rem]">
        <h1 className="text-5xl font-bold text-white">
          SOLICITA TU COTIZACIÓN
        </h1>
        {/* <Form></Form> */}
      </div>
    </section>
  );
}
