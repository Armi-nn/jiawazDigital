import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/assets/404.png";
import Link from "next/link";
import Navbar from "@/Components/Navbar/page";
import Footer from "@/Components/Footer/page";

export const metadata = {
  title: "برگه پیدا نشد | جیاواز",
  description: "متأسفیم! صفحه‌ای که دنبال آن بودید پیدا نشد.",
};

export default function notFond() {
  return (
    <>
      <Navbar />
      <Box>
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "700px",
              height: "420px",
              position: "relative",
            }}
          >
            <Image fill src={image} alt="404" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#EFA71A",
              fontSize: "37px",
              fontWeight: "bold !important",
              mt: "25px",
            }}
          >
            ! صفحه مورد نظر شما پیدا نشد
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href={"/"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #EFA71A",
                width: "200px",
                height: "55px",
                borderRadius: "50px",
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: "#EFA71A",
                },
                "&:hover p": {
                  color: "#fff",
                  backgroundColor: "#EFA71A",
                },
                cursor: "pointer",
                mt: "25px",
              }}
            >
              <Typography
                sx={{
                  color: "#EFA71A",
                  fontSize: "18px",
                  transition: "all 0.5s ease",
                }}
              >
                رفتن به صفحه اصلی
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
