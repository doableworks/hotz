export default function sitemap() {
  const baseUrl = "https://hotz.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/business`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/csr`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/newsroom`,
      lastModified: new Date(),
    },
  ];
}
