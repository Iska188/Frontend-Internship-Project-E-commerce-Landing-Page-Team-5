import Header from "./components/layout/Header";
import Container from "./components/layout/Container";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Placeholder so the container spacing below the header is visible too */}
      <Container>
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-gray-200 text-sm text-gray-400">
          Page content goes here — hero, categories, etc.
        </div>
      </Container>
    </div>
  );
}
