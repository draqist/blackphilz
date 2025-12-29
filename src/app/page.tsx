import ParallaxImg from "@/components/animation/ParallaxImg";
import RevealText from "@/components/animation/RevealText";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <section className="h-screen w-full flex flex-col items-center justify-center p-4">
        <RevealText>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-center uppercase">
            Blackp<br />Studio
          </h1>
        </RevealText>
        <RevealText className="mt-8">
            <p className="text-xl max-w-md text-center text-zinc-500">
                Experience the depth of darkness with smooth interactions and parallax motion.
            </p>
        </RevealText>
      </section>

      <section className="w-full max-w-6xl p-4 my-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
             <RevealText>
                <h2 className="text-4xl font-bold mb-4">Immersive<br/>Parallax</h2>
            </RevealText>
             <RevealText>
                <p className="text-zinc-400">
                    Scroll through the abyss. Images float with distinct weights, creating a sense of depth and dimension that draws you in.
                </p>
            </RevealText>
        </div>
        <ParallaxImg
            src="https://placehold.co/800x1000/1a1a1a/white.png?text=Parallax"
            alt="Abstract dark placeholder"
            width={800}
            height={1000}
            className="w-full h-full"
            containerClassName="aspect-[3/4] rounded-lg"
        />
      </section>

      <section className="h-[50vh] w-full flex items-center justify-center">
         <RevealText>
            <span className="text-zinc-700 font-mono text-sm">SCROLL TO EXPLORE</span>
         </RevealText>
      </section>
    </main>
  );
}
