import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
  return (
    <Card className="col-span-full border-hidden bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-zinc-800 dark:to-black rounded-3xl shadow-lg backdrop-blur-sm bg-opacity-50 mt-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 dark:from-black dark:via-zinc-950 dark:to-black animate-gradient-x"></div>
      <CardContent className="p-6 relative z-10">
        <h2 className="text-3xl text-center font-bold mb-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-400 dark:via-white dark:to-neutral-500 dark:animate-text-shimmer">Contact</h2>
        <div className="flex justify-center space-x-8">
          <Button variant="link" size="lg" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 flex flex-col items-center animate-subtle-wave">
            <Github size={32} />
            <span className="mt-2">GitHub</span>
          </Button>
          <Button variant="link" size="lg" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 flex flex-col items-center animate-subtle-wave">
            <Linkedin size={32} />
            <span className="mt-2">LinkedIn</span>
          </Button>
          <Button variant="link" size="lg" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 flex flex-col items-center animate-subtle-wave">
            <Mail size={32} />
            <span className="mt-2">Email</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

