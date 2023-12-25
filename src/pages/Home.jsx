import {
  Brands,
  Business,
  Courses,
  HeroSection,
  Instructor,
  Testimonials,
  TopCategories,
} from "../components";

function Home() {
  return (
    <>
      <HeroSection />
      <Brands />
      <Courses />
      <Testimonials />
      <TopCategories />
      <Business />
      <Instructor />
    </>
  );
}

export default Home;
