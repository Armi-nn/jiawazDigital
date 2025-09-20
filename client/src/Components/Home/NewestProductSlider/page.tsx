"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/assets/keyboard.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function NewestProductSlider() {
  // const [atEnd, setAtEnd] = useState<boolean>(false);

  return (
    <>
      <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        px:"10px",
        mt:"70px"
      }}>
         <Box
          sx={{
            cursor: "pointer",
            backgroundColor: "#3C3C3C",
            display: "flex",
            width: "160px",
            height: "40px",
            ml: "95px",
            borderRadius: "10px",
            justifyContent: "space-around",
            alignItems: "center",
            transition: "all 0.5s ease",
            "&:hover": {
              backgroundColor: "#EFA71A",
            },
            "&:hover p": {
              backgroundColor: "#EFA71A",
            },
            "&:hover .backspaceIcon": {
              backgroundColor: "#EFA71A",
            },
          }}
        >
          <KeyboardBackspaceIcon
            className="backspaceIcon"
            sx={{
              backgroundColor: "#3C3C3C",
              fill: "#fff",
              transition: "all 0.5s ease",
            }}
          />
          <Typography
            sx={{
              color: "#fff",
              backgroundColor: "#3C3C3C",
              fontSize: "15px",
              transition: "all 0.5s ease",
            }}
          >
            مشاهده همه
          </Typography>
        </Box>
        <Typography sx={{
          fontSize:"27px ",
          fontWeight:"600 !important",
          color:"#3C3C3C",
          mr:"110px",
          borderRight:"4px solid #EFA71A",
          pr:"10px"
        }}>جدیدترین محصولات</Typography>
       
      </Box>
      <Swiper
        style={{
          width: "88vw",
          height: "100%",
          padding: "10px",
          marginTop:"30px"
        }}
        slidesPerView={3.2}
        grid={{
          rows: 3,
          fill: "row",
        }}
        spaceBetween={20}
        modules={[Grid]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              height: "140px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid transparent",
              transition: "all 0.5s ease",
              "&:hover": {
                border: "1px solid #EFA71A",
                boxShadow: "0 4px 12px rgba(239, 167, 26, 0.35)",
              },
              "&:hover .boxImg": {
                opacity: "0.5",
              },
              "&:hover .shoppingBox": {
                mt: "-10px",
              },
              "&:hover .eyeBox": {
                mt: "79px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                backgroundColor: "#fff ",
                pt: "3px",
                ml: "19px",
              }}
            >
              <Typography
                sx={{
                  direction: "rtl",
                  backgroundColor: "#fff ",
                  width: "220px",
                }}
              >
                کیبورد بی سیم لاجیتک مدل K380
              </Typography>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#fff ",
                    display: "flex",
                    pt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff ",
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "#fff ",
                        color: "#EFA71A",
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        height: "25px",
                      }}
                    >
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff ",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "15px",
                          textDecoration: "line-through",
                          textDecorationThickness: "1.5px",
                        }}
                      >
                        8,500,000
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "#fff ",
                          fontSize: "13px",
                        }}
                      >
                        تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                className="boxImg"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.5s ease",
                }}
                src={image}
                alt="#"
                fill
              />
              <Box
                className="shoppingBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-55px",
                  position: "absolute",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    height: "60px",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
              <Box
                className="eyeBox"
                sx={{
                  backgroundColor: "#EFA71A",
                  width: "40px",
                  height: "51px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "123px",
                  position: "absolute",
                  transition: "all 0.3s ease",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": {
                    transition: "all 0.3s ease",
                    mt: "69px !important",
                    height: "60px",
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    backgroundColor: "#EFA71A",
                    fill: "#fff",
                    fontSize: "24px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
