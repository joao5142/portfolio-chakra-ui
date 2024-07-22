import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import ScrollToTopButton from "./components/partials/ScrollToTopButton";

export function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
