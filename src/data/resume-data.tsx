import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mahdyar Alipor",
  initials: "MA",
  location: "Iran, Karaj",
  locationLink: "https://www.google.com/maps/place/Karaj,+Alborz",
  about:
    "Detail-oriented Junior Back-End Developer committed to building high-quality products.",
  summary: (
    <>
Back-End Developer specializing in Go, PHP, and the Laravel framework, focused on building scalable, secure, and efficient systems. Experienced in designing RESTful APIs, optimizing databases, and implementing modern architectures. Passionate about solving technical challenges and improving software performance.
    </>
  ),
  avatarUrl: "",
  contact: {
    email: "mahdyaralipor0@gmail.com",
    tel: "+989303649131",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Mahdyaralipor",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mahdyaralipor/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [],
  work: [],
  skills: [
    "Tailwind CSS",
    "Laravel",
    "Git",
    "Go",
    "php",
    "MySQL",
    "GitHub",
    "Linux",
    "Ubuntu",
    "Html",
    "Css",
    "React",
    "Vue.Js",
    "OOP",
    "Design Patterns",
    "RestFul Api",
    "MongoDB"
  ],
  projects: [],
} as const;
