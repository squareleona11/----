import React from 'react';

interface Props {
  className?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const StarIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const CloseIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px"
    height="24px"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

export const WardIcon = (props: Props) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <polygon
        id="path-1"
        points="1.0038909e-20 0.0317565217 1.0038909e-20 4.18375652 4.15675767 4.18375652 4.15675767 0.0317565217 0 0.0317565217"
      ></polygon>
      <polygon
        id="path-3"
        points="0.144825655 5.2173913 3.07058175 5.2173913 3.07058175 0.0446956522 0.144825655 0.0446956522"
      ></polygon>
    </defs>
    <g
      id="2_4_Summoner_NewTier_2018FS"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Summoner_Detail_fronttest"
        transform="translate(-890.000000, -561.000000)"
      >
        <g id="Group-22" transform="translate(489.000000, 493.000000)">
          <g id="icon_ward_red" transform="translate(401.000000, 68.000000)">
            <rect
              id="Rectangle-50-Copy-9"
              fill="currentColor"
              x="0"
              y="0"
              width="16"
              height="16"
              rx="8"
            ></rect>
            <g id="Page-1" transform="translate(3.000000, 4.500000)">
              <polygon
                id="Fill-1"
                fill="#FFFFFF"
                points="5.44366667 6.95652175e-05 4.94107407 0.00111304348 4.43848148 6.95652175e-05 3.25440741 1.4125913 4.03366667 2.13328696 4.93255556 2.13328696 4.94885185 2.13328696 5.84848148 2.13328696 6.62774074 1.4125913"
              ></polygon>
              <polygon
                id="Fill-2"
                fill="#FFFFFF"
                points="5.84488889 2.30570435 4.9497037 2.30570435 4.93266667 2.30570435 4.03674074 2.30570435 3.88488889 2.59857391 4.27377778 2.7864 4.93266667 2.7864 4.9497037 2.7864 5.60822222 2.7864 5.99711111 2.59857391"
              ></polygon>
              <g id="Group-11" transform="translate(0.000000, 1.162365)">
                <g id="Group-5">
                  <mask id="mask-2" fill="white">
                    <use href="#path-1"></use>
                  </mask>
                  <g id="Clip-4"></g>
                  <path
                    d="M4.00066667,3.41645217 C4.04140741,3.40984348 4.07992593,3.40497391 4.11733333,3.39975652 C4.15992593,3.02966957 4.16325926,2.63001739 4.14955556,2.26236522 C3.82955556,2.12253913 3.42844444,1.8328 3.05548148,1.23453913 C3.05548148,1.23453913 2.06251852,1.77366957 0.0543703704,0.0317565217 L-7.40740743e-05,1.05332174 C-7.40740743e-05,1.05332174 0.0854814815,2.6074087 1.40437037,3.39523478 C2.60140741,4.11106087 2.92807407,4.18375652 2.92807407,4.18375652 C2.92807407,4.18375652 2.92807407,3.58410435 4.00066667,3.41645217"
                    id="Fill-3"
                    fill="#FFFFFF"
                    mask="url(#mask-2)"
                  ></path>
                </g>
                <path
                  d="M9.82785185,0.0315826087 C7.8197037,1.77384348 6.82637037,1.23436522 6.82637037,1.23436522 C6.45377778,1.83262609 6.05266667,2.12271304 5.7322963,2.2621913 C5.71859259,2.6301913 5.7222963,3.02949565 5.76451852,3.39993043 C5.8022963,3.4048 5.84044444,3.41001739 5.88155556,3.41627826 C6.95377778,3.58427826 6.95377778,4.18393043 6.95377778,4.18393043 C6.95377778,4.18393043 7.28044444,4.11123478 8.47785185,3.3954087 C9.79674074,2.60723478 9.88192593,1.05349565 9.88192593,1.05349565 L9.82785185,0.0315826087 Z"
                  id="Fill-6"
                  fill="#FFFFFF"
                ></path>
                <g id="Group-10" transform="translate(3.333333, 1.391304)">
                  <mask id="mask-4" fill="white">
                    <use href="#path-3"></use>
                  </mask>
                  <g id="Clip-9"></g>
                  <path
                    d="M2.28696296,2.25373913 C2.14288889,1.348 2.33992593,0.120173913 2.33992593,0.120173913 L1.61585185,0.0464347826 L1.61585185,0.0446956522 L1.6077037,0.0453913043 L1.59955556,0.0446956522 L1.59955556,0.0464347826 L0.875481481,0.120173913 C0.875481481,0.120173913 1.07251852,1.348 0.928444444,2.25373913 C0.78437037,3.15947826 0.129185185,4.40782609 0.145111111,4.75078261 C0.161037037,5.09408696 0.320666667,5.21756522 0.320666667,5.21756522 L1.59955556,5.21756522 L1.61585185,5.21756522 L2.89474074,5.21756522 C2.89474074,5.21756522 3.05437037,5.09408696 3.0702963,4.75078261 C3.08622222,4.40782609 2.43103704,3.15947826 2.28696296,2.25373913"
                    id="Fill-8"
                    fill="#FFFFFF"
                    mask="url(#mask-4)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const BuildIcon = (props: Props) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="2_4_Summoner_NewTier_2018FS"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Summoner_Detail_fronttest"
        transform="translate(-890.000000, -561.000000)"
        fill="currentColor"
      >
        <g id="Group-22" transform="translate(489.000000, 493.000000)">
          <g id="icon_ward_red" transform="translate(401.000000, 68.000000)">
            <rect
              id="Rectangle-50-Copy-9"
              x="0"
              y="0"
              width="16"
              height="16"
              rx="8"
            ></rect>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const ExpandMoreIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="18px"
    height="18px"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);
