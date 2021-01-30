import Home from "./components/Home/home";
import Skill from "./components/Skill/Skill";
import Education from "./components/Education/Education";
import Interest from "./components/Interested/Interest";
import Contact from "./components/Contact/Contact";
import FeedBack from "./components/FeedBack/FeedBack";

const router = [
  {
    path: "/my-cv",
    main: Home ,
    exact: true,
  },
  {
    path: "/skill",
    main: Skill ,
    exact: false,
  },
  {
    path: "/education",
    main: Education ,
    exact: false,
  },
  {
    path: "/interest",
    main: Interest ,
    exact: false,
  },
  {
    path: "/contact",
    main: Contact ,
    exact: false,
  },
  {
    path: "/feedback",
    main: FeedBack ,
    exact: false,
  },
];

export default router;
