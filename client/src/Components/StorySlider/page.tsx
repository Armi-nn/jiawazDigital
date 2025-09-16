"use client";
// import Image from "next/image";
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/pagination";

// // import required modules
// import { EffectCube, Pagination } from "swiper/modules";
// import { Box } from "@mui/material";

// export default function StorySlider() {
//   return (
//     <>
//     <Box sx={{width:"300px" , height:"300px", position:"relative"}}>
//       <Swiper
//         effect={"cube"}
//         grabCursor={true}
//         cubeEffect={{
//           shadow: true,
//           slideShadows: true,
//           shadowOffset: 20,
//           shadowScale: 0.94,
//         }}
//         modules={[EffectCube]}
//         className="mySwiper w-full h-full"
//       >
//         <SwiperSlide className="relative w-full     -full">
//           <Image
//             alt="nature 1"
//             fill
//             src={"https://swiperjs.com/demos/images/nature-1.jpg"}
//             style={{ objectFit: "cover" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             alt="nature 1"
//             fill
//             src={"https://swiperjs.com/demos/images/nature-2.jpg"}
//             style={{ objectFit: "cover" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             alt="nature 1"
//             fill
//             src={"https://swiperjs.com/demos/images/nature-3.jpg"}
//             style={{ objectFit: "cover" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             alt="nature 1"
//             fill
//             src={"https://swiperjs.com/demos/images/nature-4.jpg"}
//             style={{ objectFit: "cover" }}
//           />
//         </SwiperSlide>
//       </Swiper>
//     </Box>
//     </>
//   );
// }

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from "@/assets/462332218_855592660036309_765021.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function StorySlider() {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  return (
    <>
      <Box
        sx={{
          width: "88vw",
          display: "flex",
          justifyContent: "center",
          maxWidth: "88vw",
          mx: "auto ",
          mt: "25px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            direction: "rtl",
            height: { xs: "200px", md: "300px" },
            maxWidth: "88vw",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                width: "100px",
                height: "100%",
                background: atEnd
                  ? "none"
                  : "linear-gradient(to right, #fffdf5, rgba(255,255,255,0.3))",
                pointerEvents: "none",
                zIndex: 2,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                right: 0,
                top: 0,
                width: "100px",
                height: "100%",
                background: atEnd
                  ? "linear-gradient(to left, #fffdf5, rgba(255,255,255,0.3))"
                  : "none",
                pointerEvents: "none",
                zIndex: 2,
              },
            }}
          >
            <Swiper
              dir="rtl"
              slidesPerView={11.7}
              spaceBetween={20}
              modules={[FreeMode]}
              className=" w-full h-full "
              onSlideChange={(swiper) => {
                setAtStart(swiper.isBeginning);
                setAtEnd(swiper.isEnd);
              }}
            >
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
              <SwiperSlide style={{ cursor: "pointer" }} className="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Image
                      width={"69"}
                      height={"100"}
                      alt="image"
                      src={image}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        outline: "3px solid #8a3ab9",
                        outlineOffset: "3.5px",
                      }}
                    />
                  </Box>
                  <Typography sx={{ alignItems: "center", fontSize: "12px" }}>
                    حرفه ای گیم بزن
                  </Typography>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
}
