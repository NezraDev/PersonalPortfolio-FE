import "../index.css";
import NavBar from "../components/Navigation";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import MobileSection from "../components/MobileSection";

function Layout({ children }) {
  return (
    <div
      role="main"
      className="flex flex-col w-screen min-h-screen relative"
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

      <div className="relative z-10 flex flex-col flex-1 ">
        <header className=" justify-center items-center " role="banner">
          <NavBar />
        </header>

        <main className="flex-1 flex flex-col">
          <div className="flex-col hidden lg:block flex-1">
            <section className="min-h-screen w-full">
              <Home />
            </section>
            <section className="min-h-screen w-full">
              <About />
            </section>
            <section className="min-h-screen w-full">
              <Projects />
            </section>
          </div>

          <div className="block lg:hidden flex-1">
            <MobileSection />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
