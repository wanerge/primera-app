import Hero from "./components/organism/Hero";
import Layout from "@/app/components/molecules/Layout";
import FeaturesGroup from "@/app/components/organism/FeaturesGroup";
import Price from "@/app/components/organism/Price";
import Contact from "@/app/components/organism/Contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div>
        <Layout>
          <div className="flex flex-col items-center justify-center w-full h-screen gap-20">
            <FeaturesGroup
              firstWord="Project"
              secondWord="Management"
              description="Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note."
              buttonText="get started"
              imageSrc="/Image-container.svg"
              orientation={true}
            />
            <FeaturesGroup
              firstWord="Work"
              secondWord="together"
              description="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish
             a note to the internet and share the URL with others."
              buttonText="Try it now"
              imageSrc="/Work-Together-Image.svg"
              orientation={false}
            />
          </div>
        </Layout>
        <div className="mt-20 mb-20 flex justify-center items-center">
          <Price
            plantTitle="Free"
            price="0"
            description="Capture ideas and find them quickly"
            textButton="Get Started"
          />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
