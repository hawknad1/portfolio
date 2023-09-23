import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dankwahthom@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen bg-white flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 py-4 md:py-0 mt-56 md:mt-0">
        <h4 className="text-4xl font-semibold text-center">Lets Talk!</h4>

        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center md:justify-start">
            <PhoneIcon className="h-7 w-7 animate-pulse" />
            <p className="text-2xl  text-gray-500">+233 548 332 803</p>
          </div>

          <div className="flex items-center space-x-5 justify-center md:justify-start">
            <EnvelopeIcon className="h-7 w-7 animate-pulse" />
            <p className="text-2xl  text-gray-500">dankwahthom@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center md:justify-start">
            <MapPinIcon className="h-7 w-7 animate-pulse" />
            <p className="text-2xl uppercase text-gray-500">
              14 Eagle Ray Street, Sakumono
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto "
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            placeholder="Name"
            type="text"
            className="contactInput"
          />
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            className="contactInput"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          type="text"
          className="contactInput"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#181D31] py-5 px-10 rounded-md text-white uppercase font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
