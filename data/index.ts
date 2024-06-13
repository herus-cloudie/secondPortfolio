export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with work hours & colleague",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a podcast app powered by AI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to schedule a call?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Pars Style - Ecommerce app",
    des: "Discover the future of online shopping with Pars Style , user-friendly interface designed to enhance your online retail experience",
    img: "/parsstylee.png",
    iconLists: ["/next.svg", "/tail.svg", "/nextauth.png", "/shadcn.png", "/db.png"],
    link: "https://parsstyle.vercel.app",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/yoom.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "http://yoom-videocall.vercel.app",
  },

];

export const testimonials = [
  {
    quote:
      "The standout aspects of this project involved mastering the 'Stream.io API' and implementing custom hooks and server actions. Noteworthy features include friend connections, scheduling calls, and inviting users to meetings. The user section allows requesting, searching, and managing friend requests, while Clerk authentication ensures secure access. Additionally, users can record and access their previous calls.",
    name: "Yoom",
    title: "Video call and meeting app",
    img:"/yoom.png"
  },
  {
    quote:
      "The e-commerce online shop features a sleek UI, product filtering, and profile editing, all powered with my own Api. Users can manage their purchase and apply discount codes, with data stored in MongoDB. Next-auth handles authentication, ensuring secure sign-up/sign-in and restricted access for unauthorized users.",
    name: "Pars style",
    title: "Ecommerce-online shop app",
    img: "/parsstylee.png"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "RBAC",
    desc: "I'm able to implement Role-based access control, which modern businesses that interact with users need.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Admin panel",
    desc: "Control panel is essential in web application & necessary. I can make it user-friendly and robust.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Api",
    desc: "Proficient in crafting robust APIs using Next.js, ensuring seamless communication between front-end and back-end systems",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Authentication & Cookie",
    desc: "Thanks to Next-auth , Clerk ,  Next.js Api and my personal experience, I am capable of implementing authentication and cookies. by the way, page security is ensured!",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link : 'https://github.com/herus-cloudie'
  },
  {
    id: 2,
    img: "/telegram.svg",
    link : "https://t.me/Herus_soll"
  },
  {
    id: 3,
    img: "/link.svg",
    link : "https://www.linkedin.com/in/amirmoslemi/"
  },
];
