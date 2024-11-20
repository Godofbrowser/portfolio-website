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
const imagesPlaceholder = [
  {
    url: `${imageBase}/images/portfolio/placeholder.png`,
    bgColor: '#dddddd',
    width: 600,
    height: 400,
  },
  {
    url: `${imageBase}/images/portfolio/placeholder.png`,
    bgColor: '#dddddd',
    width: 600,
    height: 400,
  },
]
const projectPlaceholder: Partial<IProject> = {
  features: [
    "Lorem Ipsum responsive UIs",
    "Quick and reliable delivery of lorem widgets on Ipsum production and dev servers",
    "A simple page allowing users to access placeholder text during initial previews.",
    "Integration with Ipsum for managing lorem text generation and interactions",
    "Reliable processing of placeholder strings and dynamic text updates in the system"
],
  description:
  "Lorem is a placeholder platform, a virtual lorem space where you can browse countless widgets in various categories from random text blocks to engaging filler paragraphs",
  role: "",
  images: imagesPlaceholder,
}
export const projects: IProject[] = [
  {
    title: "Payzone",
    tags: ["live"],
    tech: ["Vuejs", "Vuex", "Webpack", "SCSS", "HTML5", "Service Worker"],
    links: {
      demo: "https://payzone.ng",
    },
    features: [
      "Lorem Ipsum responsive UIs",
      "Quick and reliable delivery of lorem widgets on Ipsum production and dev servers",
      "A simple page allowing users to access placeholder text during initial previews.",
      "Integration with Ipsum for managing lorem text generation and interactions",
      "Reliable processing of placeholder strings and dynamic text updates in the system"
  ],
    description:
      "Payzone is a bills aggregation payment platform that provides customers of a merchant with convenient means to place orders, and pay for bills through flexible payment methods using their debit cards, transfer bank or USSD.",
    role: "",
    images: [
      {
        url: `${imageBase}/images/portfolio/payzone/landing-light.png`,
        bgColor: '#f0e1eb',
        width: 1451,
        height: 872,
      },
      {
        url: `${imageBase}/images/portfolio/payzone/landing-dark.png`,
        width: 1451,
        height: 872,
      },
      {
        url: `${imageBase}/images/portfolio/payzone/send.png`,
        width: 1451,
        height: 872,
      },
    ],
  },{
    ...(projectPlaceholder as IProject),
    title: "Developer portfolio",
    tags: ['live', 'oss'],
    tech: ["Typescript", "React", "Nextjs", "Radix-ui", "Shadcn-ui", "TailwindCSS"],
    links: {
      code: "https://github.com/Godofbrowser/portfolio-website/tree/main/src",
      demo: "https://emeke-ajeh.netlify.app/",
    },
    images: [
      {
        url: `${imageBase}/images/portfolio/developer-portfolio/preview1.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
      {
        url: `${imageBase}/images/portfolio/developer-portfolio/preview2.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
    ]
  },
  {
    title: "Vuejs-Dialog Plugin",
    tags: ["live", "oss"],
    tech: ["Vue", "HTML5", "SCSS", "webpack", "Vite"],
    links: {
      code: "https://github.com/godofbrowser/vuejs-dialog",
      demo: "https://godofbrowser.github.io/vuejs-dialog/features.html",
    },
    features: [
      "Lorem Ipsum responsive UIs",
      "Quick and reliable delivery of lorem widgets on Ipsum production and dev servers",
      "A simple page allowing users to access placeholder text during initial previews.",
      "Integration with Ipsum for managing lorem text generation and interactions",
      "Reliable processing of placeholder strings and dynamic text updates in the system"
  ],  
    description:
      "Lorem is a placeholder platform, a virtual lorem space where you can browse countless widgets in various categories from random text blocks to engaging filler paragraphs",
    role: "",
    images: [
      {
        url: `${imageBase}/images/portfolio/vuejs-dialog/preview.png`,
        bgColor: '#0d1116',
        width: 1451,
        height: 872,
      },
      {
        url: `${imageBase}/images/portfolio/vuejs-dialog/loader.png`,
        width: 1451,
        height: 872,
      },
      {
        url: `${imageBase}/images/portfolio/vuejs-dialog/soft.png`,
        width: 1451,
        height: 872,
      },
      {
        url: `${imageBase}/images/portfolio/vuejs-dialog/prompt.png`,
        width: 1451,
        height: 872,
      },
    ],
  },
  {
    title: "KittieFight",
    tags: [],
    tech: ["Web3", "React", "Truffle", "Ganache", "Solidity"],
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
    description:
      "KittieFight was a gamified mortal kombat for cryptokitties, which is a crowd-driven real-time Dapp fighting game on the Ethereum blockchain",
    role: "During my time at SuperDao’s KittieFights project, I gained hands-on experience in blockchain development with Solidity, where I wrote and deployed smart contracts on the Ethereum mainnet and test networks. I utilized Web3 technology to interact with these contracts and contributed to the design and maintenance of React components for the KittieFights web application. Additionally, I played a key role in developing the product’s landing page, enabling investors to acquire tokens during the initial offerings.",
    images: [
      {
        url: `${imageBase}/images/portfolio/kittiefight/kittiefight-connected.png`,
        bgColor: '#eeeff8',
        width: 1451,
        height: 872,
      },
      {
        url: `${imageBase}/images/portfolio/kittiefight/kittiefight-paper.png`,
        width: 1472,
        height: 900,
      },
    ],
  },
  {
    title: "Okadabooks",
    tags: [],
    tech: ["React", "Nextjs", "Redux", "Nodejs", "Laravel", "Nginx"],
    links: {
      reference: "https://en.wikipedia.org/wiki/OkadaBooks",
    },
    features: [
      "Lorem Ipsum responsive UIs",
      "Quick and reliable delivery of lorem widgets on Ipsum production and dev servers",
      "A simple page allowing users to access placeholder text during initial previews.",
      "Integration with Ipsum for managing lorem text generation and interactions",
      "Reliable processing of placeholder strings and dynamic text updates in the system"
  ],
    description:
      "OkadaBooks was a self-publishing and bookselling platform, a virtual bookshelve where you can read thousands of books on different genres from epic romance novels to heart-warming thrillers",
    role: "",
    images: [
      {
        url: `${imageBase}/images/portfolio/okadabooks/okadabooks-store.png`,
        bgColor: '#636363',
        width: 1451,
        height: 872,
      },
      {
        url: `${imageBase}/images/portfolio/okadabooks/books.png`,
        width: 1451,
        height: 872,
      },
    ],
  },{
    ...(projectPlaceholder as IProject),
    title: "Givvable",
    tags: ['live'],
    tech: ["Vuejs", "Nuxtjs", "Quasar", "Elastic search", "Nodejs", "Typeorm", "Terraform", "Objection", "Typescript", "AWS S3"],
    links: {
      demo: "https://app.givvable.com/",
    },
    images: [
      {
        url: `${imageBase}/images/portfolio/givvable/preview1.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
      {
        url: `${imageBase}/images/portfolio/givvable/preview2.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
      {
        url: `${imageBase}/images/portfolio/givvable/preview3.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
      {
        url: `${imageBase}/images/portfolio/givvable/preview4.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
    ],
  },{
    ...(projectPlaceholder as IProject),
    title: "Nursa",
    tags: ['live'],
    tech: ["Angular", "Ionic", "Ngxs", "Typescript", "Nodejs", "Firebase"],
    links: {
      reference: "/",
    },
    images: [
      {
        url: `${imageBase}/images/portfolio/nursa/preview1.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
      {
        url: `${imageBase}/images/portfolio/nursa/preview2.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
      {
        url: `${imageBase}/images/portfolio/nursa/preview3.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
      {
        url: `${imageBase}/images/portfolio/nursa/preview4.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
    ],
  },{
    ...(projectPlaceholder as IProject),
    title: "Laravel-Restricted",
    tags: ['oss'],
    tech: ["PHP", "Laravel", "Composer"],
    links: {
      code: "https://github.com/Codulab/laravel-restricted/tree/master/src",
      reference: "https://github.com/Codulab/laravel-restricted/commits?author=Godofbrowser",
    },
    images: [
      {
        url: `${imageBase}/images/portfolio/laravel-restricted/preview1.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
      {
        url: `${imageBase}/images/portfolio/laravel-restricted/preview2.png`,
        bgColor: '#0d1116',
        width: 0,
        height: 0,
      },
    ]
  },
];