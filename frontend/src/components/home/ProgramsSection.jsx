export const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Kỹ thuật Xây dựng Công trình Giao thông",
      description:
        "Đào tạo kỹ sư thiết kế, thi công và quản lý các công trình giao thông",
      icon: "🏗️",
    },
    {
      id: 2,
      title: "Công nghệ Thông tin",
      description:
        "Đào tạo chuyên gia về phát triển phần mềm và hệ thống thông tin",
      icon: "💻",
    },
    {
      id: 3,
      title: "Kinh tế Vận tải",
      description:
        "Đào tạo chuyên gia về kinh tế và quản lý trong lĩnh vực vận tải",
      icon: "📊",
    },
    {
      id: 4,
      title: "Logistics và Quản lý Chuỗi cung ứng",
      description: "Đào tạo chuyên gia về quản lý logistics và chuỗi cung ứng",
      icon: "🚚",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Các chương trình đào tạo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="border border-gray-200 rounded-lg p-6 flex items-start hover:bg-blue-50 transition-colors"
            >
              <div className="text-4xl mr-4">{program.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline inline-block mt-3"
                >
                  Tìm hiểu thêm →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
