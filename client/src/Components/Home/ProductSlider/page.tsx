"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/assets/111.png";
import image2 from "@/assets/lap6-600x600.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { FreeMode } from "swiper/modules";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./styles.css";
export default function ProductSlider() {
  const [atEnd, setAtEnd] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              width: "64vw",
              display: "flex",
              justifyContent: "center",
              maxWidth: "64vw",
              position: "absolute",
              marginRight: "390px",
              mt: "150px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                direction: "rtl",
                height: "250px",
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
                  style={{
                    backgroundColor: "transparent !important",
                  }}
                  dir="rtl"
                  slidesPerView={4.2}
                  spaceBetween={5}
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
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "transparent !important",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "transparent",
                          position: "relative",
                          overflow: "hidden !important",
                          width: "225px",
                          height: "425px",
                          borderRadius: "15px",
                          padding: "20px",
                          border: ".1px solid rgba(0, 0, 0, 0.05)",
                          transition: "all .3s ease",
                          "&:hover": {
                            border: "1px solid #EFA71A",
                          },
                        }}
                      >
                        <Box
                          className="imgBox"
                          sx={{
                            padding: "10px",
                            backgroundColor: "transparent ",
                            position: "relative",
                            pointerEvents: "none",
                            transition: "all 0.3s ease ",
                            width: "185px",
                            height: "185px",
                          }}
                        >
                          <Image
                            fill
                            alt="image"
                            src={image2}
                            style={{
                              objectFit: "cover",
                              backgroundColor: "transparent ",
                              borderRadius: "15px",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            alignItems: "center",
                            backgroundColor: "transparent ",
                            fontWeight: "600 !important",
                            position: "absolute",
                            top: "225px",
                          }}
                        >
                          {`لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`
                            .length > 50
                            ? `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`.slice(
                                0,
                                50
                              ) + "..."
                            : `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`}
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            backgroundColor: "transparent ",
                            top: "115px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "transparent ",
                              mt: "172px",
                            }}
                          >
                            <Typography
                              sx={{
                                backgroundColor: "transparent ",
                                color: "#EFA71A",
                                fontSize: "18px",
                                fontWeight: "600 !important",
                              }}
                            >
                              36,000,000
                            </Typography>
                            <Box
                              sx={{
                                backgroundColor: "transparent ",
                                display: "flex",
                                gap: "5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "15px",
                                  textDecoration: "line-through",
                                  textDecorationThickness: "1.5px",
                                }}
                              >
                                37,000,000
                              </Typography>
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "13px",
                                }}
                              >
                                تومان
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              backgroundColor: "transparent",
                              gap: "10px",
                            }}
                          >
                            <Box
                              sx={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#EFA71A",
                                justifyContent: "start",
                                transition: "all .2s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  width: "185px",
                                  boxShadow: "0px 2px 5px #EFA71A",
                                },
                                "&:hover .textBox": {
                                  display: "flex",
                                },
                              }}
                            >
                              <ShoppingCartIcon
                                sx={{
                                  backgroundColor: "#EFA71A",
                                  fill: "#fff",
                                  mr: "14px",
                                }}
                              />
                              <Box
                                className="textBox"
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "none",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    pr: "14px",
                                    position: "fixed",
                                    width: "120px",
                                  }}
                                >
                                  افزودن به سبد خرید
                                </Typography>
                                <AddIcon
                                  sx={{
                                    backgroundColor: "transparent",
                                    fill: "#fff",
                                    mr: "120px",
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "130px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#FCEED2",
                                justifyContent: "start",
                                transition: "all .5s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  backgroundColor: "#EFA71A",
                                },
                                "&:hover svg": {
                                  backgroundColor: "#EFA71A",
                                  fill:"#fff"
                                },
                                "&:hover p": {
                                  color:"#fff"
                                },
                              }}
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  backgroundColor: "#FCEED2",
                                  fill: "#EFA71A    ",
                                  mr: "14px",
                                  transition: "all .5s ease",
                                }}
                              />
                              <Box
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  className="textBox2"
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#1F1F1F",
                                    pr: "5px",
                                    width: "120px",
                                    fontWeight: "600 !important",
                                transition: "all .5s ease",

                                  }}
                                >
                                  مشاهده سریع
                                </Typography>
                              </Box>
                            </Box>
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
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "transparent !important",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "transparent",
                          position: "relative",
                          overflow: "hidden !important",
                          width: "225px",
                          height: "425px",
                          borderRadius: "15px",
                          padding: "20px",
                          border: ".1px solid rgba(0, 0, 0, 0.05)",
                          transition: "all .3s ease",
                          "&:hover": {
                            border: "1px solid #EFA71A",
                          },
                        }}
                      >
                        <Box
                          className="imgBox"
                          sx={{
                            padding: "10px",
                            backgroundColor: "transparent ",
                            position: "relative",
                            pointerEvents: "none",
                            transition: "all 0.3s ease ",
                            width: "185px",
                            height: "185px",
                          }}
                        >
                          <Image
                            fill
                            alt="image"
                            src={image2}
                            style={{
                              objectFit: "cover",
                              backgroundColor: "transparent ",
                              borderRadius: "15px",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            alignItems: "center",
                            backgroundColor: "transparent ",
                            fontWeight: "600 !important",
                            position: "absolute",
                            top: "225px",
                          }}
                        >
                          {`لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`
                            .length > 50
                            ? `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`.slice(
                                0,
                                50
                              ) + "..."
                            : `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`}
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            backgroundColor: "transparent ",
                            top: "115px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "transparent ",
                              mt: "172px",
                            }}
                          >
                            <Typography
                              sx={{
                                backgroundColor: "transparent ",
                                color: "#EFA71A",
                                fontSize: "18px",
                                fontWeight: "600 !important",
                              }}
                            >
                              36,000,000
                            </Typography>
                            <Box
                              sx={{
                                backgroundColor: "transparent ",
                                display: "flex",
                                gap: "5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "15px",
                                  textDecoration: "line-through",
                                  textDecorationThickness: "1.5px",
                                }}
                              >
                                37,000,000
                              </Typography>
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "13px",
                                }}
                              >
                                تومان
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              backgroundColor: "transparent",
                              gap: "10px",
                            }}
                          >
                            <Box
                              sx={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#EFA71A",
                                justifyContent: "start",
                                transition: "all .2s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  width: "185px",
                                  boxShadow: "0px 2px 5px #EFA71A",
                                },
                                "&:hover .textBox": {
                                  display: "flex",
                                },
                              }}
                            >
                              <ShoppingCartIcon
                                sx={{
                                  backgroundColor: "#EFA71A",
                                  fill: "#fff",
                                  mr: "14px",
                                }}
                              />
                              <Box
                                className="textBox"
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "none",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    pr: "14px",
                                    position: "fixed",
                                    width: "120px",
                                  }}
                                >
                                  افزودن به سبد خرید
                                </Typography>
                                <AddIcon
                                  sx={{
                                    backgroundColor: "transparent",
                                    fill: "#fff",
                                    mr: "120px",
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "130px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#FCEED2",
                                justifyContent: "start",
                                transition: "all .5s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  backgroundColor: "#EFA71A",
                                },
                                "&:hover svg": {
                                  backgroundColor: "#EFA71A",
                                  fill:"#fff"
                                },
                                "&:hover p": {
                                  color:"#fff"
                                },
                              }}
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  backgroundColor: "#FCEED2",
                                  fill: "#EFA71A    ",
                                  mr: "14px",
                                  transition: "all .5s ease",
                                }}
                              />
                              <Box
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  className="textBox2"
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#1F1F1F",
                                    pr: "5px",
                                    width: "120px",
                                    fontWeight: "600 !important",
                                transition: "all .5s ease",

                                  }}
                                >
                                  مشاهده سریع
                                </Typography>
                              </Box>
                            </Box>
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
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "transparent !important",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "transparent",
                          position: "relative",
                          overflow: "hidden !important",
                          width: "225px",
                          height: "425px",
                          borderRadius: "15px",
                          padding: "20px",
                          border: ".1px solid rgba(0, 0, 0, 0.05)",
                          transition: "all .3s ease",
                          "&:hover": {
                            border: "1px solid #EFA71A",
                          },
                        }}
                      >
                        <Box
                          className="imgBox"
                          sx={{
                            padding: "10px",
                            backgroundColor: "transparent ",
                            position: "relative",
                            pointerEvents: "none",
                            transition: "all 0.3s ease ",
                            width: "185px",
                            height: "185px",
                          }}
                        >
                          <Image
                            fill
                            alt="image"
                            src={image2}
                            style={{
                              objectFit: "cover",
                              backgroundColor: "transparent ",
                              borderRadius: "15px",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            alignItems: "center",
                            backgroundColor: "transparent ",
                            fontWeight: "600 !important",
                            position: "absolute",
                            top: "225px",
                          }}
                        >
                          {`لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`
                            .length > 50
                            ? `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`.slice(
                                0,
                                50
                              ) + "..."
                            : `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`}
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            backgroundColor: "transparent ",
                            top: "115px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "transparent ",
                              mt: "172px",
                            }}
                          >
                            <Typography
                              sx={{
                                backgroundColor: "transparent ",
                                color: "#EFA71A",
                                fontSize: "18px",
                                fontWeight: "600 !important",
                              }}
                            >
                              36,000,000
                            </Typography>
                            <Box
                              sx={{
                                backgroundColor: "transparent ",
                                display: "flex",
                                gap: "5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "15px",
                                  textDecoration: "line-through",
                                  textDecorationThickness: "1.5px",
                                }}
                              >
                                37,000,000
                              </Typography>
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "13px",
                                }}
                              >
                                تومان
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              backgroundColor: "transparent",
                              gap: "10px",
                            }}
                          >
                            <Box
                              sx={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#EFA71A",
                                justifyContent: "start",
                                transition: "all .2s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  width: "185px",
                                  boxShadow: "0px 2px 5px #EFA71A",
                                },
                                "&:hover .textBox": {
                                  display: "flex",
                                },
                              }}
                            >
                              <ShoppingCartIcon
                                sx={{
                                  backgroundColor: "#EFA71A",
                                  fill: "#fff",
                                  mr: "14px",
                                }}
                              />
                              <Box
                                className="textBox"
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "none",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    pr: "14px",
                                    position: "fixed",
                                    width: "120px",
                                  }}
                                >
                                  افزودن به سبد خرید
                                </Typography>
                                <AddIcon
                                  sx={{
                                    backgroundColor: "transparent",
                                    fill: "#fff",
                                    mr: "120px",
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "130px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#FCEED2",
                                justifyContent: "start",
                                transition: "all .5s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  backgroundColor: "#EFA71A",
                                },
                                "&:hover svg": {
                                  backgroundColor: "#EFA71A",
                                  fill:"#fff"
                                },
                                "&:hover p": {
                                  color:"#fff"
                                },
                              }}
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  backgroundColor: "#FCEED2",
                                  fill: "#EFA71A    ",
                                  mr: "14px",
                                  transition: "all .5s ease",
                                }}
                              />
                              <Box
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  className="textBox2"
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#1F1F1F",
                                    pr: "5px",
                                    width: "120px",
                                    fontWeight: "600 !important",
                                transition: "all .5s ease",

                                  }}
                                >
                                  مشاهده سریع
                                </Typography>
                              </Box>
                            </Box>
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
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "transparent !important",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "transparent",
                          position: "relative",
                          overflow: "hidden !important",
                          width: "225px",
                          height: "425px",
                          borderRadius: "15px",
                          padding: "20px",
                          border: ".1px solid rgba(0, 0, 0, 0.05)",
                          transition: "all .3s ease",
                          "&:hover": {
                            border: "1px solid #EFA71A",
                          },
                        }}
                      >
                        <Box
                          className="imgBox"
                          sx={{
                            padding: "10px",
                            backgroundColor: "transparent ",
                            position: "relative",
                            pointerEvents: "none",
                            transition: "all 0.3s ease ",
                            width: "185px",
                            height: "185px",
                          }}
                        >
                          <Image
                            fill
                            alt="image"
                            src={image2}
                            style={{
                              objectFit: "cover",
                              backgroundColor: "transparent ",
                              borderRadius: "15px",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            alignItems: "center",
                            backgroundColor: "transparent ",
                            fontWeight: "600 !important",
                            position: "absolute",
                            top: "225px",
                          }}
                        >
                          {`لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`
                            .length > 50
                            ? `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`.slice(
                                0,
                                50
                              ) + "..."
                            : `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`}
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            backgroundColor: "transparent ",
                            top: "115px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "transparent ",
                              mt: "172px",
                            }}
                          >
                            <Typography
                              sx={{
                                backgroundColor: "transparent ",
                                color: "#EFA71A",
                                fontSize: "18px",
                                fontWeight: "600 !important",
                              }}
                            >
                              36,000,000
                            </Typography>
                            <Box
                              sx={{
                                backgroundColor: "transparent ",
                                display: "flex",
                                gap: "5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "15px",
                                  textDecoration: "line-through",
                                  textDecorationThickness: "1.5px",
                                }}
                              >
                                37,000,000
                              </Typography>
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "13px",
                                }}
                              >
                                تومان
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              backgroundColor: "transparent",
                              gap: "10px",
                            }}
                          >
                            <Box
                              sx={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#EFA71A",
                                justifyContent: "start",
                                transition: "all .2s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  width: "185px",
                                  boxShadow: "0px 2px 5px #EFA71A",
                                },
                                "&:hover .textBox": {
                                  display: "flex",
                                },
                              }}
                            >
                              <ShoppingCartIcon
                                sx={{
                                  backgroundColor: "#EFA71A",
                                  fill: "#fff",
                                  mr: "14px",
                                }}
                              />
                              <Box
                                className="textBox"
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "none",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    pr: "14px",
                                    position: "fixed",
                                    width: "120px",
                                  }}
                                >
                                  افزودن به سبد خرید
                                </Typography>
                                <AddIcon
                                  sx={{
                                    backgroundColor: "transparent",
                                    fill: "#fff",
                                    mr: "120px",
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "130px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#FCEED2",
                                justifyContent: "start",
                                transition: "all .5s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  backgroundColor: "#EFA71A",
                                },
                                "&:hover svg": {
                                  backgroundColor: "#EFA71A",
                                  fill:"#fff"
                                },
                                "&:hover p": {
                                  color:"#fff"
                                },
                              }}
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  backgroundColor: "#FCEED2",
                                  fill: "#EFA71A    ",
                                  mr: "14px",
                                  transition: "all .5s ease",
                                }}
                              />
                              <Box
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  className="textBox2"
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#1F1F1F",
                                    pr: "5px",
                                    width: "120px",
                                    fontWeight: "600 !important",
                                transition: "all .5s ease",

                                  }}
                                >
                                  مشاهده سریع
                                </Typography>
                              </Box>
                            </Box>
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
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "transparent !important",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "transparent",
                          position: "relative",
                          overflow: "hidden !important",
                          width: "225px",
                          height: "425px",
                          borderRadius: "15px",
                          padding: "20px",
                          border: ".1px solid rgba(0, 0, 0, 0.05)",
                          transition: "all .3s ease",
                          "&:hover": {
                            border: "1px solid #EFA71A",
                          },
                        }}
                      >
                        <Box
                          className="imgBox"
                          sx={{
                            padding: "10px",
                            backgroundColor: "transparent ",
                            position: "relative",
                            pointerEvents: "none",
                            transition: "all 0.3s ease ",
                            width: "185px",
                            height: "185px",
                          }}
                        >
                          <Image
                            fill
                            alt="image"
                            src={image2}
                            style={{
                              objectFit: "cover",
                              backgroundColor: "transparent ",
                              borderRadius: "15px",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            alignItems: "center",
                            backgroundColor: "transparent ",
                            fontWeight: "600 !important",
                            position: "absolute",
                            top: "225px",
                          }}
                        >
                          {`لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`
                            .length > 50
                            ? `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`.slice(
                                0,
                                50
                              ) + "..."
                            : `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`}
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            backgroundColor: "transparent ",
                            top: "115px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "transparent ",
                              mt: "172px",
                            }}
                          >
                            <Typography
                              sx={{
                                backgroundColor: "transparent ",
                                color: "#EFA71A",
                                fontSize: "18px",
                                fontWeight: "600 !important",
                              }}
                            >
                              36,000,000
                            </Typography>
                            <Box
                              sx={{
                                backgroundColor: "transparent ",
                                display: "flex",
                                gap: "5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "15px",
                                  textDecoration: "line-through",
                                  textDecorationThickness: "1.5px",
                                }}
                              >
                                37,000,000
                              </Typography>
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "13px",
                                }}
                              >
                                تومان
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              backgroundColor: "transparent",
                              gap: "10px",
                            }}
                          >
                            <Box
                              sx={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#EFA71A",
                                justifyContent: "start",
                                transition: "all .2s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  width: "185px",
                                  boxShadow: "0px 2px 5px #EFA71A",
                                },
                                "&:hover .textBox": {
                                  display: "flex",
                                },
                              }}
                            >
                              <ShoppingCartIcon
                                sx={{
                                  backgroundColor: "#EFA71A",
                                  fill: "#fff",
                                  mr: "14px",
                                }}
                              />
                              <Box
                                className="textBox"
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "none",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    pr: "14px",
                                    position: "fixed",
                                    width: "120px",
                                  }}
                                >
                                  افزودن به سبد خرید
                                </Typography>
                                <AddIcon
                                  sx={{
                                    backgroundColor: "transparent",
                                    fill: "#fff",
                                    mr: "120px",
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "130px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#FCEED2",
                                justifyContent: "start",
                                transition: "all .5s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  backgroundColor: "#EFA71A",
                                },
                                "&:hover svg": {
                                  backgroundColor: "#EFA71A",
                                  fill:"#fff"
                                },
                                "&:hover p": {
                                  color:"#fff"
                                },
                              }}
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  backgroundColor: "#FCEED2",
                                  fill: "#EFA71A    ",
                                  mr: "14px",
                                  transition: "all .5s ease",
                                }}
                              />
                              <Box
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  className="textBox2"
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#1F1F1F",
                                    pr: "5px",
                                    width: "120px",
                                    fontWeight: "600 !important",
                                transition: "all .5s ease",

                                  }}
                                >
                                  مشاهده سریع
                                </Typography>
                              </Box>
                            </Box>
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
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "transparent !important",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "transparent",
                          position: "relative",
                          overflow: "hidden !important",
                          width: "225px",
                          height: "425px",
                          borderRadius: "15px",
                          padding: "20px",
                          border: ".1px solid rgba(0, 0, 0, 0.05)",
                          transition: "all .3s ease",
                          "&:hover": {
                            border: "1px solid #EFA71A",
                          },
                        }}
                      >
                        <Box
                          className="imgBox"
                          sx={{
                            padding: "10px",
                            backgroundColor: "transparent ",
                            position: "relative",
                            pointerEvents: "none",
                            transition: "all 0.3s ease ",
                            width: "185px",
                            height: "185px",
                          }}
                        >
                          <Image
                            fill
                            alt="image"
                            src={image2}
                            style={{
                              objectFit: "cover",
                              backgroundColor: "transparent ",
                              borderRadius: "15px",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            alignItems: "center",
                            backgroundColor: "transparent ",
                            fontWeight: "600 !important",
                            position: "absolute",
                            top: "225px",
                          }}
                        >
                          {`لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`
                            .length > 50
                            ? `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`.slice(
                                0,
                                50
                              ) + "..."
                            : `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`}
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            backgroundColor: "transparent ",
                            top: "115px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "transparent ",
                              mt: "172px",
                            }}
                          >
                            <Typography
                              sx={{
                                backgroundColor: "transparent ",
                                color: "#EFA71A",
                                fontSize: "18px",
                                fontWeight: "600 !important",
                              }}
                            >
                              36,000,000
                            </Typography>
                            <Box
                              sx={{
                                backgroundColor: "transparent ",
                                display: "flex",
                                gap: "5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "15px",
                                  textDecoration: "line-through",
                                  textDecorationThickness: "1.5px",
                                }}
                              >
                                37,000,000
                              </Typography>
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "13px",
                                }}
                              >
                                تومان
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              backgroundColor: "transparent",
                              gap: "10px",
                            }}
                          >
                            <Box
                              sx={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#EFA71A",
                                justifyContent: "start",
                                transition: "all .2s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  width: "185px",
                                  boxShadow: "0px 2px 5px #EFA71A",
                                },
                                "&:hover .textBox": {
                                  display: "flex",
                                },
                              }}
                            >
                              <ShoppingCartIcon
                                sx={{
                                  backgroundColor: "#EFA71A",
                                  fill: "#fff",
                                  mr: "14px",
                                }}
                              />
                              <Box
                                className="textBox"
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "none",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    pr: "14px",
                                    position: "fixed",
                                    width: "120px",
                                  }}
                                >
                                  افزودن به سبد خرید
                                </Typography>
                                <AddIcon
                                  sx={{
                                    backgroundColor: "transparent",
                                    fill: "#fff",
                                    mr: "120px",
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "130px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#FCEED2",
                                justifyContent: "start",
                                transition: "all .5s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  backgroundColor: "#EFA71A",
                                },
                                "&:hover svg": {
                                  backgroundColor: "#EFA71A",
                                  fill:"#fff"
                                },
                                "&:hover p": {
                                  color:"#fff"
                                },
                              }}
                             >
                              <RemoveRedEyeIcon
                                sx={{
                                  backgroundColor: "#FCEED2",
                                  fill: "#EFA71A    ",
                                  mr: "14px",
                                  transition: "all .5s ease",
                                }}
                              />
                              <Box
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                               >
                                <Typography
                                  className="textBox2"
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#1F1F1F",
                                    pr: "5px",
                                    width: "120px",
                                    fontWeight: "600 !important",
                                transition: "all .5s ease",

                                  }}
                                >
                                  مشاهده سریع
                                </Typography>
                              </Box>
                            </Box>
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
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "transparent !important",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "transparent",
                          position: "relative",
                          overflow: "hidden !important",
                          width: "225px",
                          height: "425px",
                          borderRadius: "15px",
                          padding: "20px",
                          border: ".1px solid rgba(0, 0, 0, 0.05)",
                          transition: "all .3s ease",
                          "&:hover": {
                            border: "1px solid #EFA71A",
                          },
                        }}
                      >
                        <Box
                          className="imgBox"
                          sx={{
                            padding: "10px",
                            backgroundColor: "transparent ",
                            position: "relative",
                            pointerEvents: "none",
                            transition: "all 0.3s ease ",
                            width: "185px",
                            height: "185px",
                          }}
                        >
                          <Image
                            fill
                            alt="image"
                            src={image2}
                            style={{
                              objectFit: "cover",
                              backgroundColor: "transparent ",
                              borderRadius: "15px",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            alignItems: "center",
                            backgroundColor: "transparent ",
                            fontWeight: "600 !important",
                            position: "absolute",
                            top: "225px",
                          }}
                        >
                          {`لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`
                            .length > 50
                            ? `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`.slice(
                                0,
                                50
                              ) + "..."
                            : `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`}
                        </Typography>
                        <Box
                          sx={{
                            position: "absolute",
                            backgroundColor: "transparent ",
                            top: "115px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "transparent ",
                              mt: "172px",
                            }}
                          >
                            <Typography
                              sx={{
                                backgroundColor: "transparent ",
                                color: "#EFA71A",
                                fontSize: "18px",
                                fontWeight: "600 !important",
                              }}
                            >
                              36,000,000
                            </Typography>
                            <Box
                              sx={{
                                backgroundColor: "transparent ",
                                display: "flex",
                                gap: "5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "15px",
                                  textDecoration: "line-through",
                                  textDecorationThickness: "1.5px",
                                }}
                              >
                                37,000,000
                              </Typography>
                              <Typography
                                sx={{
                                  backgroundColor: "transparent ",
                                  fontSize: "13px",
                                }}
                              >
                                تومان
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              backgroundColor: "transparent",
                              gap: "10px",
                            }}
                          >
                            <Box
                              sx={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#EFA71A",
                                justifyContent: "start",
                                transition: "all .2s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  width: "185px",
                                  boxShadow: "0px 2px 5px #EFA71A",
                                },
                                "&:hover .textBox": {
                                  display: "flex",
                                },
                              }}
                            >
                              <ShoppingCartIcon
                                sx={{
                                  backgroundColor: "#EFA71A",
                                  fill: "#fff",
                                  mr: "14px",
                                }}
                              />
                              <Box
                                className="textBox"
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "none",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    pr: "14px",
                                    position: "fixed",
                                    width: "120px",
                                  }}
                                >
                                  افزودن به سبد خرید
                                </Typography>
                                <AddIcon
                                  sx={{
                                    backgroundColor: "transparent",
                                    fill: "#fff",
                                    mr: "120px",
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                width: "130px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                backgroundColor: "#FCEED2",
                                justifyContent: "start",
                                transition: "all .5s ease",
                                cursor: "pointer",
                                mt: "18px",
                                "&:hover": {
                                  backgroundColor: "#EFA71A",
                                },
                                "&:hover svg": {
                                  backgroundColor: "#EFA71A",
                                  fill:"#fff"
                                },
                                "&:hover p": {
                                  color:"#fff"
                                },
                              }}
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  backgroundColor: "#FCEED2",
                                  fill: "#EFA71A    ",
                                  mr: "14px",
                                  transition: "all .5s ease",
                                }}
                              />
                              <Box
                                sx={{
                                  backgroundColor: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  className="textBox2"
                                  sx={{
                                    fontSize: "13px",
                                    backgroundColor: "transparent",
                                    color: "#1F1F1F",
                                    pr: "5px",
                                    width: "120px",
                                    fontWeight: "600 !important",
                                transition: "all .5s ease",

                                  }}
                                >
                                  مشاهده سریع
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "600px",
              height: "520px",
              background: " linear-gradient(50deg, #fcd57a, #e79e00)",
              borderRadius: "50% 40px 40px 120px",
              mt: "100px",
              mr: "85px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "215px",
                height: "230px",
                position: "relative",
                backgroundColor: "transparent ",
                mt: "60px",
                ml: "285px",
              }}
            >
              <Image
                style={{
                  backgroundColor: "transparent ",
                }}
                fill
                alt="image"
                src={image}
              />
              <Box
                sx={{
                  backgroundColor: "transparent ",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "transparent ",
                    mt: "240px",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "transparent ",
                      color: "#fff",
                      fontSize: "25px",
                      fontWeight: "600 !important",
                    }}
                  >
                    پیشنهاد شگفت‌انگیز
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "transparent ",
                    mt: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "transparent ",
                      color: "#1C1C1C",
                      fontSize: "22px",
                    }}
                  >
                    تا 30% تخفیف
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.30)",
                    display: "flex",
                    border: "2px solid #fff",
                    width: "190px",
                    height: "55px",
                    borderRadius: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                    ml: "10px",
                    cursor: "pointer",
                    gap: "5px",
                    mt: "25px",
                    "&: hover": {
                      backgroundColor: "#fff",
                    },
                    "&: hover p": {
                      color: "#EFA71A",
                    },
                    "&: hover svg": {
                      fill: "#EFA71A",
                    },
                    transition: "all 0.5s ease",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                    }}
                  >
                    <ArrowLeftIcon
                      sx={{
                        fill: "#fff",
                        backgroundColor: "transparent",
                        fontSize: "30px",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      backgroundColor: "transparent",
                      fontSize: "18px",
                    }}
                  >
                    مشاهده همه
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
