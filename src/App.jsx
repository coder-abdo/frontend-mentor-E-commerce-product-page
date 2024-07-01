import { Drawer } from "./components/drawer";
import { Navbar } from "./components/navbar";
import { Product } from "./components/product";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { useLightBoxStore, useToggleMenuStore } from "./store";

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isOpen = useToggleMenuStore((state) => state.isOpen);
  const isClicked = useLightBoxStore(state => state.isClicked)
  console.log(isClicked, isMobile)
  return (
    <div className="lg:max-w-7xl mx-auto">
      {isClicked && !isMobile && <div className="bg-black/55 fixed inset-0 z-10" />}

      {isMobile && isOpen && (
        <>
          <div className="bg-black/55 fixed inset-0 z-10 md:hidden" />
          <Drawer />
        </>
      )}
      <Navbar />
      <main>
        <Product />
      </main>
    </div>
  );
}

export default App;
