export const OutstandingStudents = () => {
  const students = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      major: "Kỹ thuật Xây dựng Cầu đường",
      achievement: "Giải nhất cuộc thi sáng tạo kỹ thuật toàn quốc 2024",
      avatar: "/api/placeholder/100/100",
    },
    {
      id: 2,
      name: "Trần Thị B",
      major: "Logistics và Quản lý Chuỗi cung ứng",
      achievement: "Học bổng toàn phần trao đổi tại Đại học Kyoto, Nhật Bản",
      avatar: "/api/placeholder/100/100",
    },
    {
      id: 3,
      name: "Lê Minh C",
      major: "Công nghệ Thông tin",
      achievement: "Giải ba Olympic Tin học sinh viên Việt Nam 2024",
      avatar: "/api/placeholder/100/100",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Sinh viên tiêu biểu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{student.name}</h3>
              <p className="text-blue-600 mb-2">{student.major}</p>
              <p className="text-gray-600">{student.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
