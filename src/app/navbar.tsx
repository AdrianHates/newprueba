import { AnimatePresence } from "framer-motion";
import InstagramIcon from "../assets/icons/instagramIcon";
import useToggle from "../hooks/useToogle";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import data from "../data/data.json";
import WhatsappIcon from "../assets/icons/whatsappIcon";

interface Props {
  opts: string[];
}
const Navbar = ({ opts }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { isOpen, onToggle } = useToggle();
  const redes: {
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    link: string | number;
  }[] = [
    {
      icon: WhatsappIcon,
      link: +573216446044,
    },
    {
      icon: InstagramIcon,
      link: "@maswearmedellin",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };
    const sections = opts.map((opt) =>
      document.getElementById(opt.toLowerCase())
    );

    sections?.forEach((section) => {
      if (section) {
        const sectionTop = section?.offsetTop - 10;
        const sectionBottom = sectionTop + section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opts, scrollPosition]);

  return (
    <nav
      className={`fixed left-0 z-20 top-0 w-full py-4 flex flex-col  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] ${
        scrollPosition > 50
          ? "lg:bg-[#081F2D]/40 bg-white text-black lg:text-white transition-all lg:backdrop-blur-sm"
          : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center w-full px-10 sm:px-16">
        <a href="#">
          <p className="font-bold uppercase w-[13ch]">🖤 {data?.nombre}</p>
        </a>
        <ul className="hidden lg:flex gap-6 font-extralight">
          {opts &&
            opts.map((opt, i) => (
              <li key={i} className="relative">
                <a
                  href={"#" + opt?.toLocaleLowerCase()}
                  className="font-semibold opacity-0"
                >
                  <p className="capitalize">{opt}</p>
                </a>
                <a
                  href={"#" + opt?.toLocaleLowerCase()}
                  className={`hover:font-semibold absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${
                    activeSection === opt?.toLocaleLowerCase()
                      ? "font-semibold"
                      : ""
                  }`}
                >
                  <p className="capitalize">{opt}</p>
                </a>
              </li>
            ))}
        </ul>
        <ul className="hidden sm:flex gap-4">
          {redes &&
            redes.map((red, i) => {
              const sub =
                typeof red?.link === "number"
                  ? red.link
                  : String(red.link)?.slice(1);
              return (
                <li key={i}>
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    href={
                      typeof red?.link === "number"
                        ? `https://wa.me/+${sub}`
                        : `https://www.instagram.com/${sub}/`
                    }
                  >
                    <red.icon className="w-8 h-8 hover:scale-[0.9] transition-transform duration-300" />
                  </a>
                </li>
              );
            })}
        </ul>
        <button
          className="flex lg:hidden bg-[#273a52] p-1 rounded-sm cursor-pointer"
          onClick={() => {
            onToggle();
          }}
        >
          <img className="w-6 h-6" src="/toogle.svg" alt="toogle" />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="flex lg:hidden flex-col absolute top-[100%] w-full bg-white"
            initial={{ scaleY: 0, opacity: 0, originY: 0 }}
            animate={{ scaleY: 1, opacity: 1, originY: 0 }}
            exit={{ scaleY: 0, opacity: 0, originY: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {opts &&
              opts.map((opt, i) => (
                <li key={i} className="flex">
                  <a
                    onClick={() => {
                      onToggle();
                    }}
                    href={"#" + opt}
                    className={`w-full px-10 sm:px-16 py-4 hover:bg-[#273a52] hover:text-white cursor-pointer ${
                      activeSection === opt?.toLocaleLowerCase()
                        ? "bg-[#273a52] text-white"
                        : ""
                    }`}
                  >
                    <p className="capitalize font-extralight">{opt}</p>
                  </a>
                </li>
              ))}
            <div className="items-center justify-center w-full flex sm:hidden py-4 ">
              <ul className="flex gap-4">
                {redes &&
                  redes.map((red, i) => {
                    const sub =
                      typeof red?.link === "number"
                        ? red.link
                        : String(red.link)?.slice(1);
                    return (
                      <li key={i}>
                        <a
                          className="cursor-pointer"
                          target="_blank"
                          aria-label={
                            typeof red?.link === "number"
                              ? "Visítanos a Whatsapp"
                              : "Visítanos a Instagram"
                          }
                          href={
                            typeof red?.link === "number"
                              ? `https://wa.me/+${sub}`
                              : `https://www.instagram.com/${sub}/`
                          }
                        >
                          <red.icon className="w-8 h-8 hover:scale-[0.9] bg-[#273a52] rounded-[50%] transition-transform duration-300" />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
