interface IProjectImage {
  url: string;
  width: number;
  height: number;
}

export interface IProject {
  title: string;
  tags: Omit<IProjectTabValue, 'all'>[];
  tech: string[];
  features: string[];
  description: string;
  role: string;
  images: IProjectImage[];
  links: {
    code?: string;
    demo: string;
    reference?: string;
  } | {
    code?: string;
    demo?: string;
    reference: string;
  }
}

export type IProjectTabValue = 'all' | 'live' | 'oss';