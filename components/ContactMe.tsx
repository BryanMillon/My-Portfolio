import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import { useRouter } from 'next/router';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo:PageInfo;
};

export default function ContactMe({pageInfo}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = formData => window.location.href = `mailto:bryanmillon31@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;

  // const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  const router = useRouter();

  const handleClick = () => {
    router.push('https://walink.co/581e3b');
  };

  
  const handleClick2 = () => {
    router.push('mailto: bryanmillon31@gmail.com');
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 height-800:top-20 uppercase tracking-[20px] text-gray-500 text-xl mobile-xl:text-2xl ">
        Contact
      </h3>

      <div className=" max-h-72 overflow-scroll mobile-m:max-h-[420px] mobile-l:max-h-full mobile-l:overflow-hidden flex flex-col space-y-3 height-800:space-y-5  height-1000:space-y-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 pr-3 ">
        <h4 className="text-2xl  mobile-xl:text-3xl sm:text-4xl font-semibold text-center ">
          If you want to work with me.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let&apos;s Talk</span>{" "}
        </h4>

        <div className=" space-y-3 height-800:space-y-5 height-1000:space-y-10">
          <div onClick={handleClick2} className=" cursor-pointer flex items-center space-x-3 justify-center hover:text-[#F7AB0A]">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="mobile-xl:text-xl sm:text-2xl ">
              {pageInfo.email}
            </p>
          </div>

          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="mobile-xl:text-xl sm:text-2xl ">
              {pageInfo.address}
            </p>
          </div>
        </div>
        
        <div onClick={handleClick} className="cursor-pointer flex items-center space-x-3  justify-center hover:text-[#F7AB0A]">
          <PhoneIcon  className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className=" mobile-xl:text-xl sm:text-2xl ">{pageInfo.phoneNumber}</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 md:space-x-2 md:flex-row md:space-y-0">
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
            className="bg-[#F7AB0A] py-3 mobile-xl:py-5 px-10 rounded-md text-black font-bold " 
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
