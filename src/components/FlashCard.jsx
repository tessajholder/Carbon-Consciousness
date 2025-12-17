import { useState } from 'react';
import '../Flashcard.css'

export default function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card-container ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="card">
        <div className="front">
          <p> {question}</p>
        </div>
        <div className="back">
          <p> {answer}</p>
        </div>
      </div>
    </div>
  );
}