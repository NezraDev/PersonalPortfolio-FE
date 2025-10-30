import "../index.css";
import NavBar from "../components/Navigation";
import Home from "../pages/Home";
import About from "../pages/About";
import MobileSection from "../components/MobileSection";

function Layout({ children }) {
  return (
    <div
      role="main"
      className="flex flex-col w-screen relative "
      style={{
        background: "linear-gradient(to top, #eab308, #000000)",
        backgroundAttachment: "fixed",
      }}
      aria-label="Main content"
    >
      <div
        className="absolute inset-0 bg-black opacity-40"
        style={{
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col flex-1 top-4">
        <header
          className="w-full justify-center items-center p-1 sm:p-4 md:p-4 lg:p-6 flex"
          role="banner"
        >
          <NavBar />
        </header>

        <main className="flex-1 flex flex-col">
          {children}

          <div className="hidden lg:block flex-1">
            <Home />
            <About />
          </div>

          <div className="block lg:hidden flex-1">
            <MobileSection />
          </div>
          <div className="hidden lg:block flex-1"></div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
