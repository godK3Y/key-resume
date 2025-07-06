import Header from "../components/header";
import MainContent from "../components/main";

export default function Portfolio() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
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
