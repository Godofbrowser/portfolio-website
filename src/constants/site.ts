import {AppIcon} from "@/components/ui/AppIcon";

export const GA_TRACKING_ID = 'G-77ML118EGM'
export const isProduction = process.env.NODE_ENV === 'production'
export const hasGoneLive = true
export const disableHeaderNavigations = true
export const appTitle = 'Portfolio'
export const appUrl: string = (process.env.NETLIFY ? process.env.URL : process.env.APP_URL) || ''
export const appDescription = 'Full-stack software engineer specializing in web and mobile applications. I build scalable, user-focused solutions with strong front-end and back-end expertise'
export const person = {
    userFullName: "Emeke Ajeh",
    email: 'ajemeke@gmail.com',
    userPhoto: "/images/ajeh-emeke.webp",
    userHeadline: 'Full Stack Engineer',
    about: "I'm a focused and quick-learning software developer with experience building highly efficient and scalable web applications since 2016. A critical thinker with strong analytical and collaboration skills, I have a keen eye for security and maintainability",
};


export const platformLinks = [
    { link: "https://www.linkedin.com/in/godofbrowser/", label: "LinkedIn", icon: [AppIcon, {name: 'linked-in'}] },
    { link: "https://github.com/Godofbrowser", label: "Github", icon: [AppIcon, {name: 'github'}] },
    { link: "https://stackoverflow.com/users/6820220/ajeh-emeke-jnr", label: "StackOverflow", icon: [AppIcon, {name: 'stack-overflow'}] },
    // { link: "https://www.upwork.com/freelancers/~01e4ba9941a5659bb3", label: "Upwork", icon: [AppIcon, {name: 'upwork'}] },
    { link: `mailto:${person.email}`, label: "Email", icon: [AppIcon, {name: 'envelope'}] },
];

export const navLinks = [
    { label: 'About', link: ''},
    { label: 'Skills', link: ''},
    { label: 'Projects', link: ''},
    { label: 'Contact', link: ''},
]
