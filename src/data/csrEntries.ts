export type CSRDetail = {
  slug: string;
  title: string;
  subtitle?: string;
  heroImage: string;
  bannerImage: string;
  mobileBannerImage?: string;
  intro: string;
  overview: string;
  projectNote?: string;
  institutionalBackground?: string;
  galleryImages?: string[];
  links?: { label: string; href: string }[];
};

export const csrEntries: CSRDetail[] = [
  {
    slug: "saat-saath-arts-foundation",
    title: "Saat Saath Arts Foundation",
    subtitle: "International exchange through visual arts and education",
    heroImage: "/images/csrOverview2.JPG",
    bannerImage: "/images/saathsaathbanner.jpg",
    mobileBannerImage:"/images/csrBannerMobile.jpg",
    intro:
      "Guided by a philosophy of giving back, the Hotz Group has long supported initiatives across art, handicrafts, local artisans, education, inclusion, and cultural development. Founded in 2010 as a non-profit initiative led by Mrs. Aparajita Jain, the Saat Saath Arts Foundation supports international exchange between India and the world through visual arts and education.",
    overview: `Founded and led by Mrs. Aparajita Jain, Saat Saath Arts Foundation has played an important role in shaping India’s contemporary art landscape through visionary public initiatives. 
    
    Its first public art project, the acclaimed Art Tiger Project in New Delhi, was created to raise awareness about the alarming decline of India’s tiger population. One of its most significant contributions has been The Sculpture Park, launched in 2017 to bring contemporary sculpture into heritage spaces and make art accessible to wider audiences. The Sculpture Park was India’s first public art contemporary project of its kind. 
    
    In 2025, the fifth edition marks an important milestone as the project moves to Vijay Garh at Jaigarh Fort - an austere, historic structure newly opened to the public. Once believed to have been a jail and later an armoury, Vijay Garh’s stark architecture provides a powerful setting for contemporary artworks. 
    
    Curated by Peter Nagy, the exhibition brings together leading contemporary artists working across bronze, ceramic, fibre, stone, stainless steel, and other media. The project continues Saat Saath Arts Foundation’s mission to activate heritage spaces and create meaningful dialogue between India’s cultural past and its modern creative expression. 
    
    The Sculpture Park remains theme-free, allowing visitors to explore, interpret, and experience art without boundaries. Supported by the Jaigarh Public Charitable Trust and Jaipur Centre for Art, this edition strengthens Jaipur’s growing presence as a global hub for contemporary art. 
    
    At its core, the initiative reflects how heritage, creativity, and community can come together to create powerful cultural experiences
`,
    projectNote: `Saat Saath Arts Foundation creates cultural experiences that connect people, places, and contemporary art. Its projects activate historic sites, support artistic innovation, and open new pathways for public engagement with sculpture, installation, and interdisciplinary practices. 
    
    Driven by the belief that art should be accessible and transformative, Saat Saath Arts brings global and Indian artists into iconic environments, reimagining forts, museums, and cultural landmarks as living spaces for creativity. Through exhibitions, research programmes, and collaborative initiatives, the Foundation continues to nurture artistic dialogue and shape India’s cultural future.`,
    institutionalBackground: "",
    galleryImages: [
      "/images/saathsaath1.jpg",
      "/images/saathsaath2.jpg",
      "/images/saathsaath3.jpg",
      "/images/saathsaath4.jpg",
      "/images/saathsaath5.jpg",
      "/images/saathsaath6.jpg",
    ],
  },
  {
    slug: "balvantray-mehta",
    title: "Balvantray Mehta",
    subtitle: "Inclusive learning through Servants of the People Society",
    heroImage: "/images/csrOverview.jpg",
    bannerImage: "/images/balwantbanner.jpg",
    mobileBannerImage:"/images/BalwantmobileBanner.jpg",
    intro:
      "Our association with the Servants of the People Society, founded by Lala Lajpat Rai in 1921 and inaugurated by Mahatma Gandhi, reflects our commitment to nation-building and inclusive education. Through this collaboration, Hotz supports Balvantray Mehta Vidya Bhawan Anguridevi Shersingh Memorial Academy, an integrated school for children with and without disabilities, creating equal opportunities to learn, grow, and thrive.",
    overview: `Balvantray Mehta Vidya Bhawan Anguridevi Shersingh Memorial Academy operates under the esteemed Servants of the People Society, an institution founded in 1921 by Sher-e-Punjab Lala Lajpat Rai and inaugurated by Mahatma Gandhi. With a legacy of over 88 years of public service, the Society has consistently worked towards social upliftment, education, and community welfare.

The Academy reflects this mission through its integrated approach to education, supporting children ina a nurturing, inclusive environment. As part of a wider network of philanthropic initiatives, the school stands as a testament to the Group’s commitment to accessible education, vocational development, and holistic community support.`,
    institutionalBackground: `The Servants of the People Society, registered under Regd. No. S-667 of 1953 - 1954 under the Societies Registration Act of 1860, was founded in Lahore by Sher-e-Punjab Lala Lajpat Rai and inaugurated by Mahatma Gandhi in 1921. For over 88 years, it has maintained an unbroken record of dedicated service to the nation.

Among its distinguished past Presidents are Babu Purushottam Das Tandon, Shri Balvant Ray Mehta, Shri Lal Bahadur Shastri, and Shri Krishan Kant.Following the demise of Shri Krishan Kant, Shri Manu Bhai Patel assumed charge as Chairman of the Society, while Shri Inder Kumar Gujral, former Prime Minister of India, and Shri Rajender Sachhar, former Chief Justice of India, serve as trustees.

The Society runs numerous philanthropic projects and educational institutions across India, including Balvantray Mehta Vidya Bhawan Anguridevi Shersingh Memorial Academy, an integrated school for children with and without disabilities located at Masjid Moth, G.K. II, New Delhi-48. It also manages a Vocational Training Centre at Masjid Moth School, a public library, a charitable medical clinic, a homeopathic dispensary at Lajpat Bhawan, and a home for senior citizens in Dwarka. `,
    galleryImages: [
      "/images/balwant1.jpg",
      "/images/balwant2.jpg",
      "/images/balwant3.jpg",
      "/images/balwant4.jpg",
      "/images/balwant5.jpg",
      "/images/balwant6.jpg",
    ],
    links: [
      {
        label: "Servants of the People Society",
        href: "https://www.sops.in/",
      },
    ],
  },
];

export const getCSRDetailBySlug = (slug: string) =>
  csrEntries.find((entry) => entry.slug === slug);
