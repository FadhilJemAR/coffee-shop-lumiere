import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Semua bot (Google, Bing, dll) boleh masuk
      allow: '/',     // Izinkan akses ke semua halaman
      disallow: [
        '/private/', 
        '/api/',     
      ],
    },
    sitemap: 'https://lumiere-coffee.vercel.app/sitemap.xml',
  }
}