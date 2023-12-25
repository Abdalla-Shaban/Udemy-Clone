import { Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useContext } from "react";
import { CoursesContext } from "../../context/CourseContext";
import CoursesCard from "./CoursesCard";
import "swiper/css";
import "swiper/css/navigation";
function CoursesSwiper({ tab }) {
  const {
    data: { courses },
  } = useContext(CoursesContext);
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      slidesPerGroup={3}
      breakpoints={{
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        590: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 1,
        },
        878: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 2,
        },
        1110: {
          slidesPerView: 4,
          slidesPerGroup: 3,
          spaceBetween: 2,
        },
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      <Stack direction="row" justifyContent="center">
        {courses
          .filter((course) => course.category === tab.name)
          .map((item, i) => (
            <SwiperSlide key={i} style={{ padding: "20px 0" }}>
              <CoursesCard course={item} index={i} tab={tab} />
            </SwiperSlide>
          ))}
      </Stack>
    </Swiper>
  );
}

export default CoursesSwiper;
