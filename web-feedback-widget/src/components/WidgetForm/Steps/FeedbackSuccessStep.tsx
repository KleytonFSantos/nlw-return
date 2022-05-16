import CloseButton from '../../CloseButton'
import SuccessIcon from '../../../assets/tick.png'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequest: () => void;
}

function FeedbackSuccessStep({ onFeedbackRestartRequest }: FeedbackSuccessStepProps) {
  return (
    <>
    <header>
      <CloseButton />
    </header>

    <div className="flex flex-col items-center py-10 w-[304px]">
      <img className="mb-6" src={SuccessIcon} alt="Imagem de sucesso" />

      <span className="text-xl mt-2"> Agradecemos o Feedback!</span>
    </div>

    <button 
    type="button"
    onClick={ onFeedbackRestartRequest }
    className="py-2 px-6 mt-4 mb-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      Quero enviar outro.
    </button>
    </>
  )
}

export default FeedbackSuccessStep