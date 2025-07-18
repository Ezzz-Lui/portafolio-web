"use client"
import { motion } from "framer-motion"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { projects } from '@/data/projects'
import { Badge } from "@/components/ui/badge"
import { TextGenerateEffect } from "./ui/text-generate-effect"

export default function Blog() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-3 col-span-full border-hidden bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-stone-950 rounded-3xl shadow-lg backdrop-blur-sm bg-opacity-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
          <TextGenerateEffect filter words="Academic and personal projects"></TextGenerateEffect>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="h-full">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-teal-400">{project.category}</span>
                    <span className="text-sm text-gray-400">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="font-bold border-hidden text-xs text-gray-800 dark:text-gray-200 flex items-center gap-1">
                      {skill.icon({})}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

