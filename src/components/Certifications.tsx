"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Certifications() {
  return (
    <div className="space-y-6">
      <TextGenerateEffect filter words="Professional Certifications"></TextGenerateEffect>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <GlowingCard key={index} cert={cert} />
        ))}
      </div>
    </div>
  );
}

function GlowingCard({ cert }: { cert: any }) {
  return (
    <div className="relative rounded-xl p-2 md:rounded-3xl md:p-3">
      <GlowingEffect
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        variant="default"
        className="rounded-xl md:rounded-3xl"
      />
      <Card className="relative overflow-hidden rounded-lg border-0.75 p-6 shadow-lg dark:bg-black">
        <CardContent className="p-2 flex items-start">
          <div className="mr-4 mt-1 text-gray-700 dark:text-gray-300">
            {cert.icon({})}
          </div>
          <div>
            <h3 className="font-extrabold text-gray-900 dark:text-gray-100">
              {cert.name}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {cert.issuer}
            </p>
            <p className="text-xs font-bold text-gray-600 dark:text-gray-400">
              {cert.date}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
