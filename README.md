# Hotz Group - Frontend

A modern, website for Hotz Group built with Next.js 15, showcasing their diverse business portfolio across real estate, hospitality, art, and education sectors.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes (desktop, tablet, mobile)
- **Dynamic Content**: Integrated with Sanity CMS for easy content management
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast development and production builds
- **SEO Friendly**: Proper meta tags and structured data
- **Interactive Elements**: Smooth animations using Framer Motion and GSAP
- **Business Showcase**: Dedicated pages for different business verticals
- **Contact Integration**: Contact forms and location mapping
- **News & Updates**: Dynamic newsroom section
- **Career Portal**: Job listings and career information

## 🏗️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component with Sanity Image URLs
- **Development**: Turbopack for faster builds

## 📁 Project Structure

```
src/
├── animations/          # Reusable animation components
├── app/                # Next.js App Router pages
│   ├── about-us/       # About company page
│   ├── business/       # Business verticals
│   ├── career/         # Career and jobs section
│   ├── contact-us/     # Contact information
│   ├── csr/           # Corporate Social Responsibility
│   ├── newsroom/      # News and updates
│   └── privacy-policy/ # Legal pages
├── components/         # Reusable UI components
├── data/              # Static data and constants
└── lib/               # Utilities and configurations
    └── types/         # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Sanity account and project setup

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hotz
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Sanity configuration:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
SANITY_API_TOKEN=your_api_token
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Styling
- Tailwind CSS configuration in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind utility classes

### Content Management
- Content is managed through Sanity CMS
- Schema definitions are in the backend project
- Content queries in `src/lib/sanityQueries.ts`

### Animations
- Framer Motion components in `src/animations/`
- GSAP animations for complex interactions
- Custom transition components for page elements

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `out` directory to your hosting platform

## 🔧 Configuration

### Sanity CMS
- Configure your Sanity project settings
- Set up CORS origins in Sanity dashboard
- Configure API tokens with appropriate permissions

### SEO
- Update metadata in `src/app/layout.tsx`
- Configure sitemap in `src/app/sitemap.js`
- Add structured data for better search visibility

## 📱 Pages

- **Home** (`/`) - Company overview and highlights
- **About Us** (`/about-us`) - Company history and values
- **Business** (`/business/[slug]`) - Individual business verticals
- **Career** (`/career`) - Job opportunities and company culture
- **Contact** (`/contact-us`) - Contact information and forms
- **CSR** (`/csr`) - Corporate social responsibility initiatives
- **Newsroom** (`/newsroom`) - Latest news and updates
- **Legal** - Privacy policy and terms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved by Hotz Group.

## 🆘 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation in `/docs` (if available)

---

**Built with ❤️ by the Hotz Group development team**
