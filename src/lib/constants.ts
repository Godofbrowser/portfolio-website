import { AppIcon } from "@/components/ui/AppIcon";

export const disableHeaderNavigations = true
export const appTitle = 'Portfolio'
export const appUrl: string = (process.env.NETLIFY ? process.env.URL : process.env.APP_URL) || ''
export const appDescription = 'Full-stack software engineer specializing in web and mobile applications. I build scalable, user-focused solutions with strong front-end and back-end expertise'
export const person = {
  userFullName: "Emeke Ajeh",
  userPhoto: "/images/ajeh-emeke.jpg",
  userHeadline: 'Full Stack Engineer',
};


export const platformLinks = [
  { link: "", label: "LinkedIn", icon: [AppIcon, {name: 'linked-in'}] },
  { link: "", label: "Github", icon: [AppIcon, {name: 'github'}] },
  { link: "", label: "StackOverflow", icon: [AppIcon, {name: 'stack-overflow'}] },
  { link: "", label: "Upwork", icon: [AppIcon, {name: 'upwork'}] },
];

export const navLinks = [
    { label: 'Expertise', link: ''},
    { label: 'History', link: ''},
    { label: 'Projects', link: ''},
    { label: 'Contact', link: ''},
]
