import ContactMe from "../Buttons/ContactMe";
import { Resume } from "../Buttons/Resume";
export default function Home() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      id="#"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">
        Govardhan Katta
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-1">
        I design & develop Applications
      </p>

      <p className="max-w-2xl text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
        Software Developer specializing in Full Stack Development with expertise
        in <span className="font-medium text-foreground">Next.js</span>,{" "}
        <span className="font-medium text-foreground">Node.js</span>, and modern
        frameworks.
      </p>

      <div className="flex  gap-4">
        <Resume />
        <ContactMe />
      </div>
    </section>
  );
}
