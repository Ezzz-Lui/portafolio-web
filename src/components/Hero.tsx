import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DockIcon, FileText, GitlabIcon as GitHub, GithubIcon, LinkedinIcon as LinkedIn, MailIcon } from 'lucide-react'
import Link from 'next/link'
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Hero() {
  return (
    <Card className="rounded-3xl shadow-lg overflow-hidden relative border-hidden">
      <CardContent className="relative z-10 p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-black dark:via-black dark:to-black dark:animate-text-shimmer">
          <TextGenerateEffect filter words="Hi, I'm Luis Ramos" />
        </h1>
        <p className="text-xl md:text-3xl font-bold mb-6 dark:text-gray-300">
          <span className="opacity-70 dark:opacity-90">Software Developer</span> | 
          <span className="opacity-70 dark:opacity-80"> Azure AI Engineer Associate</span> | 
          <span className="opacity-70 dark:opacity-70"> Data Analyst</span>
        </p>
        <p className="mb-8 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          I’m passionate about building digital solutions from start to finish. With a strong foundation in both <span className="font-semibold dark:text-gray-100">frontend</span> and <span className="font-semibold dark:text-gray-100">backend</span> development, I enjoy creating user-friendly interfaces as much as designing robust server-side systems. My experience covers modern frameworks, cloud services, and database management, allowing me to bridge the gap between technology and real-world needs. Whether you’re technical or not, I’m here to help turn ideas into reliable, scalable applications.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-6 mb-4">
            <Button asChild variant="link" size="lg" className="rounded-full dark:bg-gradient-to-r dark:from-black dark:via-zinc-900 dark:to-black bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-zinc-700 hover:bg-zinc-950 hover:text-zinc-100 transition-colors duration-300" >
              <Link href="https://github.com/Ezzz-Lui" target='_blank'>
                <GithubIcon className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="link" size="lg" className="rounded-full dark:bg-gradient-to-r dark:from-black dark:via-zinc-900 dark:to-black bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-zinc-700 hover:bg-blue-700 hover:text-zinc-100 transition-colors duration-300">
              <Link href="https://www.linkedin.com/in/lk-ramos" target='_blank'>
                <LinkedIn className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="link" size="lg" className="rounded-full dark:bg-gradient-to-r dark:from-black dark:via-zinc-900 dark:to-black bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-zinc-700 hover:bg-zinc-700 hover:text-zinc-100 transition-colors duration-300">
              <Link href="/cv.pdf" target='_blank'>
                <FileText className="h-5 w-5 " />
              </Link>
            </Button>
            <Button asChild variant="link" size="lg" className="rounded-full dark:bg-gradient-to-r dark:from-black dark:via-zinc-900 dark:to-black bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-zinc-700 hover:bg-teal-700 hover:text-zinc-100 transition-colors duration-300">
              <Link href="mailto:ogn.lui@gmail.com" target='_blank'>
                <MailIcon className="h-5 w-5 " />
              </Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  )
}
