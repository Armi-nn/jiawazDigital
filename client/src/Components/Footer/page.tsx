"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/assets/logo_white.png";
import enamad from "@/assets/enamad.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from "@emotion/styled";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const BoxItem = styled(Box)({
  backgroundColor: "transparent",
  display: "flex",
  cursor: "pointer",
  gap: "5px",
  justifyContent: "start",
  alignItems: "center",
  transition: "all 0.5s ease",
  "&:hover": {
    gap: "10px",
  },
  "&:hover svg": {
    fill: "#EFA71A",
  },
  "& svg": {
    backgroundColor: "transparent",
    fill: "#b3b3b3",
    fontSize: "20px",
    transition: "all 0.5s ease",
  },
  "& p": {
    backgroundColor: "transparent !important",
    color: "#b3b3b3",
    transition: "all 0.5s ease",
    fontSize: "14px",
  },
  "&:hover p": {
    color: "#fff",
  },
});

const BoxBtn = styled(Box)({
  width: "45px",
  height: "45px",
  backgroundColor: "#D48817",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  outline: "1px solid #D48817",
  outlineOffset: "3.5px",

  cursor: "pointer",
  "&:hover": {
    outline: "2px solid #EFA71A",
    outlineOffset: "0px",
    transition: "all 0.5s ease",
  },
  "& svg": {
    backgroundColor: "#D48817",
  },
});

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#313131",
          width: "99vw",
          height: "480px",
          position: "relative",
          direction: "rtl",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          mt: "50px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "transparent",
          }}
        >
          <Box
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "space-between !important",
              px: "80px",
              pt: "40px",
              alignItems: "center",
            }}
          >
            <Image
              src={image}
              alt="logo"
              style={{
                width: "145px",
                height: "65px",
                backgroundColor: "transparent",
              }}
            />

            <Box
              sx={{
                backgroundColor: "transparent",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  width: "750px",
                  pr: "50px",
                  fontSize: "13px",
                }}
              >
                جیاواز یک پوسته حرفه‌ای وردپرس با طراحی مدرن ایرانی پسند است که
                باتوجه به امکانات و قابلیت های زیاد آن، برای طراحی وب سایت با
                انواع موضوعات مناسب میباشد. پوسته جیاواز را میتوانید فقط از سایت
                راستچین تهیه کنید.
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "transparent",
                mr: "150px",
                display: "flex",
                gap: "20px",
              }}
            >
              <BoxBtn>
                <InstagramIcon />
              </BoxBtn>
              <BoxBtn>
                <TelegramIcon />
              </BoxBtn>
              <BoxBtn>
                <WhatsAppIcon />
              </BoxBtn>
              <BoxBtn>
                <XIcon />
              </BoxBtn>
              <BoxBtn>
                <LinkedInIcon />
              </BoxBtn>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "space-between",
              px: "85px",
              pl: "165px",
              pt: "45px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "54px",
                    height: "54px",
                    backgroundColor: "#D48817",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  <LocalPhoneIcon
                    sx={{
                      backgroundColor: "#D48817",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "transparent",
                      color: "#b3b3b3",
                      fontSize: "14px",
                    }}
                  >
                    تلفن پشتیبانی
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "transparent",
                      color: "#FFFFFF",
                    }}
                  >
                    021956262
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "54px",
                    height: "54px",
                    backgroundColor: "#D48817",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  <EmailIcon
                    sx={{
                      backgroundColor: "#D48817",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
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
                      color: "#FFFFFF",
                    }}
                  >
                    info@admin.com
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "54px",
                    height: "54px",
                    backgroundColor: "#D48817",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      backgroundColor: "#D48817",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "transparent",
                      color: "#b3b3b3",
                      fontSize: "14px",
                    }}
                  >
                    آدرس
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "transparent",
                      color: "#FFFFFF",
                    }}
                  >
                    تهران شهرک بهار خیابان لاجوردی کوچه خیام
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "#EFA71A",
                  backgroundColor: "transparent",
                  fontSize: "17px",
                  fontWeight: "600 !important",
                }}
              >
                دسترسی سریع
              </Typography>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>فروشگاه</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>تماس با ما</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>وبلاگ</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>درباره ما</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>سبد خرید</Typography>
                </BoxItem>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "#EFA71A",
                  backgroundColor: "transparent",
                  fontSize: "17px",
                  fontWeight: "600 !important",
                }}
              >
                خدمات مشتریان
              </Typography>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>سوالات متداول</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>شرایط تحویل و ارائه کالا</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>نحوه ثبت سفارش</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>نحوه ارسال سفارش</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>قوانین مرجوعی کالا</Typography>
                </BoxItem>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "#EFA71A",
                  backgroundColor: "transparent",
                  fontSize: "17px",
                  fontWeight: "600 !important",
                }}
              >
                دسته محصولات
              </Typography>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>موبایل</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>لپ‌تاپ و تبلت</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>کامپیوتر و ماشین اداری</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>هدفون و هندزفری</Typography>
                </BoxItem>
                <BoxItem>
                  <KeyboardBackspaceIcon />
                  <Typography>ساعت و بند هوشمند</Typography>
                </BoxItem>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "#EFA71A",
                  backgroundColor: "transparent",
                  fontSize: "17px",
                  fontWeight: "600 !important",
                }}
              >
                مجوزها
              </Typography>

              <Box
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "110px",
                    height: "110px",
                    borderRadius: "15px",
                    overflow: "hidden  ",
                  }}
                >
                  <Image src={enamad} fill alt="#" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
              mt: "85px",
            }}
          >
            <Box
              sx={{
                width: "700px",
                height: "50px",
                borderRadius: "25px 25px 0px 0px",
                backgroundColor: "#EFA71A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "80px",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                کلیه حقوق متعلق به جیاواز میباشد.
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                پیاده سازی توسط : آرمین حسینی
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
