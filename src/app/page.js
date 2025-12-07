import React from "react";
import Hero from "./homeComponents/Hero";
import About from "./homeComponents/About";
import Categorys from "./homeComponents/Categorys";
import Choose from "./homeComponents/Choose";
import FilterCourse from "./homeComponents/FilterCourse";
import Counter from "./homeComponents/Counter";
import Faq from "./homeComponents/Faq";
import Instructor from "./homeComponents/Instructor";
import Team from "./homeComponents/Team";
import Content from "./homeComponents/Content";
import News from "./homeComponents/News";

const page = async () => {
  // fetch courses
  const res = await fetch("http://localhost:5000/courses",  { cache: "no-store" });
  const courses = await res.json();

  // fetch top categories
  const res2 = await fetch("http://localhost:5000/topCategories",  { cache: "no-store" });
  const topCategorys = await res2.json();

  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Categorys></Categorys>
      <Choose></Choose>
      <FilterCourse
        courses={courses}
       topCategorys={topCategorys} 
      ></FilterCourse>
      <Counter></Counter>
      <Faq></Faq>
      <Instructor></Instructor>
      <Team/>
      <Content></Content>
      <News></News>
    </div>
  );
};

export default page;
