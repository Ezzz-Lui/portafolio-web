import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <Card className="col-span-full border-hidden bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-zinc-950 dark:to-black rounded-3xl shadow-lg backdrop-blur-sm bg-opacity-50">
      <CardContent className="p-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-400 dark:via-white dark:to-neutral-500 dark:animate-text-shimmer">Academic and personal projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Card key={index} className="border-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-zinc-950 dark:to-cyan-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <h3 className="font-extrabold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-400 dark:via-white dark:to-neutral-500 dark:animate-text-shimmer">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="font-bold border-hidden text-xs text-gray-800 dark:text-gray-200 flex items-center gap-1">
                      {skill.icon({})}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

