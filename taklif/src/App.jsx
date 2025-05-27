import Counter from "../1-counter/Counter";
import ThemeToggle from "../2-toggle-theme/ThemeToggle";
import LikeAndDislike from "../3-likeAndDeslike/LikeAndDislike";

export default function App() {
  return (
    <div>
      <Counter />
      <hr />
      <ThemeToggle />
      <hr />
      <LikeAndDislike />
    </div>
  );
}
