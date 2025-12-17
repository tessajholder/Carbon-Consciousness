import StartButton from './button.jsx';
import carbonExamples from '../assets/carbonexamples.svg';
import FlashCard from './FlashCard.jsx';
import Icon from '@mdi/react';
import { mdiEarth } from '@mdi/js';
import ImpactCarousel from './ImpactCarousel.jsx';


export default function Intro() {
  return (
    <div className="h-screen flex flex-col gap-y-7">
      <div className="font-bold">
        <div className="logo-top !p-3 flex items-center justify-center !mb-10">
          <Icon className="pt-0"path={mdiEarth} size={2} />
          <p className="pt-1 pl-2 pb-1"> Carbon Consciousness</p>
        </div>
        <div className="flex items-center justify-center mb-15">
            <div className="w-1/2 ml-25 pb-20">
              <div className="grid grid-cols-1 md: gap-4">
                <FlashCard
                  question="What is a carbon footprint?"
                  answer="A carbon footprint is a simple measure of the total amount of greenhouse gases that are released into the atmosphere because of an action, product, or person's activity."
                  />
                <FlashCard
                  question="Why does it matter?"
                  answer='The gases that make up carbon footprint act as a "thick blanket" on our planet, which contributes to Global Warming.'
                  />
                <FlashCard
                  question="How can I minimize my carbon footprint?"
                  answer="Little actions go a long way! Some ways you can lower your carbon footprint are reducing food waste, conserving electrical energy, and minimizing water intake."/>
              </div>
            </div>
          <img src={carbonExamples} alt="Carbon Examples" className="w-1/2 mr-15 -mt-4"/>
        </div>
        <StartButton />
      </div>
      <div>
        
      </div>
      <div className="text-center mb-20">
        <p className="impact text-5xl font-bold pb-15">Learn the Impacts on Earth</p>
        <ImpactCarousel />
      </div>
      <div className="pb-10">
        <p className="title text-5xl font-bold">"Be the change you wish to see in the world"</p>
      </div>
    </div>
  );
}