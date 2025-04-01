import React from "react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 152 152"
      enableBackground="new 0 0 512 512"
      xmlSpace="preserve"
      className=""
      {...props}
    >
      <g>
        <linearGradient
          id="a"
          x1="22.26"
          x2="129.74"
          y1="22.26"
          y2="129.74"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fae100" />
          <stop offset=".15" stopColor="#fcb720" />
          <stop offset=".3" stopColor="#ff7950" />
          <stop offset=".5" stopColor="#ff1c74" />
          <stop offset="1" stopColor="#6c1cd1" />
        </linearGradient>
        <g data-name="Layer 2">
          <g data-name="03.Instagram">
            <rect
              width="152"
              height="152"
              fill="url(#a)"
              rx="76"
              opacity="1"
              data-original="url(#a)"
              className=""
            />
            <g fill="#fff">
              <path
                d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z"
                opacity="0.06274509803921569"
                fill="#ffffff"
                data-original="#ffffff10"
                className=""
              />
              <path
                d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z"
                fill="#ffffff"
                opacity="1"
                data-original="#ffffff"
                className=""
              />
              <path
                d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zM102.43 54.38a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z"
                fill="#ffffff"
                opacity="1"
                data-original="#ffffff"
                className=""
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default InstagramIcon;
