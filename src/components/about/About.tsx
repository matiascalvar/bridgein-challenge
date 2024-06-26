"use client";

import { Post as devType } from "@/types/interfaces";
import Link from "next/link";
import styles from "./About.module.css";

const developer: devType = {
  userId: 9999,
  id: "9999",
  title: "Front End Developer",
  body: "This app was developed as a personal challenge utilizing Next.js, Tailwind CSS, react-icons, and React with TypeScript. The application features a header, navigation menu, and main content area, enabling users to list posts, view comments for a specific post, and perform CRUD operations on comments. The project incorporates data from the public API at jsonplaceholder.typicode.com.",
  email: "matiasncalvar@gmail.com",
  name: "Matias Calvar",
  initials: "MC",
};

const AboutCard = () => {
  return (
    <div
      className={styles.AboutCard + " flex justify-center h-auto p-2.5 pt-0"}
      style={{ position: "relative", top: "-30px" }}
    >
      <div className="">
        <div
          key={developer.id}
          className={`lg:m-2.5 bg-white lg:w-[1000px] rounded-md shadow-md p-5`}
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center rounded-full bg-bi-red w-8 h-8 mr-2 text-white`}
            >
              {developer.initials}
            </div>

            <p className="text-bold">{developer.name}</p>

            <p className="text-bold mx-5 text-gray-400 select-none text-sm hidden lg:block">
              {developer.email}
            </p>
          </div>
          <p className="font-medium mt-1">{developer.title}</p>
          <p className="text-sm my-1">{developer.body}</p>

          <p className="mt-2 text-xs text-end">
            <Link href={"https://www.linkedin.com/in/matiascalvar/"}>
              See more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutCard;
