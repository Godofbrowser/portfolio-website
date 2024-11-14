import { Link2 } from 'lucide-react';


export const useAppData = () => {
    const person = {
      userFullName: "Emeke Ajeh",
      userPhoto: "/images/ajeh-emeke.jpg",
      userHeadline: 'Full Stack Engineer',
    };
    

    const platformLinks = [
      { link: "", label: "Github", icon: Link2 },
      { link: "", label: "LinkedIn", icon: Link2 },
      { link: "", label: "StackOverflow", icon: Link2 },
    ];

    const navLinks = [
        { label: 'Expertise', link: ''},
        { label: 'History', link: ''},
        { label: 'Projects', link: ''},
        { label: 'Contact', link: ''},
    ]

    return { person, platformLinks, navLinks };
}