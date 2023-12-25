import { createContext } from "react";
import data from "../db/db.json";
export const CoursesContext = createContext({});
function CourseContext({ children }) {
  return (
    <CoursesContext.Provider value={{ data }}>
      {children}
    </CoursesContext.Provider>
  );
}

export default CourseContext;
