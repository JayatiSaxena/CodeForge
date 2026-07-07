import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";
import WelcomeCard from "./WelcomeCard";
import Statistics from "./Statistics";
import UserProfile from "./UserProfile";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";
import DashboardFooter from "./DashboardFooter";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <DashboardNavbar />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard Content */}
        <main className="flex-1 p-8 space-y-8">
          <WelcomeCard />

          <Statistics />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <UserProfile />
            <RecentActivity />
          </div>

          <QuickActions />
        </main>
      </div>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
}