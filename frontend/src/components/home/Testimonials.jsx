import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      quote:
        "UTC2 đã trang bị cho tôi không chỉ kiến thức chuyên môn mà còn cả kỹ năng mềm và cơ hội thực tập tại các doanh nghiệp hàng đầu.",
      author: "Nguyễn Văn X, Cựu sinh viên ngành Kỹ thuật Xây dựng, Khoá 2020",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 2,
      quote:
        "Đội ngũ giảng viên nhiệt tình, cơ sở vật chất hiện đại và môi trường học tập năng động là những điều tôi yêu thích nhất tại UTC2.",
      author: "Trần Thị Y, Sinh viên năm 3 ngành Công nghệ Thông tin",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 3,
      quote:
        "Chương trình đào tạo thực tiễn và cập nhật liên tục giúp sinh viên UTC2 dễ dàng tìm được việc làm ngay sau khi tốt nghiệp.",
      author: "Lê Văn Z, Giám đốc Công ty ABC, Nhà tuyển dụng",
      avatar: "/api/placeholder/80/80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Tiếng nói từ cộng đồng UTC2
        </h2>
        <div className="relative">
          <div className="max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`text-center transition-opacity duration-500 ease-in-out ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0 absolute top-0 left-0 right-0"
                }`}
              >
                <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 ${
                  activeIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
