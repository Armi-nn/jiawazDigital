"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "@/assets/462332218_855592660036309_765021.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { FreeMode, EffectCube, Autoplay, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ClearIcon from "@mui/icons-material/Clear";
import "./styles.css";
export default function StorySlider() {
  const [atEnd, setAtEnd] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  function ModalSlider() {
    const sliderRef = useRef<HTMLDivElement>();
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);
    const handleClickOutside = (event: MouseEvent<Document>) => {
      if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, []);
    const handleSlideChange = () => {
      if (!swiperRef.current) return;
      setIsStart(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    };

    return (
      <>
        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            mr: "15px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "335px",
              height: "600px",
              position: "absolute",
              zIndex: "5",
              top: "70px",
            }}
          >
            {!isEnd && (
              <Box
                onClick={() => swiperRef.current?.slideNext()}
                className="custom-next"
                sx={{
                  position: "absolute",
                  cursor: "pointer",
                  zIndex: 55,
                  top: "275px",
                  width: "47px",
                  height: "47px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.15)",
                  borderRadius: "15px",
                  backdropFilter: "blur(6px)",
                  left: "-72px",
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
            )}
            {!isStart && (
              <Box
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{
                  position: "absolute",
                  cursor: "pointer",
                  zIndex: 55,
                  top: "275px",
                  width: "47px",
                  height: "47px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "15px",
                  backdropFilter: "blur(6px)",
                  left: "360px",
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
            )}
            <Box
              onClick={() => {
                setShowModal(false);
              }}
              sx={{
                position: "absolute",
                cursor: "pointer",
                zIndex: 55,
                top: "10px",
                width: "47px",
                height: "47px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.0)",
                transition: "all .5s",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                },
                borderRadius: "15px",
                backdropFilter: "blur(6px)",
                right: "10px",
              }}
            >
              <ClearIcon
                sx={{
                  fill: "#fff",
                  fontSize: "24px",
                  backgroundColor: "rgba(0, 0, 0, 0.0)",
                  transform: "rotate(180deg)",
                }}
              />
            </Box>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ اضافه شد: ذخیره Swiper در ref
              onSlideChange={handleSlideChange}
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(6px)",
                position: "absolute",
              }}
              dir="rtl"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: false,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              modules={[EffectCube, Autoplay, Navigation]}
              className="mySwiper w-full h-full"
            >
              <SwiperSlide>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "15px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Image
                    alt="nature 1"
                    fill
                    src={"https://swiperjs.com/demos/images/nature-1.jpg"}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "15px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Image
                    alt="nature 1"
                    fill
                    src={"https://swiperjs.com/demos/images/nature-2.jpg"}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "15px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Image
                    alt="nature 1"
                    fill
                    src={"https://swiperjs.com/demos/images/nature-3.jpg"}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "15px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Image
                    alt="nature 1"
                    fill
                    src={"https://swiperjs.com/demos/images/nature-4.jpg"}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </>
    );
  }
  return (
    <>
      {showModal && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(6px)",
            zIndex: 10,
          }}
        >
          <ModalSlider />
        </Box>
      )}

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
            height: "155px",
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
                setAtEnd(swiper.isEnd);
              }}
            >
              <SwiperSlide
                onClick={() => {
                  setShowModal(true);
                }}
                style={{ cursor: "pointer" }}
                className="relative"
              >
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
