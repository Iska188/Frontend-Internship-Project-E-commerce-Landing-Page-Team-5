import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <TopBar />
      <MainHeader />
      <NavBar />
    </header>
  );
}
