"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
const Dropdown = styled(Box)({
  direction: "rtl",
  position: "absolute",
  top: "75%",
  right: 0,
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 -6px 20px rgba(0,0,0,0.08)",
  padding: "10px 10px",
  minWidth: "160px",
  display: "none",
  flexDirection: "column",
  cursor: "default",
  gap: "5px",
  zIndex: 10,

  "& p": {
    cursor: "pointer",
    color: "#1F1F1F !important",
    padding: "5px",
    borderRadius: "8px",
    background: "linear-gradient(to left, #FCF4E2 50%, #fff 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "left",
    transition: "all 0.4s ease",
  },

  "& p:hover": {
    color: "#EFA71A !important",
    backgroundPosition: "right",
  },
});

const FlexBox = styled(Box)({
  display: "flex",
});

const NavbarItem = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "3px",
  position: "relative",
  padding: "0 6px",
  backgroundColor: "#fff",
  "& svg": { transition: "all 0.3s", fill: "#000" },
  "& p": { transition: "color 0.3s", fontSize: "14px" },
  "&:hover svg": { transform: "rotate(180deg)", fill: "#E8A20D" },
  "&:hover p": { color: "#E8A20D" },
  "&:hover div": { display: "flex" },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 20,
    right: 0,
    height: "2px",
    width: 0,
    backgroundColor: "#E8A20D",
    transition: "width 0.3s",
  },
  "&:hover::after": {
    width: "100%",
    left: "auto",
  },
});

const NavbarBtn = styled(Box)({
  display: "flex",
  backgroundColor: "#EFA71A",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    outline: "1px solid #EFA71A ",
    outlineOffset: "3px",
  },
  boxShadow: "0 2px 9px #EFA71A",
  height: 40,
  width: 42,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
});

const MegaMenu = styled(Box)({
  direction: "rtl",
  position: "absolute",
  top: "75%",
  right: 0,
  width: "900px",
  backgroundColor: "#fff !important",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  padding: "20px 40px",
  display: "none",
  flexDirection: "row",
  gap: "60px",
  overflowX: "auto",
  zIndex: 10,
  "&::-webkit-scrollbar": { height: "6px" },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ccc",
    borderRadius: "3px",
  },
  cursor: "default",
});

const MegaColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minWidth: "150px",
  gap: "8px",
  backgroundColor: "#fff !important",

  "& .title": {
    fontWeight: "700 !important",
    fontSize: "14px !important",
    color: "#1F1F1F !important",
    marginBottom: "6px",
    paddingRight: "8px",
    borderRight: "3px solid #E8A20D !important",
    cursor: " pointer",
    backgroundColor: "#fff !important",
    borderRadius: "0 !important",
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },

  "& p": {
    margin: 0,
    padding: "4px 8px",
    cursor: "pointer",
    borderRadius: "4px",
    color: "#1F1F1F !important",
    backgroundColor: "#fff !important",
    background: "linear-gradient(to left, #FCF4E2 50%, #fff 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "left",
    transition: "all 0.4s ease",
  },

  "& p:not(.title):hover": {
    backgroundColor: "#FCF4E2",
    backgroundPosition: "right",
  },
  "& p:hover": {
    color: "#EFA71A !important",
  },
});

