interface IProjectImage {
  url: string;
  width: number;
  height: number;
}

export interface IProject {
  title: string;
  tags: ('live' | 'oss')[];
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
