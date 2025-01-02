import { Header } from './Header'
import { Hero } from './Hero'
import { Projects } from './Projects'
import { Experience } from './Experience'
import { Certifications } from './Certifications'
import { Contact } from './Contact'

export function Portfolio() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 relative overflow-hidden bg-white dark:bg-black">
      {/* Light mode background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      
      {/* Dark mode background */}
      <div className="hidden dark:block absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#3b2f63,transparent)]"></div>
      </div>

      <Header />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Hero />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </div>
      </main>
    </div>
  )
}

