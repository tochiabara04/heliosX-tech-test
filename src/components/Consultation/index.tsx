import { useEffect, useState } from 'react';
import styles from '../../styles/consultation.module.scss';
import Question from '../Question';

const questions = [
  'Do you have a nut allergy?',
  'Have you consulted a doctor before?',
  'Are you currently taking any medication?',
  'Do you experience severe symptoms?',
  'Are you over 18 years old?',
];

const Consultation = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (answer: boolean) => {
    console.log(`Question: ${questions[currentQuestion]}, Answer: ${answer ? 'Yes' : 'No'}`);
    setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestion]: answer }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  useEffect(() => {
    if (isComplete) {
      console.log('Final Collected Data:', answers);
      alert('Thank you for completing the consultation!');
    }
  }, [isComplete, answers]);

  return (
    <div className={styles.consultation}>
      {!isComplete ? (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <p className={styles.gratitude}>Thank you for completing the consultation!</p>
      )}
    </div>
  );
};

export default Consultation;