export default function Navbar() {
  return (
    <FlexBox sx={{ justifyContent: "center" }}>
      <FlexBox
        sx={{
          width: "88vw",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <FlexBox sx={{ justifyContent: "space-between", padding: "14px 5px" }}>
          <FlexBox sx={{ gap: "10px" }}>
            <Link href={"/contact-us"}>
              <Typography
                sx={{
                  transition: "all .4s",
                  fontSize: "14px",
                  "&:hover": {
                    color: "#E8A20D",
                  },
                }}
              >
                سوالات متداول
              </Typography>
            </Link>
            <Link href={"/contact-us"}>
              <Typography
                sx={{
                  transition: "all .4s",
                  fontSize: "14px",
                  "&:hover": {
                    color: "#E8A20D",
                  },
                }}
              >
                تماس با ما
              </Typography>
            </Link>
          </FlexBox>
          <FlexBox sx={{ gap: "5px" }}>
            <Typography
              sx={{
                cursor: "pointer",
                transition: "all .4s",
                "&:hover": {
                  color: "#E8A20D",
                },
              }}
            >
              02123456789
            </Typography>
            <Typography
              sx={{
                fontSize: "14.5px",
              }}
            >
              : پشتیبانی تلفنی
            </Typography>
          </FlexBox>
        </FlexBox>

        {/*  */}

        <FlexBox
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            height: "80px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            borderRadius: "20px",
            alignItems: "center",
            padding: "0px 20px",
            justifyContent: "space-between",
          }}
        >
          {/* end */}
          <FlexBox sx={{ gap: "12px" }}>
            <Box
              sx={{
                "&:hover": {
                  outline: "1px solid #F9DB9B ",
                  outlineOffset: "7px",
                },
                borderRadius: "8px",
              }}
            >
              <Badge
                badgeContent="0"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#3C3C3C",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    mt: "5px",
                    mr: "3px",
                    pb: "3px",
                    cursor:"pointer"
                  },
                }}
              >
                <NavbarBtn>
                  <ShoppingBagIcon
                    sx={{
                      backgroundColor: "#EFA71A",
                      fill: "#FFFFFF",
                      fontSize: "20px",
                    }}
                  />
                </NavbarBtn>
              </Badge>
            </Box>
            <Box
              sx={{
                "&:hover": {
                  outline: "1px solid #F9DB9B ",
                  outlineOffset: "7px",
                },
                borderRadius: "8px",
              }}
            >
              <FlexBox
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    outline: "1px solid #EFA71A ",
                    outlineOffset: "3px",
                    backgroundColor: "#EFA71A",
                  },
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  "&:hover p": {
                    color: "#FFF",
                    backgroundColor: "#EFA71A",
                  },
                  "&:hover svg": {
                    fill: "#FFF",
                    backgroundColor: "#EFA71A",
                  },
                  height: 40,
                  width: 122,
                  backgroundColor: "#FCF4E2 ",
                  overflow: "hidden  ",
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: "#FCF4E2 ",
                    fontSize: "15px",
                    fontWeight: "600 !important",
                    transition: "all 0.3s ease",
                  }}
                >
                  حساب کاربری
                </Typography>
                <LoginIcon
                  sx={{
                    backgroundColor: "#FCF4E2 ",
                    fill: "#FCB364",
                    fontSize: "25px",
                    transition: "all 0.3s ease",
                  }}
                />
              </FlexBox>
            </Box>
            <Box
              sx={{
                "&:hover": {
                  outline: "1px solid #F9DB9B ",
                  outlineOffset: "7px",
                },
                borderRadius: "8px",
              }}
            >
              <NavbarBtn
                sx={{
                  boxShadow: "0 0 0 !important",
                  "&:hover svg": {
                    fill: "#FFF",
                    backgroundColor: "#EFA71A",
                    transition: "all 0.3s ease",
                  },
                  "&:hover": {
                    backgroundColor: "#EFA71A !important",
                    transition: "all 0.3s ease",
                  },
                  backgroundColor: "#FCF4E2 !important",
                }}
              >
                <SearchIcon
                  sx={{
                    backgroundColor: "#FCF4E2",
                    fill: "#FCB364",
                    transition: "all 0.3s ease",
                  }}
                />
              </NavbarBtn>
            </Box>
          </FlexBox>
          {/* center */}
          <FlexBox sx={{ gap: "33px", backgroundColor: "#FFFFFF" }}>
            <FlexBox
              sx={{
                backgroundColor: "#FFFFFF",
              }}
            >
              <NavbarItem>
                <KeyboardArrowDownIcon sx={{ backgroundColor: "#FFFFFF" }} />
                <Typography sx={{ backgroundColor: "#FFFFFF" }} component="p">
                  ساعت هوشمند
                </Typography>
                <Dropdown>
                  <Typography>ساعت هوشمند</Typography>
                  <Typography>لوازم جانبی ساعت هوشمند</Typography>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <KeyboardArrowDownIcon sx={{ backgroundColor: "#FFFFFF" }} />
                <Typography sx={{ backgroundColor: "#FFFFFF" }} component="p">
                  هدفون و هندزفری
                </Typography>
                <Dropdown>
                  <Typography>هدفون</Typography>
                  <Typography>هندزفری</Typography>
                  <Typography>هدست</Typography>
                </Dropdown>
              </NavbarItem>
              <NavbarItem>
                <KeyboardArrowDownIcon
                  sx={{ backgroundColor: "#FFFFFF", height: 20 }}
                />
                <Typography sx={{ backgroundColor: "#FFFFFF" }} component="p">
                  لپ تاپ و تبلت
                </Typography>
                <Dropdown>
                  <Typography>تبلت</Typography>
                  <Typography>لپ تاپ</Typography>
                </Dropdown>
              </NavbarItem>
              <NavbarItem sx={{ position: "relative" }}>
                <KeyboardArrowDownIcon
                  sx={{ backgroundColor: "#FFFFFF", height: 20 }}
                />
                <Typography component="p" sx={{ backgroundColor: "#FFFFFF" }}>
                  کامپیوتر
                </Typography>

                <MegaMenu>
                  <MegaColumn>
                    <Typography className="title">مانیتور</Typography>
                    <Typography>مانیتور ال جی</Typography>
                    <Typography>مانیتور ام اس آی</Typography>
                    <Typography>مانیتور ایسر</Typography>
                    <Typography>مانیتور ایسوس</Typography>
                    <Typography>مانیتور بنیکو</Typography>
                    <Typography>مانیتور جی پلاس</Typography>
                    <Typography>مانیتور سامسونگ</Typography>
                  </MegaColumn>

                  <MegaColumn>
                    <Typography className="title">قطعات کامپیوتر</Typography>
                    <Typography>پردازنده CPU</Typography>
                    <Typography>خنک کننده پردازنده</Typography>
                    <Typography>کیس کامپیوتر</Typography>
                    <Typography>کارت شبکه</Typography>
                    <Typography>کارت گرافیک</Typography>
                    <Typography>مادربرد</Typography>
                    <Typography>پاور و منبع تغذیه</Typography>
                    <Typography>رم کامپیوتر</Typography>
                    <Typography>DVD رایتر</Typography>
                  </MegaColumn>

                  <MegaColumn>
                    <Typography className="title">
                      لوازم جانبی کامپیوتر
                    </Typography>
                    <Typography>ست ماوس و کیبورد</Typography>
                    <Typography>ماوس</Typography>
                    <Typography>ماوس بیاند</Typography>
                    <Typography>ماوس پد</Typography>
                    <Typography>ماوس تسکو</Typography>
                    <Typography>ماوس جنیوس</Typography>
                    <Typography>ماوس رپو</Typography>
                    <Typography>ماوس گرین</Typography>
                    <Typography>ماوس گیمینگ</Typography>
                    <Typography>ماوس لاجیتک</Typography>
                    <Typography>کیبورد</Typography>
                  </MegaColumn>

                  <MegaColumn>
                    <Typography className="title">کیس اسمبل شده</Typography>
                    <Typography>سیستم اداری</Typography>
                    <Typography>سیستم گیمینگ</Typography>
                    <Typography>مینی PC</Typography>
                  </MegaColumn>
                  <MegaColumn>
                    <Typography className="title">ماشین های اداری</Typography>
                    <Typography>کارتریج</Typography>
                    <Typography>کاغذ</Typography>
                    <Typography>اسکنر</Typography>
                    <Typography>بارکدخوان</Typography>
                    <Typography>پرینتر جوهر افشان</Typography>
                    <Typography>پرینتر سوزنی</Typography>
                  </MegaColumn>
                </MegaMenu>
              </NavbarItem>

              <NavbarItem>
                <KeyboardArrowDownIcon
                  sx={{ backgroundColor: "#FFFFFF", height: 20 }}
                />
                <Typography sx={{ backgroundColor: "#FFFFFF" }}>
                  موبایل
                </Typography>

                <Dropdown>
                  <Typography>گوشی موبایل</Typography>
                  <Typography>پاوربانک</Typography>
                  <Typography>لوازم جانبی موبایل</Typography>
                  <Typography>قطعات موبایل</Typography>
                </Dropdown>
              </NavbarItem>
              <NavbarItem sx={{ pl: "7px" }}>
                <Typography sx={{ backgroundColor: "#FFFFFF" }}>
                  خانه
                </Typography>
              </NavbarItem>
            </FlexBox>
            <FlexBox
              sx={{
                height: 75,
                width: 115,
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                overflow: "hidden",
                justifyContent: "center",
              }}
            >
              <Image
                src={logo}
                alt="logo"
                style={{ objectFit: "contain", backgroundColor: "#FFFFFF" }}
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
