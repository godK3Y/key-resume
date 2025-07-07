import Header from "../components/header";
import MainContent from "../components/main";
import { AutoCarousel } from "../components/auto-carousel";

export default function Portfolio() {
  return (
    <div className="bg-background min-h-screen bg-gradient-to-br from-background via-background to-muted/20 transition-colors duration-300">
      {/* Auto-running Carousel */}
      <AutoCarousel />

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Fixed Header Section */}
        <div className="lg:w-2/5 xl:w-1/3 lg:min-h-screen lg:sticky lg:top-0">
          <Header />
        </div>

        {/* Scrollable Main Content */}
        <div className="flex-1 lg:w-3/5 xl:w-2/3">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
