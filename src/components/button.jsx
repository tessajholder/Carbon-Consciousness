import '../button.css';
export default function StartButton() {
  return (
    <button className="button"
      onClick={() => window.location.href='/calculator'}
    >
      Calculate your carbon footprint here!
    </button>
  );
}