"use client";
import React, { useState } from 'react'
import Course from '../courses/Course';

const FilterCourse = ({topCategorys, courses}) => {
  const [id, setId] = useState();
  const handleClick = (id) => {
    setId(id);
  };


  return (
    <div>
        <Course selectedId={id} handleClick={handleClick} courses={courses} topCategorys={topCategorys}></Course>
    </div>
  )
}

export default FilterCourse