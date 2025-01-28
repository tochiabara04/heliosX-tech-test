import styles from '../../styles/question.module.scss';

interface QuestionProps {
  question: string;
  onAnswer: (answer: boolean) => void;
}

const Question = ({ question, onAnswer }: QuestionProps) => (
  <div className={styles.question}>
    <p>{question}</p>
    <div className={styles.buttons}>
    <button onClick={() => onAnswer(true)}>Yes</button>
    <button onClick={() => onAnswer(false)}>No</button>
    </div>
  </div>
);

export default Question;
