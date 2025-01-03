import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/stack'

export function Stack() {
    return (
        <Card className="col-span-full border-hidden bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:to-black rounded-3xl shadow-lg backdrop-blur-sm bg-opacity-50">
            <CardContent className="p-6 flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-400 dark:via-white dark:to-neutral-500 dark:animate-text-shimmer text-center">Tech Stack</h2>
                <div className="w-full overflow-x-auto">
                    <div className="flex gap-4">
                        {projects.map((project, index) => (
                            <Card key={index} className="min-w-[300px] border-hidden bg-gradient-to-r from-gray-50 via-white to-gray-100 dark:from-black dark:via-zinc-950 dark:to-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-4 flex flex-col items-center">
                                    <h3 className="font-extrabold mb-2 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-400 dark:via-white dark:to-neutral-500 dark:animate-text-shimmer text-center">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {project.skills.map((skill, skillIndex) => (
                                            <Badge key={skillIndex} variant="outline" className="font-bold border-hidden text-xs text-gray-800 dark:text-gray-200 flex items-center gap-1">
                                                {skill.icon({ className: 'w-10 h-10' })}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
