"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/assets/Screenshot 2025-09-19 191624.png";
import image2 from "@/assets/band6-300x300.png";
import image3 from "@/assets/keyboard.png";
import image4 from "@/assets/ipad.png";
import image5 from "@/assets/lap6-600x600.png";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useState } from "react";
import SpeakerIcon from "@mui/icons-material/Speaker";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import LaptopIcon from "@mui/icons-material/Laptop";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function BestCategory() {
  const [item, setItem] = useState<string>("کیبورد");
  return (
    <>
      <Box
        sx={{
          width: "99vw",
          height: "520px",
          position: "relative",
          mt: "55px",
        }}
      >
        <Image fill src={image} alt="#" />
        <Box
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "700 !important",
              color: "#EFA71A",
              position: "absolute",
              backgroundColor: "transparent",

              pt: "55px",
            }}
          >
            دسته‌بندی‌های پرفروش
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              backgroundColor: "transparent",
              gap: "20px",
              pt: "140px",
            }}
          >
            <Box
              onClick={() => setItem("لپ تاپ لنوو")}
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5px",
                transition: "all 0.5s ease",

                "&:hover svg": {
                  fill: `${item == "لپ تاپ لنوو" ? "" : "#959595"}`,
                },
                "&:hover p": {
                  color: "#fff",
                },
                "&:hover .borderB": {
                  opacity: `${item == "لپ تاپ لنوو" ? "0" : "1"}`,
                },

                cursor: "pointer",
                borderBottom: `${
                  item == "لپ تاپ لنوو"
                    ? "2px solid #fff"
                    : "2px solid transparent"
                }`,
                pb: "8px",
              }}
            >
              <LaptopIcon
                sx={{
                  backgroundColor: "transparent",
                  fill: `${item == "لپ تاپ لنوو" ? "#EFA71A" : "#6f6f6f"}`,
                  fontSize: "40px",
                  transition: "all 0.5s ease",
                }}
              />

              <Typography
                sx={{
                  color: `${item == "لپ تاپ لنوو" ? "#fff" : "#BFB9AA"}`,
                  backgroundColor: "transparent",
                  transition: "all 0.5s ease",
                  position: "relative",
                }}
              >
                لپ تاپ لنوو
                <Box
                  className="borderB"
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "10px",
                    height: "2px",
                    backgroundColor: "#EFA71A",
                    mt: "8px",
                    opacity: "0",
                  }}
                />
              </Typography>
            </Box>
            <Box
              onClick={() => setItem("تبلت اپل")}
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5px",
                transition: "all 0.5s ease",

                "&:hover svg": {
                  fill: `${item == "تبلت اپل" ? "" : "#959595"}`,
                },
                "&:hover p": {
                  color: "#fff",
                },
                "&:hover .borderB": {
                  opacity: `${item == "تبلت اپل" ? "0" : "1"}`,
                },

                cursor: "pointer",
                borderBottom: `${
                  item == "تبلت اپل"
                    ? "2px solid #fff"
                    : "2px solid transparent"
                }`,
                pb: "8px",
              }}
            >
              <TabletMacIcon
                sx={{
                  backgroundColor: "transparent",
                  fill: `${item == "تبلت اپل" ? "#EFA71A" : "#6f6f6f"}`,
                  fontSize: "40px",
                  transition: "all 0.5s ease",
                }}
              />

              <Typography
                sx={{
                  color: `${item == "تبلت اپل" ? "#fff" : "#BFB9AA"}`,
                  backgroundColor: "transparent",
                  transition: "all 0.5s ease",
                  position: "relative",
                }}
              >
                تبلت اپل
                <Box
                  className="borderB"
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "10px",
                    height: "2px",
                    backgroundColor: "#EFA71A",
                    mt: "8px",
                    opacity: "0",
                  }}
                />
              </Typography>
            </Box>
            <Box
              onClick={() => setItem("اسپیکر و بلندگو")}
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5px",
                transition: "all 0.5s ease",

                "&:hover svg": {
                  fill: `${item == "اسپیکر و بلندگو" ? "" : "#959595"}`,
                },
                "&:hover p": {
                  color: "#fff",
                },
                "&:hover .borderB": {
                  opacity: `${item == "اسپیکر و بلندگو" ? "0" : "1"}`,
                },

                cursor: "pointer",
                borderBottom: `${
                  item == "اسپیکر و بلندگو"
                    ? "2px solid #fff"
                    : "2px solid transparent"
                }`,
                pb: "8px",
              }}
            >
              <SpeakerIcon
                sx={{
                  backgroundColor: "transparent",
                  fill: `${item == "اسپیکر و بلندگو" ? "#EFA71A" : "#6f6f6f"}`,
                  fontSize: "40px",
                  transition: "all 0.5s ease",
                }}
              />

              <Typography
                sx={{
                  color: `${item == "اسپیکر و بلندگو" ? "#fff" : "#BFB9AA"}`,
                  backgroundColor: "transparent",
                  transition: "all 0.5s ease",
                  position: "relative",
                }}
              >
                اسپیکر و بلندگو
                <Box
                  className="borderB"
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "10px",
                    height: "2px",
                    backgroundColor: "#EFA71A",
                    mt: "8px",
                    opacity: "0",
                  }}
                />
              </Typography>
            </Box>
            <Box
              onClick={() => setItem("کیبورد")}
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5px",
                transition: "all 0.5s ease",

                "&:hover svg": {
                  fill: `${item == "کیبورد" ? "" : "#959595"}`,
                },
                "&:hover p": {
                  color: "#fff",
                },
                "&:hover .borderB": {
                  opacity: `${item == "کیبورد" ? "0" : "1"}`,
                },

                cursor: "pointer",
                borderBottom: `${
                  item == "کیبورد" ? "2px solid #fff" : "2px solid transparent"
                }`,
                pb: "8px",
              }}
            >
              <KeyboardIcon
                sx={{
                  backgroundColor: "transparent",
                  fill: `${item == "کیبورد" ? "#EFA71A" : "#6f6f6f"}`,
                  fontSize: "40px",
                  transition: "all 0.5s ease",
                }}
              />

              <Typography
                sx={{
                  color: `${item == "کیبورد" ? "#fff" : "#BFB9AA"}`,
                  backgroundColor: "transparent",
                  transition: "all 0.5s ease",
                  position: "relative",
                }}
              >
                کیبورد
                <Box
                  className="borderB"
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "10px",
                    height: "2px",
                    backgroundColor: "#EFA71A",
                    mt: "8px",
                    opacity: "0",
                  }}
                />
              </Typography>
            </Box>
          </Box>
          {item == "اسپیکر و بلندگو" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start !important",
                gap: "25px",
                mt: "265px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
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
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`.length > 35
                    ? `اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`.slice(0, 35) +
                      "..."
                    : `اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        8,500,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
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
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`.length > 35
                    ? `اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`.slice(0, 35) +
                      "..."
                    : `اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        8,500,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
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
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`.length > 35
                    ? `اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`.slice(0, 35) +
                      "..."
                    : `اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        8,500,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
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
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`.length > 35
                    ? `اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`.slice(0, 35) +
                      "..."
                    : `اسپیکر بلوتوثی قابل حمل سونباکس مدل S6300`}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      8,300,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        8,500,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          {item == "کیبورد" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start !important",
                gap: "25px",
                mt: "265px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  <Image
                    fill
                    alt="image"
                    src={image3}
                    style={{
                      objectFit: "cover",
                      backgroundColor: "transparent ",
                      borderRadius: "15px",
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`کیبورد بی سیم لاجیتک مدل K380 `.length > 35
                    ? `کیبورد بی سیم لاجیتک مدل K380 `.slice(0, 35) + "..."
                    : `کیبورد بی سیم لاجیتک مدل K380 `}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      2,000,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        2,100,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  <Image
                    fill
                    alt="image"
                    src={image3}
                    style={{
                      objectFit: "cover",
                      backgroundColor: "transparent ",
                      borderRadius: "15px",
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`کیبورد بی سیم لاجیتک مدل K380 `.length > 35
                    ? `کیبورد بی سیم لاجیتک مدل K380 `.slice(0, 35) + "..."
                    : `کیبورد بی سیم لاجیتک مدل K380 `}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      2,000,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        2,100,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  <Image
                    fill
                    alt="image"
                    src={image3}
                    style={{
                      objectFit: "cover",
                      backgroundColor: "transparent ",
                      borderRadius: "15px",
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`کیبورد بی سیم لاجیتک مدل K380 `.length > 35
                    ? `کیبورد بی سیم لاجیتک مدل K380 `.slice(0, 35) + "..."
                    : `کیبورد بی سیم لاجیتک مدل K380 `}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      2,000,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        2,100,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  <Image
                    fill
                    alt="image"
                    src={image3}
                    style={{
                      objectFit: "cover",
                      backgroundColor: "transparent ",
                      borderRadius: "15px",
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`کیبورد بی سیم لاجیتک مدل K380 `.length > 35
                    ? `کیبورد بی سیم لاجیتک مدل K380 `.slice(0, 35) + "..."
                    : `کیبورد بی سیم لاجیتک مدل K380 `}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      2,000,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        2,100,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  <Image
                    fill
                    alt="image"
                    src={image3}
                    style={{
                      objectFit: "cover",
                      backgroundColor: "transparent ",
                      borderRadius: "15px",
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`کیبورد بی سیم لاجیتک مدل K380 `.length > 35
                    ? `کیبورد بی سیم لاجیتک مدل K380 `.slice(0, 35) + "..."
                    : `کیبورد بی سیم لاجیتک مدل K380 `}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      2,000,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        2,100,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  <Image
                    fill
                    alt="image"
                    src={image3}
                    style={{
                      objectFit: "cover",
                      backgroundColor: "transparent ",
                      borderRadius: "15px",
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`کیبورد بی سیم لاجیتک مدل K380 `.length > 35
                    ? `کیبورد بی سیم لاجیتک مدل K380 `.slice(0, 35) + "..."
                    : `کیبورد بی سیم لاجیتک مدل K380 `}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      2,000,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        2,100,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          {item == "لپ تاپ لنوو" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start !important",
                gap: "25px",
                mt: "265px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  <Image
                    fill
                    alt="image"
                    src={image5}
                    style={{
                      objectFit: "cover",
                      backgroundColor: "transparent ",
                      borderRadius: "15px",
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`
                    .length > 35
                    ? `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`.slice(
                        0,
                        35
                      ) + "..."
                    : `لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 5 15IAL7-i5 1235U 16GB 512SSD MX550`}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
          {item == "تبلت اپل" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start !important",
                gap: "25px",
                mt: "265px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  position: "relative",
                  overflow: "hidden !important",
                  width: "200px",
                  height: "335px",
                  borderRadius: "15px",
                  border: ".1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all .3s ease",
                  "&:hover": {
                    border: "1px solid #EFA71A",
                  },
                  "&:hover img": {
                    opacity: "0.3",
                  },
                  "&:hover .eyeBox": {
                    mt: "-175px",
                    opacity: "1",
                  },
                  alignItems: "center",
                  pt: "20px",
                }}
              >
                <Box
                  className="imgBox"
                  sx={{
                    backgroundColor: "transparent ",
                    position: "relative",
                    pointerEvents: "none",
                    transition: "all 0.3s ease ",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  <Image
                    fill
                    alt="image"
                    src={image4}
                    style={{
                      objectFit: "cover",
                      backgroundColor: "transparent ",
                      borderRadius: "15px",
                      transition: "all .3s ease",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    backgroundColor: "transparent ",
                    direction: "rtl",
                    mt: "17px",
                    px: "20px",
                  }}
                >
                  {`تبلت 11 اینچ اپل مدل iPad Pro 11 2022 WIFI`.length > 35
                    ? `تبلت 11 اینچ اپل مدل iPad Pro 11 2022 WIFI`.slice(
                        0,
                        35
                      ) + "..."
                    : `تبلت 11 اینچ اپل مدل iPad Pro 11 2022 WIFI`}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent ",
                    top: "90px",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent ",
                      mt: "172px",
                      direction: "rtl",
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
                      55,500,000
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "transparent ",
                        gap: "5px",
                        display: "flex",
                        mt: "5px",
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
                        55,700,000
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
                </Box>
                <Box
                  className="eyeBox"
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    transition: "all .5s ease",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#EFA71A",
                    },
                    "&:hover svg": {
                      backgroundColor: "#EFA71A",
                      fill: "#fff",
                    },
                    "&:hover p": {
                      color: "#fff",
                    },
                    // position:"fixed",
                    zIndex: "9999",
                    mt: "-185px",
                    opacity: "0",
                  }}
                >
                  <RemoveRedEyeIcon
                    sx={{
                      backgroundColor: "#fff",
                      fill: "#EFA71A    ",
                      transition: "all .5s ease",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
