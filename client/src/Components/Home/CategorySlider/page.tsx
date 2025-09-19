"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "@/assets/ChatGPT Image Sep 18, 2025, 01_53_21 PM.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { FreeMode } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function CategorySlider() {
  const [atEnd, setAtEnd] = useState<boolean>(false);
  return (
    <>
      <Box
        sx={{
          width: "88vw",
          display: "flex",
          justifyContent: "center",
          maxWidth: "88vw",
          mx: "auto ",
          mt: "50px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            direction: "rtl",
            height: "250px",
            maxWidth: "88vw",
            mt: "20px",
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
              style={{
                backgroundColor: "#fffdf5",
                height:"250px"
              }}
              dir="rtl"
              slidesPerView={6.5}
              spaceBetween={20}
              modules={[FreeMode]}
              className=" w-full h-full custom-swiper"
              onSlideChange={(swiper) => {
                setAtEnd(swiper.isEnd);
              }}
            >
              <SwiperSlide
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="relative swiper-slide-custom "
              >
                <Box
                  className="inner-box"
                  sx={{
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "#FCEED2",
                      transition: "all .3s ease",
                      "&:hover": {
                        backgroundColor: "#F9E6BB",
                      },
                      "&:hover > .imgBox": {
                        top: "-50px ",
                      },
                      "&:hover .iconBox": {
                        opacity:"1",
                        mr:"90px"
                      },
                      borderRadius: "100px 100px 15px 15px",
                      mt: "45px",
                      position: "relative",
                      width: "188px",
                      height: "155px",
                      mr: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      className="imgBox"
                      sx={{
                        padding: "10px",
                        backgroundColor: "transparent !important",
                        position: "absolute",
                        top: "-45px",
                        pointerEvents: "none",
                        transition: "all 0.3s ease ",
                        width: "100px",
                        height: "130px",
                      }}
                    >
                      <Image
                        fill
                        alt="image"
                        src={image}
                        style={{
                          objectFit: "cover",
                          backgroundColor: "transparent ",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        alignItems: "center",
                        backgroundColor: "transparent ",
                        fontWeight: "700 !important",
                        position: "absolute",
                        top: "90px",
                      }}
                    >
                      گیمینگ
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent ",
                        top: "115px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "transparent ",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          6
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          محصول
                        </Typography>
                      </Box>
                      <Box className="iconBox"
                        sx={{
                          backgroundColor: "transparent ",
                          position: "absolute",
                          mr: "100px",
                          opacity:"0",
                          transition:"all 0.3s ease"
                        }}
                      >
                        <KeyboardBackspaceIcon
                          sx={{
                            backgroundColor: "transparent ",
                            fontSize: "20px",
                            fill: "#EFA71A",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="relative swiper-slide-custom "
              >
                <Box
                  className="inner-box"
                  sx={{
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "#FCEED2",
                      transition: "all .3s ease",
                      "&:hover": {
                        backgroundColor: "#F9E6BB",
                      },
                      "&:hover > .imgBox": {
                        top: "-50px ",
                      },
                      "&:hover .iconBox": {
                        opacity:"1",
                        mr:"90px"
                      },
                      borderRadius: "100px 100px 15px 15px",
                      mt: "45px",
                      position: "relative",
                      width: "188px",
                      height: "155px",
                      mr: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      className="imgBox"
                      sx={{
                        padding: "10px",
                        backgroundColor: "transparent !important",
                        position: "absolute",
                        top: "-45px",
                        pointerEvents: "none",
                        transition: "all 0.3s ease ",
                        width: "100px",
                        height: "130px",
                      }}
                    >
                      <Image
                        fill
                        alt="image"
                        src={image}
                        style={{
                          objectFit: "cover",
                          backgroundColor: "transparent ",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        alignItems: "center",
                        backgroundColor: "transparent ",
                        fontWeight: "700 !important",
                        position: "absolute",
                        top: "90px",
                      }}
                    >
                      گیمینگ
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent ",
                        top: "115px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "transparent ",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          6
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          محصول
                        </Typography>
                      </Box>
                      <Box className="iconBox"
                        sx={{
                          backgroundColor: "transparent ",
                          position: "absolute",
                          mr: "100px",
                          opacity:"0",
                          transition:"all 0.3s ease"
                        }}
                      >
                        <KeyboardBackspaceIcon
                          sx={{
                            backgroundColor: "transparent ",
                            fontSize: "20px",
                            fill: "#EFA71A",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="relative swiper-slide-custom "
              >
                <Box
                  className="inner-box"
                  sx={{
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "#FCEED2",
                      transition: "all .3s ease",
                      "&:hover": {
                        backgroundColor: "#F9E6BB",
                      },
                      "&:hover > .imgBox": {
                        top: "-50px ",
                      },
                      "&:hover .iconBox": {
                        opacity:"1",
                        mr:"90px"
                      },
                      borderRadius: "100px 100px 15px 15px",
                      mt: "45px",
                      position: "relative",
                      width: "188px",
                      height: "155px",
                      mr: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      className="imgBox"
                      sx={{
                        padding: "10px",
                        backgroundColor: "transparent !important",
                        position: "absolute",
                        top: "-45px",
                        pointerEvents: "none",
                        transition: "all 0.3s ease ",
                        width: "100px",
                        height: "130px",
                      }}
                    >
                      <Image
                        fill
                        alt="image"
                        src={image}
                        style={{
                          objectFit: "cover",
                          backgroundColor: "transparent ",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        alignItems: "center",
                        backgroundColor: "transparent ",
                        fontWeight: "700 !important",
                        position: "absolute",
                        top: "90px",
                      }}
                    >
                      گیمینگ
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent ",
                        top: "115px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "transparent ",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          6
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          محصول
                        </Typography>
                      </Box>
                      <Box className="iconBox"
                        sx={{
                          backgroundColor: "transparent ",
                          position: "absolute",
                          mr: "100px",
                          opacity:"0",
                          transition:"all 0.3s ease"
                        }}
                      >
                        <KeyboardBackspaceIcon
                          sx={{
                            backgroundColor: "transparent ",
                            fontSize: "20px",
                            fill: "#EFA71A",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="relative swiper-slide-custom "
              >
                <Box
                  className="inner-box"
                  sx={{
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "#FCEED2",
                      transition: "all .3s ease",
                      "&:hover": {
                        backgroundColor: "#F9E6BB",
                      },
                      "&:hover > .imgBox": {
                        top: "-50px ",
                      },
                      "&:hover .iconBox": {
                        opacity:"1",
                        mr:"90px"
                      },
                      borderRadius: "100px 100px 15px 15px",
                      mt: "45px",
                      position: "relative",
                      width: "188px",
                      height: "155px",
                      mr: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      className="imgBox"
                      sx={{
                        padding: "10px",
                        backgroundColor: "transparent !important",
                        position: "absolute",
                        top: "-45px",
                        pointerEvents: "none",
                        transition: "all 0.3s ease ",
                        width: "100px",
                        height: "130px",
                      }}
                    >
                      <Image
                        fill
                        alt="image"
                        src={image}
                        style={{
                          objectFit: "cover",
                          backgroundColor: "transparent ",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        alignItems: "center",
                        backgroundColor: "transparent ",
                        fontWeight: "700 !important",
                        position: "absolute",
                        top: "90px",
                      }}
                    >
                      گیمینگ
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent ",
                        top: "115px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "transparent ",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          6
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          محصول
                        </Typography>
                      </Box>
                      <Box className="iconBox"
                        sx={{
                          backgroundColor: "transparent ",
                          position: "absolute",
                          mr: "100px",
                          opacity:"0",
                          transition:"all 0.3s ease"
                        }}
                      >
                        <KeyboardBackspaceIcon
                          sx={{
                            backgroundColor: "transparent ",
                            fontSize: "20px",
                            fill: "#EFA71A",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="relative swiper-slide-custom "
              >
                <Box
                  className="inner-box"
                  sx={{
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "#FCEED2",
                      transition: "all .3s ease",
                      "&:hover": {
                        backgroundColor: "#F9E6BB",
                      },
                      "&:hover > .imgBox": {
                        top: "-50px ",
                      },
                      "&:hover .iconBox": {
                        opacity:"1",
                        mr:"90px"
                      },
                      borderRadius: "100px 100px 15px 15px",
                      mt: "45px",
                      position: "relative",
                      width: "188px",
                      height: "155px",
                      mr: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      className="imgBox"
                      sx={{
                        padding: "10px",
                        backgroundColor: "transparent !important",
                        position: "absolute",
                        top: "-45px",
                        pointerEvents: "none",
                        transition: "all 0.3s ease ",
                        width: "100px",
                        height: "130px",
                      }}
                    >
                      <Image
                        fill
                        alt="image"
                        src={image}
                        style={{
                          objectFit: "cover",
                          backgroundColor: "transparent ",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        alignItems: "center",
                        backgroundColor: "transparent ",
                        fontWeight: "700 !important",
                        position: "absolute",
                        top: "90px",
                      }}
                    >
                      گیمینگ
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent ",
                        top: "115px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "transparent ",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          6
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          محصول
                        </Typography>
                      </Box>
                      <Box className="iconBox"
                        sx={{
                          backgroundColor: "transparent ",
                          position: "absolute",
                          mr: "100px",
                          opacity:"0",
                          transition:"all 0.3s ease"
                        }}
                      >
                        <KeyboardBackspaceIcon
                          sx={{
                            backgroundColor: "transparent ",
                            fontSize: "20px",
                            fill: "#EFA71A",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="relative swiper-slide-custom "
              >
                <Box
                  className="inner-box"
                  sx={{
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "#FCEED2",
                      transition: "all .3s ease",
                      "&:hover": {
                        backgroundColor: "#F9E6BB",
                      },
                      "&:hover > .imgBox": {
                        top: "-50px ",
                      },
                      "&:hover .iconBox": {
                        opacity:"1",
                        mr:"90px"
                      },
                      borderRadius: "100px 100px 15px 15px",
                      mt: "45px",
                      position: "relative",
                      width: "188px",
                      height: "155px",
                      mr: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      className="imgBox"
                      sx={{
                        padding: "10px",
                        backgroundColor: "transparent !important",
                        position: "absolute",
                        top: "-45px",
                        pointerEvents: "none",
                        transition: "all 0.3s ease ",
                        width: "100px",
                        height: "130px",
                      }}
                    >
                      <Image
                        fill
                        alt="image"
                        src={image}
                        style={{
                          objectFit: "cover",
                          backgroundColor: "transparent ",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        alignItems: "center",
                        backgroundColor: "transparent ",
                        fontWeight: "700 !important",
                        position: "absolute",
                        top: "90px",
                      }}
                    >
                      گیمینگ
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent ",
                        top: "115px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "transparent ",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          6
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          محصول
                        </Typography>
                      </Box>
                      <Box className="iconBox"
                        sx={{
                          backgroundColor: "transparent ",
                          position: "absolute",
                          mr: "100px",
                          opacity:"0",
                          transition:"all 0.3s ease"
                        }}
                      >
                        <KeyboardBackspaceIcon
                          sx={{
                            backgroundColor: "transparent ",
                            fontSize: "20px",
                            fill: "#EFA71A",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="relative swiper-slide-custom "
              >
                <Box
                  className="inner-box"
                  sx={{
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "#FCEED2",
                      transition: "all .3s ease",
                      "&:hover": {
                        backgroundColor: "#F9E6BB",
                      },
                      "&:hover > .imgBox": {
                        top: "-50px ",
                      },
                      "&:hover .iconBox": {
                        opacity:"1",
                        mr:"90px"
                      },
                      borderRadius: "100px 100px 15px 15px",
                      mt: "45px",
                      position: "relative",
                      width: "188px",
                      height: "155px",
                      mr: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      className="imgBox"
                      sx={{
                        padding: "10px",
                        backgroundColor: "transparent !important",
                        position: "absolute",
                        top: "-45px",
                        pointerEvents: "none",
                        transition: "all 0.3s ease ",
                        width: "100px",
                        height: "130px",
                      }}
                    >
                      <Image
                        fill
                        alt="image"
                        src={image}
                        style={{
                          objectFit: "cover",
                          backgroundColor: "transparent ",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        alignItems: "center",
                        backgroundColor: "transparent ",
                        fontWeight: "700 !important",
                        position: "absolute",
                        top: "90px",
                      }}
                    >
                      گیمینگ
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent ",
                        top: "115px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "transparent ",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          6
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          محصول
                        </Typography>
                      </Box>
                      <Box className="iconBox"
                        sx={{
                          backgroundColor: "transparent ",
                          position: "absolute",
                          mr: "100px",
                          opacity:"0",
                          transition:"all 0.3s ease"
                        }}
                      >
                        <KeyboardBackspaceIcon
                          sx={{
                            backgroundColor: "transparent ",
                            fontSize: "20px",
                            fill: "#EFA71A",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="relative swiper-slide-custom "
              >
                <Box
                  className="inner-box"
                  sx={{
                    height: "100px",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "#FCEED2",
                      transition: "all .3s ease",
                      "&:hover": {
                        backgroundColor: "#F9E6BB",
                      },
                      "&:hover > .imgBox": {
                        top: "-50px ",
                      },
                      "&:hover .iconBox": {
                        opacity:"1",
                        mr:"90px"
                      },
                      borderRadius: "100px 100px 15px 15px",
                      mt: "45px",
                      position: "relative",
                      width: "188px",
                      height: "155px",
                      mr: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      className="imgBox"
                      sx={{
                        padding: "10px",
                        backgroundColor: "transparent !important",
                        position: "absolute",
                        top: "-45px",
                        pointerEvents: "none",
                        transition: "all 0.3s ease ",
                        width: "100px",
                        height: "130px",
                      }}
                    >
                      <Image
                        fill
                        alt="image"
                        src={image}
                        style={{
                          objectFit: "cover",
                          backgroundColor: "transparent ",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        alignItems: "center",
                        backgroundColor: "transparent ",
                        fontWeight: "700 !important",
                        position: "absolute",
                        top: "90px",
                      }}
                    >
                      گیمینگ
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent ",
                        top: "115px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "transparent ",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          6
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "transparent ",
                            display: "inline-block",
                            color: "#8C8C8C",
                            fontSize: "15px",
                          }}
                        >
                          محصول
                        </Typography>
                      </Box>
                      <Box className="iconBox"
                        sx={{
                          backgroundColor: "transparent ",
                          position: "absolute",
                          mr: "100px",
                          opacity:"0",
                          transition:"all 0.3s ease"
                        }}
                      >
                        <KeyboardBackspaceIcon
                          sx={{
                            backgroundColor: "transparent ",
                            fontSize: "20px",
                            fill: "#EFA71A",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
              
         
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
}
