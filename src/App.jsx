import { Drawer } from "./components/drawer";
import { Navbar } from "./components/navbar";
import { Product } from "./components/product";
import { useAppHooks } from "./hooks/useAppHooks";

function App() {
  const { isMobile, isOpen, isClicked } = useAppHooks();
  return (
    <div className="lg:max-w-7xl mx-auto">
      {isClicked && !isMobile && (
        <div className="bg-black/55 fixed inset-0 z-10" />
      )}

      {isMobile && isOpen && (
        <>
          <div className="bg-black/55 fixed inset-0 z-10 md:hidden" />
          <Drawer />
        </>
      )}
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
