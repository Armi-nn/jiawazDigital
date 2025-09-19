import { Box } from "@mui/material";
import Image from "next/image";
import image from "@/assets/6-33.png";
import image2 from "@/assets/6-44.png";
import image3 from "@/assets/flull-copy.png";
import StorySlider from "@/Components/Home/StorySlider/page";
import BannerSlider from "@/Components/Home/BannerSlider/page";
import CategorySlider from "@/Components/Home/CategorySlider/page";
import ProductSlider from "@/Components/Home/ProductSlider/page";
import BestCategory from "@/Components/Home/BestCategory/page";

export default function Home() {
  return (
    <>
      <StorySlider />
      <BannerSlider />
      <CategorySlider />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          mt: "40px",
        }}
      >
        <Box
          sx={{
            width: "42.8vw",
          }}
        >
          <Image
            style={{
              borderRadius: "25px",
              overflow: "hidden",
              cursor: "pointer",
            }}
            src={image2}
            alt="Tablet"
          />
        </Box>
        <Box
          sx={{
            width: "42.8vw",
          }}
        >
          <Image
            style={{
              borderRadius: "25px",
              overflow: "hidden",
              cursor: "pointer",
            }}
            src={image}
            alt="Tablet"
          />
        </Box>
      </Box>
      <ProductSlider />
      <BestCategory />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          mt: "155px",
        }}
      >
        <Box
          sx={{
            width: "86.5vw",
            height: "200px",
            position: "relative",
          }}
        >
          <Image
            style={{
              borderRadius: "25px",
              overflow: "hidden",
              cursor: "pointer",
            }}
            src={image3}
            alt="Tablet"
            fill
          />
        </Box>
      </Box>
    </>
  );
}
