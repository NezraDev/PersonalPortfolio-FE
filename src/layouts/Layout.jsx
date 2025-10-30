import "../index.css";
import NavBar from "../pages/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
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
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        style={{
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header with navigation */}
        <header
          className="w-full justify-center items-center p-1 sm:p-4 md:p-4 lg:p-6 flex"
          role="banner"
        >
          <NavBar />
        </header>

        {/* Main content area */}
        <main className="flex-1 flex flex-col">
          {children}

          {/* Desktop Hero */}
          <div className="hidden lg:block flex-1">
            <Hero />
            <About />
          </div>

          {/* Mobile Section */}
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
