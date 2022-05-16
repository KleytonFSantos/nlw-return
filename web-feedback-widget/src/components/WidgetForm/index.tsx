import CloseButton from "../CloseButton";

import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";

import bugImageUrl from "../../assets/virus.png";
import ideaImageUrl from "../../assets/idea.png";
import thoughtImageUrl from "../../assets/thought-bubble.png";
import { useState } from "react";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problemas",
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

export type FeedbackType = keyof typeof feedbackTypes;

function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}/>
      ) : (
        <>
        {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
        feedbackType={feedbackType}
        onFeedbackRestartRequest={() => handleRestartFeedback}
        onFeedbackSent = {() =>setFeedbackSent(true)}
        />
      )}
        </>
      )}

      <footer className="text-zinc-500">
        Feito com ♥︎ por {""}
        <a
          className="underline underline-offset-2 "
          href="https://github.com/KleytonFSantos"
        >
          Kleyton Santos
        </a>
        !
      </footer>
    </div>
  );
}

export default WidgetForm;
