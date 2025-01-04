import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DockIcon, FileText, GitlabIcon as GitHub, GithubIcon, LinkedinIcon as LinkedIn, MailIcon } from 'lucide-react'

export function Hero() {
  return (
    <Card className="col-span-full rounded-3xl shadow-lg overflow-hidden relative border-hidden">
      <div className="absolute dark:inset-0 dark:bg-gradient-to-br dark:from-black dark:to-zinc-950 dark:animate-gradient-x">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-black to-black animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black via-white to-transparent animate-pulse delay-75"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-transparent animate-pulse delay-150"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/noise.jpg')] opacity-5 mix-blend-overlay"></div>
      </div>
      <CardContent className="relative z-10 p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-400 dark:via-white dark:to-neutral-500 dark:animate-text-shimmer">
          Luis Ramos
        </h1>
        <p className="text-xl md:text-3xl font-bold mb-6 dark:text-gray-300">
          <span className="opacity-70 dark:opacity-90">Backend Developer</span> | 
          <span className="opacity-70 dark:opacity-80"> Azure AI Engineer Associate</span> | 
          <span className="opacity-70 dark:opacity-70"> Data Analyst Jr</span>
        </p>
        <p className="mb-8 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          Technician with a background in Intelligent Computer Engineering, specialized in 
          <span className="font-semibold dark:text-gray-100"> backend development</span>, 
          <span className="font-semibold dark:text-gray-200"> cloud services</span> and a solid 
          <span className="font-semibold dark:text-gray-100"> DevOps ecosystem</span>. 
          Experience in technologies such as NestJS, Azure and CI/CD, as well as database management 
          including PostgreSQL and SQL Server. Currently focused on cloud architecture, deployments 
          with services and artificial intelligence solutions using Azure.
        </p>
        <div className='space-x-0 space-y-4 md:space-x-6 md:space-y-0 flex flex-col md:flex-row'>
          <Button variant="link" size="lg" className="rounded-full dark:bg-gradient-to-r dark:from-black dark:via-zinc-900 dark:to-black bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-zinc-700 hover:bg-zinc-950 hover:text-zinc-100 transition-colors duration-300">
            <GithubIcon className="h-5 w-5" />
          </Button>
          <Button variant="link" size="lg" className="rounded-full dark:bg-gradient-to-r dark:from-black dark:via-zinc-900 dark:to-black bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-zinc-700 hover:bg-blue-700 hover:text-zinc-100 transition-colors duration-300">
            <LinkedIn className="h-5 w-5 " />
          </Button>
          <Button variant="link" size="lg" className="rounded-full dark:bg-gradient-to-r dark:from-black dark:via-zinc-900 dark:to-black bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-zinc-700 hover:bg-zinc-700 hover:text-zinc-100 transition-colors duration-300">
            <FileText className="h-5 w-5 " />
          </Button>
          <Button variant="link" size="lg" className="rounded-full dark:bg-gradient-to-r dark:from-black dark:via-zinc-900 dark:to-black bg-gray-100 dark:bg-zinc-800 text-black dark:text-white border-zinc-700 hover:bg-teal-700 hover:text-zinc-100 transition-colors duration-300">
            <MailIcon className="h-5 w-5 " />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
