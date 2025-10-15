export type CollectionName = "blog" | "areasOfInvestments";


export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  authorPhotoSrc: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "span.fund",
  description: "a minimalistic blog+portfolio Astro theme",
  author: "Tomasz Kowalczyk",
  authorPhotoSrc: "/johndoe.png",
  logo: {
    darkThemeSrc: "/logo/logo_dark.png",
    lightThemeSrc: "/logo/logo_light.png",
  }
};


type CollectionSite =  {
  pageSize: number;
};

type HomeSite =  {
  blogEntries?: number;
  areasOfInvestmentsEntries?: number;
}

export const HOME: HomeSite = {
  blogEntries: 5,
  areasOfInvestmentsEntries: 3,
};

type BlogSite = CollectionSite & {
  license: {
    name: string;
    href: string;
  }
};

export const BLOG: BlogSite = {
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const AREAS_OF_INVESTMENTS: CollectionSite = {
  pageSize: 10,
};

export const TAGS: CollectionSite = {
  pageSize: 10,
};

type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
}

type ContactSite = ContactInfo[]

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:email@example.com",
    displayAs: "email@example.com",
  },
  {
    type: "X",
    href: "https://x.com/BillGates",
    displayAs: "@BillGates on X",
  },
  {
    type: "GitHub",
    href: "https://github.com/dotnet",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/williamhgates/",
  },
];
