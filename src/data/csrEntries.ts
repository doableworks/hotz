export type CSRDetail = {
  slug: string;
  title: string;
  subtitle?: string;
  heroImage: string;
  bannerImage: string;
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
    intro:
      "Guided by the philosophy of giving back, the Hotz Group has long supported initiatives that promote art, handicrafts and local artisans, education, inclusion, and cultural development. The Saat Saath Arts Foundation supports international exchange between India and the rest of the world through the visual arts and education. The Foundation is led by Mrs. Aparajita Jain as a non-profit initiative and was founded in 2010.",
    overview: `Saath Saath Arts Foundation, founded and led by Mrs. Aparajita Jain, has been instrumental in shaping India's contemporary art landscape through its visionary public initiatives.

    Its first public art project was the highly acclaimed Art Tiger Project in New Delhi aimed at enhancing awareness to the alarming state of the tiger population in India

Besides that, one of its most significant contributions is The Sculpture Park, launched in 2017 to bring contemporary sculpture into heritage spaces and make art accessible to broader audiences. The Sculpture Art Project was India’s first public art contemporary project with a fixed location.

In 2025, the 5th Edition marks an important milestone as it moves to Vijay Garhi at Jaigarh Fort—an austere, historic structure newly opened to the public. Once believed to have been a jail and later an armory, Vijay Garhi's stark architecture now becomes a powerful setting for contemporary artworks.

This transformation reflects Saath Saath Arts' continued mission to activate heritage spaces and foster meaningful engagement between India's cultural past and its modern creative expression. Curated by Peter Nagy, the exhibition brings together a diverse roster of leading contemporary artists showcasing works in bronze, ceramic, fibre, stone, stainless steel, and more.

The Sculpture Park continues its tradition of being theme-free, offering visitors the freedom to explore, interpret, and experience art without boundaries. Supported by the Jaigarh Public Charitable Trust and Jaipur Centre for Art (JCA), this edition strengthens Jaipur's growing presence as a global hub for contemporary art.

With Saath Saath Arts at its core, the initiative stands as a testament to how heritage, creativity, and community can converge to create powerful cultural experiences.`,
    projectNote: `Saath Saath Arts Foundation creates cultural experiences that connect people, places, and contemporary art. Our projects activate historic sites, support artistic innovation, and open new pathways for public engagement with sculpture, installations, and interdisciplinary practices. Driven by the belief that art should be accessible and transformative, Saath Saath Arts brings global and Indian artists into iconic environments—reimagining forts, museums, and cultural landmarks as living spaces for creativity. Through exhibitions, research programs, and collaborative initiatives, we continue to nurture artistic dialogue and shape India’s cultural future.`,
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
    intro:
      "Our association with the Servants of the People Society, (founded in 1921 by Lala Lajpat Rai and inaugurated by Mahatma Gandhi), reflects our deep commitment to nation-building. Through this collaboration, we contribute to Balvantray Mehta Vidya Bhawan Anguridevi Shersingh Memorial Academy, an integrated school for children with and without disabilities, providing them equal opportunities to learn, grow, and thrive.",
    overview: `Balvantray Mehta Vidhya Bhawan Anguridevi Shersingh Memorial Academy operates under the esteemed Servants of the People Society—an institution founded in 1921 by Sher-e-Punjab Lala Lajpat Rai and inaugurated by Mahatma Gandhi. With a legacy of over 88 years of public service, the Society has consistently worked toward social upliftment, education, and community welfare.

The Academy reflects this mission through its integrated approach to education, supporting both mainstream and disabled children in a nurturing, inclusive environment. As part of a wider network of philanthropic initiatives, the school stands as a testament to the Group’s commitment to accessible education, vocational development, and holistic community support.`,
    institutionalBackground: `Servants of the People Society Regd No: S - 667 of 1953 - 1954 under the Societies Registration Act of 1860. The Servants of the People Society, founded at Lahore by Sher-e-Punjab Lala Lajpat Rai and inaugurated by Mahatma Gandhi in 1921, has an unbroken record of dedicated service to the nation for over 88 years. Among its distinguished past Presidents are Babu Purshottam Das Tandon, Shri Balvant Ray Mehta, Shri Lal Bahadur Shastri, and Shri Krishan Kant. After the demise of Shri Krishan Kant, Shri Manu Bhai Patel assumed charge as Chairman of the Society. Shri Inder Kumar Gujral, Former Prime Minister of India, and Shri Rajender Sachhar, Former Chief Justice of India, serve as trustees of the Society. The Society runs numerous philanthropic projects and educational institutions across India. Balvantray Mehta Vidhya Bhawan Anguridevi Shersingh Memorial Academy is an integrated school for disabled children located at Masjid Moth, G.K. II, New Delhi-48. The Society also manages a Vocational Training Center at Masjid Moth School, a public library, a charitable medical clinic, and a homeopathic dispensary at Lajpat Bhawan, along with a home for senior citizens in Dwarka.`,
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
