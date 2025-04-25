import { useState } from "react";
import {
  Home,
  BookOpen,
  FileText,
  Users,
  ChevronDown,
  Layout,
} from "lucide-react";
import CreateCourseForm from "../../components/admin/CreateCourseForm";

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
      path: "/dashboard",
      submenu: false,
    },
    {
      title: "Học phần",
      icon: <BookOpen size={20} />,
      submenu: true,
      submenuItems: [
        { title: "Tạo học phần", path: "/create-course" },
        { title: "Quản lý học phần", path: "/manage-course" },
      ],
    },
    {
      title: "Bài viết",
      icon: <FileText size={20} />,
      submenu: true,
      submenuItems: [
        { title: "Tạo bài viết", path: "/create-post" },
        { title: "Quản lý bài viết", path: "/manage-post" },
      ],
    },
    {
      title: "Sinh viên",
      icon: <Users size={20} />,
      submenu: true,
      submenuItems: [
        { title: "Tạo sinh viên", path: "/create-student" },
        { title: "Quản lý sinh viên", path: "/manage-student" },
      ],
    },
  ];

  const [activePath, setActivePath] = useState("/dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-gray-800 text-white transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
          {isSidebarOpen && (
            <span className="text-xl font-bold">Admin Panel</span>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-gray-700"
          >
            <Layout size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700 ${
                  activePath === item.path ||
                  (item.submenu &&
                    item.submenuItems.some(
                      (subItem) => subItem.path === activePath
                    ))
                    ? "bg-gray-700"
                    : ""
                }`}
                onClick={() =>
                  item.submenu
                    ? toggleMenu(item.title)
                    : setActivePath(item.path)
                }
              >
                <span className="mr-3">{item.icon}</span>
                {isSidebarOpen && (
                  <>
                    <span className="flex-1">{item.title}</span>
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${
                          activeMenu === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </>
                )}
              </div>

              {/* Submenu */}
              {item.submenu && activeMenu === item.title && isSidebarOpen && (
                <div className="bg-gray-700 pl-12 py-1">
                  {item.submenuItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className={`py-2 px-2 cursor-pointer hover:bg-gray-600 ${
                        activePath === subItem.path ? "text-blue-400" : ""
                      }`}
                      onClick={() => setActivePath(subItem.path)}
                    >
                      {subItem.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-md py-4 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="text-gray-800">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {activePath === "/dashboard" && "Dashboard Overview"}
              {activePath === "/create-course" && "Tạo học phần mới"}
              {activePath === "/manage-course" && "Quản lý học phần"}
              {activePath === "/create-post" && "Tạo bài viết mới"}
              {activePath === "/manage-post" && "Quản lý bài viết"}
              {activePath === "/create-student" && "Tạo sinh viên mới"}
              {activePath === "/manage-student" && "Quản lý sinh viên"}
            </h2>

            {/* Dashboard Content */}
            {activePath === "/dashboard" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Học phần</h3>
                  <p className="text-3xl font-bold mt-2">24</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Bài viết</h3>
                  <p className="text-3xl font-bold mt-2">156</p>
                </div>
                <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Sinh viên</h3>
                  <p className="text-3xl font-bold mt-2">1,204</p>
                </div>
                <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Truy cập</h3>
                  <p className="text-3xl font-bold mt-2">3,542</p>
                </div>
              </div>
            )}

            {/* Page-specific content */}
            {activePath !== "/dashboard" && (
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="mt-4">
                  <CreateCourseForm />
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
