import { Box, Input, TextField, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/assets/about-us.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export const metadata = {
  title: "تماس با ما | جیاواز",
  description:
    "برای ارتباط با فروشگاه جیاواز از طریق فرم تماس یا اطلاعات تماس با ما در ارتباط باشید.ّ",
};
export default function contentUs() {
  return (
    <>
      <Box
        sx={{
          height: "15px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <Box>
          <Box
            sx={{
              mb: "30px",
              ml: "25vw",
              display: "flex",
              gap: "15px",
              direction: "rtl",
              mt: "75px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF8E7",
                direction: "rtl",
                width: "90px",
                height: "90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "18px",
              }}
            >
              <LocalPhoneIcon
                sx={{
                  backgroundColor: "#FFF8E7",
                  fill: "#EFA71A",
                  fontSize: "30px",
                }}
              />
            </Box>
            <Box
              sx={{
                mt: "5px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  color: "#EFA71A",
                  fontWeight: "600 !important",
                }}
              >
                تماس با ما
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#1F1F1F",
                }}
              >
                راه های ارتباط با ما
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "43vw",
              maxWidth: "43vw",
              height: "745px",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "15px",
              direction: "rtl",
              padding: "25px",
            }}
          >
            <Box
              sx={{
                borderBottom: "1px solid black",
                width: "130px",
                backgroundColor: "transparent",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "transparent",
                  fontSize: "22px",
                  fontWeight: "600 !important",
                }}
              >
                فرم تماس باما
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                mt: "35px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "transparent",
                  mt: "15px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600 !important",
                    backgroundColor: "transparent",
                    fontSize: "14px",
                  }}
                >
                  نام شما
                </Typography>
                <Box
                  sx={{
                    borderRadius: "5px",
                    overflow: "hidden",
                    width: "610px",
                    mt: "5px",
                  }}
                >
                  <Input
                    disableUnderline
                    sx={{
                      width: "100%",
                      height: "40px",
                      borderRadius: "5px",
                      padding: "5px",
                      backgroundColor: "#fffdf5",
                      border: "1px solid #b3b3b3",
                      "& .MuiInputBase-input": {
                        height: "100%",
                        padding: "0 5px",
                      },
                      "&.Mui-focused": {
                        border: "1px solid #EFA71A",
                        backgroundColor: "#fff",
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  mt: "15px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600 !important",
                    backgroundColor: "transparent",
                    fontSize: "14px",
                  }}
                >
                  ایمیل شما
                </Typography>
                <Box
                  sx={{
                    borderRadius: "5px",
                    overflow: "hidden",
                    width: "610px",
                    mt: "5px",
                  }}
                >
                  <Input
                    disableUnderline
                    sx={{
                      width: "100%",
                      height: "40px",
                      borderRadius: "5px",
                      padding: "5px",
                      backgroundColor: "#fffdf5",
                      border: "1px solid #b3b3b3",
                      "& .MuiInputBase-input": {
                        height: "100%",
                        padding: "0 5px",
                      },
                      "&.Mui-focused": {
                        border: "1px solid #EFA71A",
                        backgroundColor: "#fff",
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  mt: "15px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600 !important",
                    backgroundColor: "transparent",
                    fontSize: "14px",
                  }}
                >
                  موضوع
                </Typography>
                <Box
                  sx={{
                    borderRadius: "5px",
                    overflow: "hidden",
                    width: "610px",
                    mt: "5px",
                  }}
                >
                  <Input
                    disableUnderline
                    sx={{
                      width: "100%",
                      height: "40px",
                      borderRadius: "5px",
                      padding: "5px",
                      backgroundColor: "#fffdf5",
                      border: "1px solid #b3b3b3",
                      "& .MuiInputBase-input": {
                        height: "100%",
                        padding: "0 5px",
                      },
                      "&.Mui-focused": {
                        border: "1px solid #EFA71A",
                        backgroundColor: "#fff",
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  mt: "15px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600 !important",
                    backgroundColor: "transparent",
                    fontSize: "14px",
                  }}
                >
                  پیغام شما (اختیاری)
                </Typography>
                <TextField
                  multiline
                  minRows={10}
                  variant="standard"
                  placeholder="اینجا متن خود را بنویسید..."
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    width: "610px",
                    borderRadius: "5px",
                    backgroundColor: "#fffdf5",
                    border: "1px solid #b3b3b3",
                    "& .MuiInputBase-root": {
                      borderRadius: "5px",
                      padding: "5px",
                      height: "100%",
                    },
                    "& .MuiInputBase-input": {
                      height: "100%",
                      padding: "0 5px",
                      alignItems: "flex-start",
                    },
                    "& .Mui-focused": {
                      border: "1px solid #EFA71A",
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  backgroundColor: "transparent",
                }}
              >
                <Box
                  sx={{
                    width: "610px",
                    height: "45px",
                    borderRadius: "5px",
                    backgroundColor: "#EFA71A",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "25px",
                    "&:hover": {
                      backgroundColor: "#313131",
                    },
                    "&:hover P": {
                      backgroundColor: "#313131",
                    },
                    cursor: "pointer",
                    transition:"all 0.5s ease"
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "#EFA71A",
                      fontWeight: "600 !important",
                      color: "#fff",
                    }}
                  >
                    ثبت
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "43vw",
            maxWidth: "43vw",
            height: "647px",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            mt: "195px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <Box
                sx={{
                  width: "452px",
                  borderRadius: "15px",
                  boxShadow: "0px 5px 40px rgba(239, 167, 26, 0.6)",
                  mt: "-145px",
                  overflow: "hidden",
                }}
              >
                <Image src={image} alt="#" />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  backgroundColor: "#fff",
                  mt: "50px",
                  gap: "25px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    gap: "10px",
                    direction: "rtl",
                    width: "215px",
                  }}
                >
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "16px",
                      border: "1px solid #EFA71A",
                      "&:hover": {
                        backgroundColor: "#EFA71A",
                      },
                      "&:hover svg": {
                        fill: "#fff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <EmailIcon
                      sx={{
                        backgroundColor: "transparent",
                        fill: "#EFA71A",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      mt: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "#b3b3b3",
                        fontSize: "14px",
                      }}
                    >
                      ارسال ایمیل
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "#1F1F1F",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#EFA71A",
                        },
                      }}
                    >
                      info@admin.com
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    gap: "10px",
                    direction: "rtl",
                    width: "215px",
                  }}
                >
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "16px",
                      border: "1px solid #EFA71A",
                      "&:hover": {
                        backgroundColor: "#EFA71A",
                      },
                      "&:hover svg": {
                        fill: "#fff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <LocalPhoneIcon
                      sx={{
                        backgroundColor: "transparent",
                        fill: "#EFA71A",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      mt: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "#b3b3b3",
                        fontSize: "14px",
                      }}
                    >
                      تلفن
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "#1F1F1F",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#EFA71A",
                        },
                      }}
                    >
                      021-111111111
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    gap: "10px",
                    direction: "rtl",
                    width: "215px",
                  }}
                >
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "16px",
                      border: "1px solid #EFA71A",
                      "&:hover": {
                        backgroundColor: "#EFA71A",
                      },
                      "&:hover svg": {
                        fill: "#fff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <QueryBuilderIcon
                      sx={{
                        backgroundColor: "transparent",
                        fill: "#EFA71A",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      mt: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "#b3b3b3",
                        fontSize: "14px",
                      }}
                    >
                      ارسال ایمیل
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "#1F1F1F",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#EFA71A",
                        },
                      }}
                    >
                      info@admin.com
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    gap: "10px",
                    direction: "rtl",
                    width: "215px",
                  }}
                >
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "16px",
                      border: "1px solid #EFA71A",
                      "&:hover": {
                        backgroundColor: "#EFA71A",
                      },
                      "&:hover svg": {
                        fill: "#fff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        backgroundColor: "transparent",
                        fill: "#EFA71A",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      mt: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "#b3b3b3",
                        fontSize: "14px",
                      }}
                    >
                      ارسال ایمیل
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "transparent",
                        color: "#1F1F1F",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#EFA71A",
                        },
                      }}
                    >
                      info@admin.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "455px",
                height: "250px",
                borderRadius: "20px",
                overflow: "hidden",
                mt: "40px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.233012345!2d51.3376104!3d35.7007576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe0576a5de99%3A0x2364a66fc5c7eb41!2sTehran%2C%20Azadi%20Sq%2C%20Iran!5e0!3m2!1sen!2sus!4v1695398765432!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
