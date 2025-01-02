import Astro from "@/icons/astro"
import MicrosoftAzure from "@/icons/azure"
import Django from "@/icons/django"
import Docker from "@/icons/docker"
import JavaScript from "@/icons/javascript"
import Nextjs from "@/icons/nextjs"
import PostgreSQL from "@/icons/postgresql"
import Python from "@/icons/python"
import Supabase from "@/icons/supabase"
import TailwindCSS from "@/icons/tailwind"
import TypeScript from "@/icons/typescript"
import Vercel from "@/icons/vercel"

export const projects = [
  { 
    title: 'Benefits Calculator - ISR', 
    description: 'The Benefits Calculator is a web application developed with Django that allows users to calculate salary benefits easily and quickly. The application is deployed on Azure and uses various technologies to provide an efficient and reliable user experience.',
    skills: [
      { name: 'Django', icon: Django },
      { name: 'Python', icon: Python },
      { name: 'Azure', icon: MicrosoftAzure },
      { name: 'TailwindCSS', icon: TailwindCSS }
    ]
  },
  { 
    title: 'Point of Sale System- by Grupo Manzur', 
    description: 'The Point of Sale System is a web application developed with NextJs that allows users to manage their sales and inventory. The application is deployed on Vercel and uses various technologies to provide an efficient and reliable user experience.',
    skills: [
      { name: 'Typescript', icon: TypeScript },
      { name: 'NextJs', icon: Nextjs },
      { name: 'TailwindCSS', icon: TailwindCSS },
      { name: 'Vercel', icon: Vercel },
      { name: 'Supabase', icon: Supabase },
      { name: 'Docker', icon: Docker }
    ]
  },
  { 
    title: 'Final Project - Probability and Statistics ITCA 2024', 
    description: 'Final Examination Project - Development of statistical and probabilistic thinking. Collection of games representing probability and statistics applied in percentages such as: Coin Toss, 21 Blackjack and Dice Toss',
    skills: [
      { name: 'Astro', icon: Astro },
      { name: 'Javascript', icon: JavaScript },
      { name: 'TailwindCSS', icon: TailwindCSS },
      { name: 'Vercel', icon: Vercel }
    ]
  },
  { 
    title: 'QueryWise AI', 
    description: 'It converts natural language into SQL queries, tracking real-time token usage and associated costs. This proof-of-concept offers transparency and control over resource consumption using AI.',
    skills: [
      { name: 'NextJS', icon: Nextjs },
      { name: 'Typescript', icon: TypeScript },
      { name: 'Python', icon: Python },
      { name: 'Azure AI', icon: MicrosoftAzure }
    ]
  },
  { 
    title: 'RSM - Final Data Analyst Project', 
    description: 'Analyze your sales data and propose improvement strategies as a Junior Data Analyst using SQL, data visualization and machine learning models.',
    skills: [
      { name: 'PostgreSQL', icon: PostgreSQL },
      { name: 'Python', icon: Python },
    ]
  },
  { 
    title: 'Samsung Innovation Campus - Module Project', 
    description: 'Analyze data of C02 emissions in Central America. The project was developed using Python with Django data visualization libraries.',
    skills: [
      { name: 'Python', icon: Python },
      { name: 'Django', icon: Django },
      { name: 'Docker', icon: Docker }
    ]
  },
]

