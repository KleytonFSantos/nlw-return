import CloseButton from "./CloseButton";

import bugImageUrl from "../assets/virus.png";
import ideaImageUrl from "../assets/idea.png";
import thoughtImageUrl from "../assets/thought-bubble.png";
import { useState } from "react";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de lâmpada",
    },
  },

  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de balão de pensamento",
    },
  },
};

type FeedbackType = keyof typeof feedbackTypes;

function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState <FeedbackType | null> (null)
    
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full flex-row align-center">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none p-3"
              onClick={() => setFeedbackType(key as FeedbackType)}
              type="button"
            >
              <img
                className="flex-1 w-14 p-3 items-center"
                src={value.image.source}
                alt={value.image.alt}
              />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>

      <footer>
        Feito com 💓 por {''}
        <a
          className="underline underline-offset-2"
          href="https://github.com/KleytonFSantos"
        >
          Kleyton
        </a>!
      </footer>
    </div>
  );
}

export default WidgetForm;
