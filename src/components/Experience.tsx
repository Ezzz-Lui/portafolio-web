import { Card, CardContent } from '@/components/ui/card'
import { experiences } from '@/data/experience'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function Experience() { 
  return (
    <Card id='experience' className="col-span-full border-hidden md:col-span-2 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-zinc-950 dark:via-zinc-800 dark:to-black rounded-3xl shadow-lg backdrop-blur-sm bg-opacity-50 overflow-hidden relative">
      <div className="absolute inset-0  animate-gradient-x"></div>
      <CardContent className="p-6 relative z-10">
      <TextGenerateEffect filter words="Professional Experience"></TextGenerateEffect>
        <div className="space-y-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
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
    <div className="relative rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
      <GlowingEffect
        spread={80}
        glow={true}
        disabled={false}
        proximity={84}
        inactiveZone={0.01}
      />
        <div className="space-y-6">
              <CardContent className="p-4">
                <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100">{exp.title}</h3>
                <p className="font-semibold text-sm text-gray-700 dark:text-gray-300">{exp.company} | {exp.period}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
              </CardContent>
        </div>
    </div>
  );
}

