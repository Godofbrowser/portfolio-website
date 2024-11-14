import { AppIcon } from '@/components/ui/AppIcon';
import { Link2 } from 'lucide-react';


export const useAppData = () => {
    const disableHeaderNavigations = true
    const appTitle = 'Portfolio'
    const appDescription = 'Full-stack software engineer specializing in web and mobile applications. I build scalable, user-focused solutions with strong front-end and back-end expertise. Passionate about creating seamless, high-performance applications that bring ideas to life with precision and innovation.'
    const person = {
      userFullName: "Emeke Ajeh",
      userPhoto: "/images/ajeh-emeke.jpg",
      userHeadline: 'Full Stack Engineer',
    };
    

    const platformLinks = [
      { link: "", label: "LinkedIn", icon: [AppIcon, {name: 'linked-in'}] },
      { link: "", label: "Github", icon: [AppIcon, {name: 'github'}] },
      { link: "", label: "StackOverflow", icon: [AppIcon, {name: 'stack-overflow'}] },
      { link: "", label: "Upwork", icon: [AppIcon, {name: 'upwork'}] },
    ];

    const navLinks = [
        { label: 'Expertise', link: ''},
        { label: 'History', link: ''},
        { label: 'Projects', link: ''},
        { label: 'Contact', link: ''},
    ]

    return { appTitle, appDescription, person, platformLinks, navLinks, disableHeaderNavigations };
}