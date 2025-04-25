import { useState, useEffect } from "react";
import { WelcomeSection } from "../../components/home/WelcomeSection";
import { NewsSection } from "../../components/home/NewsSection";
import { StatsSection } from "../../components/home/StatsSection";
import { OutstandingStudents } from "../../components/home/OutstandingStudents";
import { ProgramsSection } from "../../components/home/ProgramsSection";
import { EventsCalendar } from "../../components/home/EventsCalendar";
import { Testimonials } from "../../components/home/Testimonials";
import { ContactSection } from "../../components/home/ContactSection";

const images = [
  "https://picsum.photos/id/1015/1600/500",
  "https://picsum.photos/id/1016/1600/500",
  "https://picsum.photos/id/1018/1600/500",
  "https://picsum.photos/id/1020/1600/500",
  "https://picsum.photos/id/1024/1600/500",
];
export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-width auto-slider */}
      <div className="w-full h-96 md:h-[500px] lg:h-[600px] relative overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Trường Đại học Giao thông Vận tải - Phân hiệu tại TP.HCM`}
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Trường Đại học Giao thông Vận tải
            </h1>
            <p className="text-xl md:text-2xl">
              Phân hiệu tại TP. Hồ Chí Minh (UTC2)
            </p>
          </div>
        </div>
      </div>

      {/* Page content */}
      <WelcomeSection />
      <StatsSection />
      <ProgramsSection />
      <NewsSection />
      <OutstandingStudents />
      <EventsCalendar />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
