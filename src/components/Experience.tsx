"use client"
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { experiences } from '@/data/experience'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Badge } from "@/components/ui/badge"

export function Experience() { 
  return (
    <Card id='experience' className="max-w-full col-span-full border-hidden md:col-span-2 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-zinc-950 dark:via-zinc-800 dark:to-stone-950 rounded-3xl shadow-lg backdrop-blur-sm bg-opacity-50 overflow-hidden relative">
      <div className="absolute inset-0  animate-gradient-x"></div>
      <CardContent className="p-6 relative z-10">
      <TextGenerateEffect filter words="Professional Experience"></TextGenerateEffect>
        <div className="space-y-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp:any, index) => (
              <GlowingCard exp={exp} key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


function GlowingCard({ exp }: { exp: any }) {
  return (
    <div className="relative rounded-xl border p-2 md:rounded-3xl md:p-3">
      <GlowingEffect
        spread={80}
        glow={true}
        disabled={false}
        proximity={84}
        inactiveZone={0.01}
        className="rounded-xl md:rounded-3xl"
      />
      <CardSpotlight>
        <div className="space-y-3">
              <CardContent className="p-4">
                <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100">{exp.title}</h3>
                <p className="font-semibold text-sm text-gray-700 dark:text-teal-300">{exp.company} | {exp.period}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
              </CardContent>
              <CardFooter className='flex mx-auto justify-center'>
              <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill:any, skillIndex:number) => (
                    <Badge key={skillIndex} variant="secondary" className="border-hidden flex font-bold text-xs text-gray-800 dark:text-gray-200">
                      {skill.icon({ className: 'w-5 h-6' })}
                      <span className='mx-1'>{skill.name}</span>
                    </Badge>
                  ))}
              </div>
              </CardFooter>
        </div>
        </CardSpotlight>
    </div>
  );
}

