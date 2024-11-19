import { AppIcon } from "@/components/ui/AppIcon";
import { IProject } from "@/interfaces/project.interface";

export const disableHeaderNavigations = true
export const appTitle = 'Portfolio'
export const appUrl: string = (process.env.NETLIFY ? process.env.URL : process.env.APP_URL) || ''
export const appDescription = 'Full-stack software engineer specializing in web and mobile applications. I build scalable, user-focused solutions with strong front-end and back-end expertise'
export const person = {
  userFullName: "Emeke Ajeh",
  email: 'ajemeke@gmail.com',
  userPhoto: "/images/ajeh-emeke.jpg",
  userHeadline: 'Full Stack Engineer',
  about: "I'm a focused and quick-learning software developer with more than 7 years of experience in developing highly efficient and scalable web applications. A critical thinker, with strong analytical and collaboration skills with an eye for security and maintainability",
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

const imageBase = ''
export const projects: IProject[] = [
  {
    title: 'KittieFight',
    tags: [],
    tech: ["React", "Web3", "Truffle", "Ganache", "Solidity"],
    links: {
      code: "https://github.com/kittiefight",
      reference: "https://www.youtube.com/watch?v=TDXOJYbFRiw",
    },
    features: [
      "React-Based responsive Frontend",
      "Secure and efficient deployment of smart contracts on Ethereum mainnet and test networks",
      "A landing page enabling investors to acquire tokens during initial offerings (e.g., ICOs).",
      "Integration with Web3 for interacting with Ethereum smart contracts",
      "Secure handling of transactions and token acquisitions through blockchain technology",
    ],
    description: 'KittieFight is a gamified mortal kombat for cryptokitties, which is a crowd-driven real-time Dapp fighting game on the Ethereum blockchain',
    role: 'During my time at SuperDao’s KittieFights project, I gained hands-on experience in blockchain development with Solidity, where I wrote and deployed smart contracts on the Ethereum mainnet and test networks. I utilized Web3 technology to interact with these contracts and contributed to the design and maintenance of React components for the KittieFights web application. Additionally, I played a key role in developing the product’s landing page, enabling investors to acquire tokens during the initial offerings.',
    images: [
      {
        url: `${imageBase}/images/portfolio/kittiefight/kittiefight-connected.png`,
        width: 1451,
        height: 872,
      },
      {
        url: `${imageBase}/images/portfolio/kittiefight/kittiefight-paper.png`,
        width: 1472,
        height: 900,
      },
    ],
  }
]