export const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Lễ Khai giảng năm học 2025-2026",
      date: "20/04/2025",
      excerpt:
        "UTC2 chào đón hơn 2,500 tân sinh viên trong buổi lễ khai giảng năm học mới...",
    },
    {
      id: 2,
      title: "Hội thảo Công nghệ Giao thông Thông minh",
      date: "15/04/2025",
      excerpt:
        "Trường Đại học UTC2 tổ chức hội thảo về ứng dụng AI trong quản lý giao thông đô thị...",
    },
    {
      id: 3,
      title: "Thông báo học bổng học kỳ II năm học 2024-2025",
      date: "10/04/2025",
      excerpt:
        "Phòng Công tác Sinh viên thông báo về việc xét cấp học bổng khuyến khích học tập...",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Tin tức & Thông báo
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Xem tất cả
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300">
                <img
                  src={`/api/placeholder/400/200`}
                  alt="News thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Đọc thêm
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
