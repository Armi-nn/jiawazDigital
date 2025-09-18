"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import Image from "next/image";
import image from "../../assets/desktop2-scaled.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.css";
export default function BannerSlider() {
  return (
    <>
      <Box
        sx={{
          height: "315px",
          width: "99vw",
        }}
      >
        <Box
          className="custom-prev"
          sx={{
            position: "absolute",
            cursor: "pointer",
            zIndex: 55,
            width: "47px",
            top: "562px",
            right: "20px",
            height: "47px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "15px",
            backdropFilter: "blur(6px)",
            transition: "all 0.1s",
            "&: hover": {
              border: ".5px solid #fff",
            },
          }}
        >
          <KeyboardBackspaceIcon
            sx={{
              fill: "#fff",
              fontSize: "24px",
              backgroundColor: "rgba(0, 0, 0, 0.0)",
              transform: "rotate(180deg)",
            }}
          />
        </Box>
        <Box
          className="custom-next"
          sx={{
            position: "absolute",
            cursor: "pointer",
            zIndex: 55,
            width: "47px",
            top: "562px",
            right: "75px",
            height: "47px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "15px",
            backdropFilter: "blur(6px)",
            transition: "all 0.1s",
            "&: hover": {
              border: ".5px solid #fff",
            },
          }}
        >
          <KeyboardBackspaceIcon
            sx={{
              fill: "#fff",
              fontSize: "24px",
              backgroundColor: "rgba(0, 0, 0, 0.0)",
            }}
          />
        </Box>
        <Swiper
          style={{
            position: "relative",
          }}
          loop={true}
          dir="rtl"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <Image
                fill
                alt="image"
                src={image}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <Image
                fill
                alt="image"
                src={image}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <Image
                fill
                alt="image"
                src={image}
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
