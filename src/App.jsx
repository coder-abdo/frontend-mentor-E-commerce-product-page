import { Drawer } from "./components/drawer";
import { Navbar } from "./components/navbar";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { useToggleMenuStore } from "./store";

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isOpen = useToggleMenuStore((state) => state.isOpen);
  return (
    <div className="lg:max-w-7xl mx-auto">
      {isMobile && isOpen && (
        <>
          <div className="bg-black/55 fixed inset-0 z-10 md:hidden" />
          <Drawer />
        </>
      )}
      <Navbar />
    </div>
  );
}

export default App;
