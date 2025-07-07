import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  Settings, 
  CreditCard, 
  Search, 
  Bell, 
  FileText, 
  Calendar,
  LogOut,
  X,
  BarChart3,
  Gavel
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen, onLogout }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Bill Management', href: '/bills', icon: CreditCard },
    { name: 'Search Bills', href: '/search-bills', icon: Search },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Files Directory', href: '/files', icon: FileText },
    { name: 'Holiday Planner', href: '/holidays', icon: Calendar },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  // Auto-close sidebar on route change (mobile only)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname, setSidebarOpen]);

  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 flex z-40 md:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-sidebar-900">
            <SidebarContent navigation={navigation} location={location} onLogout={onLogout} setSidebarOpen={setSidebarOpen} isMobile={true} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-sidebar-900">
            <SidebarContent navigation={navigation} location={location} onLogout={onLogout} />
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarContent = ({ navigation, location, onLogout, setSidebarOpen, isMobile }) => {
  return (
    <>
      {/* Logo */}
      <div className="flex items-center h-16 flex-shrink-0 px-4 bg-sidebar-900">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Gavel className="h-8 w-8 text-primary-400" />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-white">CourtReporter</h1>
              <p className="text-xs text-gray-300">Dashboard</p>
            </div>
          </div>
          {/* Close button for mobile */}
          {isMobile && (
            <button
              className="ml-auto flex items-center justify-center h-8 w-8 rounded-md hover:bg-sidebar-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5 text-gray-300 hover:text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 space-y-1">
          <div className="mb-6">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              MAIN
            </p>
          </div>
          
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:bg-sidebar-800 hover:text-white'
                } group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200`}
              >
                <item.icon
                  className={`${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  } mr-3 flex-shrink-0 h-5 w-5 transition-colors duration-200`}
                />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="flex-shrink-0 flex border-t border-sidebar-700 p-4">
        <button
          onClick={onLogout}
          className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-sidebar-800 transition-colors duration-200"
        >
          <LogOut className="mr-3 h-5 w-5 text-gray-400" />
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
