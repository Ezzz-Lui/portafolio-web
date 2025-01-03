"use client"
import { Card, CardContent } from '@/components/ui/card'
import { certifications } from '@/data/certifications'

export function Certifications() {
  return (
    <Card className="col-span-full border-hidden md:col-span-1 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black rounded-3xl shadow-lg backdrop-blur-sm bg-opacity-50 overflow-hidden relative border border-neon-pink">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 dark:from-black dark:via-zinc-950 dark:to-black animate-gradient-x"></div>
      <CardContent className="p-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-400 dark:via-white dark:to-neutral-500 dark:animate-text-shimmer">Professional Certifications</h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gradient-to-br border-hidden from-white via-zinc-100 to-white dark:from-black dark:via-emerald-950 dark:to-emerald-600 rounded-lg shadow-md animate-subtle-wave border border-neon-blue">
              <CardContent className="p-4 flex items-start">
                <div className="mr-4 mt-1 text-gray-700 dark:text-gray-300">
                  {cert.icon({})}
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 dark:text-gray-100">{cert.name}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{cert.issuer}</p>
                  <p className="text-xs font-bold text-gray-600 dark:text-gray-400">{cert.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
