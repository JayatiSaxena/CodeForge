export default function DashboardFooter() {
  return (
    <footer className="bg-white border-t mt-6">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left Side */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        {/* Right Side Links */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <a href="/dashboard/help" className="hover:text-gray-700 transition">
            Help
          </a>
          <a href="/dashboard/privacy" className="hover:text-gray-700 transition">
            Privacy
          </a>
          <a href="/dashboard/terms" className="hover:text-gray-700 transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}