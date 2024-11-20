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
    "A simple page allowing users to access placeholder text during initial previews",
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
      "Vue.js-Based Frontend: Built with Vue and Vuex for a responsive and dynamic interface",
      "Modern Theming: Styled with SCSS to offer both light and dark themes for an enhanced user experience",
      "Intuitive User Experience: Designed to simplify bill payments and provide easy access to storefront management",
      "Wallet Functionality: Users can create, fund, and manage their wallets for seamless transactions",
      "Mini-Storefront: Users can set up a personalized storefront to sell goods directly on the platform",
      "Money Transfers: Secure options to send and receive money between users",
  ],
    description:
      "Payzone is a comprehensive bill aggregation and payment platform that enables merchants' customers to conveniently place orders, pay bills, and manage their own wallets",
    role: "I designed and developed theme-based, responsive, and cross-browser-compatible user interfaces, ensuring a seamless user experience. I implemented core UI components for wallet management, including features to send and receive money. Additionally, I developed the mini storefront functionality, enabling users to sell products while providing buyers with a streamlined shopping and checkout experience",
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
    description: "This portfolio website is a sleek and modern single-page application developed with Next.js, showcasing the developer's skills, projects, and professional achievements",
    features: [
      "Server-Side Rendering (SSR): Ensures fast load times and improved performance for optimal user experience",
      "SEO Optimization: Designed with best practices to enhance visibility and search engine rankings",
      "Skill and Project Showcase: Organized presentation of skills and past projects, allowing users to access more details with minimal clicks",
      "Project Gallery: Displays visually appealing screenshots of projects to highlight accomplishments",
      "Modern Design with Theming: Offers a sleek, contemporary interface with light and dark mode toggle functionality",
      "Lightweight and Single Page: Streamlined, fast, and efficient single-page application",
    ],
    role: "I designed and developed my Next.js portfolio website from scratch, leveraging server-side rendering (SSR) to ensure fast load times and optimal performance. I implemented SEO-friendly features to enhance visibility and improve search engine rankings. The website showcases my skills and projects in a visually appealing and organized manner, with an interactive gallery for project screenshots and detailed information accessible with minimal clicks. I incorporated a modern design with a light and dark mode toggle for enhanced usability and developed the application as a lightweight, single-page experience to ensure seamless navigation and efficiency",
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
  },{
    ...(projectPlaceholder as IProject),
    title: "Nursa",
    tags: ['live'],
    tech: ["Angular", "Ionic", "Ngxs", "Typescript", "Nodejs", "Firebase"],
    links: {
      demo: "https://app.nursa.com/",
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
  },
  {
    title: "Vuejs-Dialog Plugin",
    tags: ["live", "oss"],
    tech: ["Vue", "HTML5", "SCSS", "webpack", "Vite", "Open Source"],
    links: {
      code: "https://github.com/godofbrowser/vuejs-dialog",
      demo: "https://godofbrowser.github.io/vuejs-dialog/features.html",
    },
    features: [
      "Intuitive UI: Features a beautiful and user-friendly interface for seamless interaction",
      "Multiple Dialog Types: Includes support for alert, confirm, and prompt dialogs with additional confirm types to prevent accidental confirmations",
      "Customizable and Extendable: Offers a simple API with extensive options for customization and extendability",
      "Entry and Exit Animations: Allows users to choose preferred animations for a polished and modern experience",
      "Lightweight Design: Optimized for minimal impact on performance, ensuring smooth integration into Vue.js applications",
  ],  
    description:
      "Vuejs-dialog is a vue plugin that's designed to serve as a replacement to the native confirm and alert that ships with the browser. It is lightweight and comes with a simple API",
    role: "I designed and developed the Vuejs-Dialog plugin from the ground up, creating a lightweight and highly customizable solution to replace native browser confirm and alert dialogs. I implemented an intuitive user interface, multiple dialog types such as alert, confirm, and prompt, and additional confirm types to enhance user decision-making. I also designed the plugin to be extendable, with a simple API and support for customizable entry and exit animations, ensuring seamless integration and flexibility for developers. My work focused on delivering a modern, efficient, and versatile plugin for the Vue.js ecosystem",
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
      "A landing page enabling investors to acquire tokens during initial offerings (e.g., ICOs)",
      "Integration with Web3 for interacting with Ethereum smart contracts",
      "Secure handling of transactions and token acquisitions through blockchain technology",
    ],
    description:
      "KittieFight was a gamified mortal kombat for cryptokitties, which is a crowd-driven real-time Dapp fighting game on the Ethereum blockchain",
    role: "During my time at SuperDao’s KittieFights project, I gained hands-on experience in blockchain development with Solidity, where I wrote and deployed smart contracts on the Ethereum mainnet and test networks. I utilized Web3 technology to interact with these contracts and contributed to the design and maintenance of React components for the KittieFights web application. Additionally, I played a key role in developing the product’s landing page, enabling investors to acquire tokens during the initial offerings",
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
      "React and Next.js Frontend: Built with modern frameworks to deliver a responsive and dynamic user experience",
      "Cross-Browser and Cross-Device Compatibility: Optimized to work seamlessly across various screen sizes, browsers, and devices",
      "Self-Publishing Capabilities: Enables users to upload and showcase their publications directly on the platform",
      "Integrated E-Commerce Functionality: Readers can purchase content securely and access it for reading on the platform",
      "User Interaction and Feedback: Allows readers to rate, review, and flag content, fostering a collaborative and engaging environment",
      "Responsive Design: Adapts fluidly to different screen sizes for a consistent user experience",
  ],
    description:
      "OkadaBooks was a self-publishing and bookselling platform offering a virtual bookshelf with thousands of books across genres, from romance to thrillers.",
    role: "During my time at OkadaBooks, I maintained the legacy application while leading the development of a modern frontend using Next.js. I collaborated closely on API development to ensure seamless integration with the new frontend and played an active role in managing the server infrastructure. My work contributed to enhancing the platform's functionality and performance, providing users with an improved experience while supporting the transition to a more scalable and maintainable architecture",
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
    description: 'Givvable is a platform specializing in automating supplier diligence and sustainable procurement, designed to streamline processes for corporate and government buyers and suppliers',
    role: "During my time at Givvable, I maintained legacy applications while leading the rewrite of the core backend using Node.js, TypeORM, and Elasticsearch to optimize query performance. I also enhanced the frontend by rewriting key components, including an advanced search box with autocomplete functionality. Additionally, I developed a highly efficient and user-friendly filter component capable of managing large selection lists, improving usability and maintainability. My contributions focused on enhancing the platform's performance, scalability, and user experience",
    features: [
      "Modern Backend Architecture: Rewritten core backend using Node.js and TypeORM to ensure high performance and maintainability",
      "Vue-Based Frontend: Built with Vue, Vuex, and Nuxt.js for a dynamic and scalable user interface",
      "Advanced Search Functionality: Features an intelligent search box with autocomplete for faster and more accurate query results",
      "Efficient Filter System: Highly optimized filter component capable of handling large data sets for streamlined selection and categorization",
      "Elasticsearch Integration: Backend powered by Elasticsearch for fast and efficient querying of supplier and procurement data",
    ],
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
    title: "Laravel-Restricted",
    tags: ['oss'],
    tech: ["PHP", "Laravel", "Composer", "Open Source"],
    links: {
      code: "https://github.com/Codulab/laravel-restricted/tree/master/src",
      reference: "https://github.com/Codulab/laravel-restricted/commits?author=Godofbrowser",
    },
    description: "Restricted is a Laravel package that prevents users from signing up with reserved words, enhancing application security and routing integrity",
    features: [
      "Route-Based Word Restriction: Automatically identifies and restricts users from signing up with reserved words that match route segments (e.g., \"login\" or \"register\")",
      'Custom Reserved Words: Allows manual addition of reserved words such as "cart," "products," or "admin" via a reserved.txt file',
      "Command-Line Utility: Provides the restricted:index command to manage and update the reserved word list efficiently",
      "Validation Support: Ensures seamless user experience by returning appropriate validation messages when restricted words are used during signup",
      "Enhanced Application Security: Prevents conflicts and improves routing logic by safeguarding reserved keywords",
    ],
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