import { Card, CardContent } from '@/components/ui/card'
import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <Card className="col-span-full border-hidden md:col-span-2 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-zinc-950 dark:via-zinc-800 dark:to-black rounded-3xl shadow-lg backdrop-blur-sm bg-opacity-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 dark:from-black dark:via-zinc-950 dark:to-black animate-gradient-x"></div>
      <CardContent className="p-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-400 dark:via-white dark:to-neutral-500 dark:animate-text-shimmer">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-zinc-950 dark:to-blue-700 rounded-lg shadow-md animate-subtle-wave">
              <CardContent className="p-4">
                <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100">{exp.title}</h3>
                <p className="font-semibold text-sm text-gray-700 dark:text-gray-300">{exp.company} | {exp.period}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

