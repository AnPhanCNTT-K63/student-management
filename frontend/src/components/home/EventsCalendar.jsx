export const EventsCalendar = () => {
  const events = [
    {
      id: 1,
      title: "Hội nghị Khoa học Sinh viên lần thứ 15",
      date: "05/05/2025",
      location: "Hội trường A, UTC2",
    },
    {
      id: 2,
      title: "Ngày hội Việc làm - UTC2 Career Fair 2025",
      date: "15/05/2025",
      location: "Sân thể thao, UTC2",
    },
    {
      id: 3,
      title: "Hạn cuối đăng ký học phần học kỳ I năm học 2025-2026",
      date: "20/05/2025",
      location: "Online",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Sự kiện sắp tới
        </h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`p-6 ${
                index < events.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-4 text-center min-w-20">
                    <div className="font-medium">
                      {event.date.split("/")[0]}
                    </div>
                    <div>Tháng {event.date.split("/")[1]}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-gray-600">Địa điểm: {event.location}</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg inline-block transition-colors"
                >
                  Chi tiết
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
