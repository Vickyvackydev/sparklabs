import AboutCommunity from "../ui/community/about";
import CommunityDesigns from "../ui/community/designs";
import CommunityHero from "../ui/community/hero";
import LandingPage from "../ui/community/landingpage";
import More from "../ui/more";

function Community() {
  return (
    <>
      <CommunityHero />
      <AboutCommunity />
      <CommunityDesigns />

      <LandingPage />
      <div className="mt-7">
        <More />
      </div>
    </>
  );
}

export default Community;
