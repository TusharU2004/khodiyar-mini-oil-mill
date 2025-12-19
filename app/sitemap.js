// app/sitemap.js

export default function sitemap() {
  return [
    {
      url: 'https://khodiyar-oil-mill.onrender.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://khodiyar-oil-mill.onrender.com/product',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://khodiyar-oil-mill.onrender.com/process',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://khodiyar-oil-mill.onrender.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://khodiyar-oil-mill.onrender.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://khodiyar-oil-mill.onrender.com/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  ];
}
