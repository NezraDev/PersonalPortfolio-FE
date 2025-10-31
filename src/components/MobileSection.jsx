import HomeMobile from "./HomeMobile";
import AboutMobile from "./AboutMobile";
import SkillsMobile from "./SkillsMobile";
import ProjectsMobile from "./ProjectsMobile";

function MobileSection() {
  return (
    <div className="w-full flex-col items-center justify-center bg-transparent">
      <HomeMobile />
      <AboutMobile />
      <SkillsMobile />
      <ProjectsMobile />
    </div>
  );
}

export default MobileSection;
