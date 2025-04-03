import { JSX } from "react";
import InstagramIcon from "../assets/icons/instagramIcon";
import WhatsappIcon from "../assets/icons/whatsappIcon";

const Footer = () => {
  const opts = ["Inicio", "Características", "Galería", "Detalles", "Contacto"];
  const socials: {
    name: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    info: string | number;
  }[] = [
    {
      name: "instagram",
      icon: InstagramIcon,
      info: "@maswearmedellin",
    },
    {
      name: "whatsapp",
      icon: WhatsappIcon,
      info: 3216446044,
    },
  ];
  return (
    <footer className="bg-[#273a52] text-white pb-[20px]">
      <img src="/scattering.svg" alt="scaterring" className="w-full h-10" />
      <div className="pt-[50px] flex flex-col sm:flex-row px-10 sm:items-center justify-around">
        <ul className="flex flex-col gap-4 text-base font-extralight">
          {opts &&
            opts.map((opt, i) => (
              <li key={i}>
                <a href={"#" + opt?.toLocaleLowerCase()}>
                  <p>{opt}</p>
                </a>
              </li>
            ))}
        </ul>
        {socials && (
          <div className="flex flex-col gap-6 mt-[30px]">
            {socials.map((social, i) => {
              const sub =
                typeof social?.info === "number"
                  ? social.info
                  : String(social.info)?.slice(1);
              return (
                <a
                  className="font-extralight text-base tracking-widest flex gap-4"
                  href={
                    typeof social?.info === "number"
                      ? `https://wa.me/+57${sub}`
                      : `https://www.instagram.com/${sub}/`
                  }
                  target="_blank"
                  key={i}
                >
                  <social.icon className="w-8 h-8" />
                  <p>{social?.info}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
      <p className="font-extralight text-center px-4 mt-16">
        Copyright © 2025 maswear.com. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
