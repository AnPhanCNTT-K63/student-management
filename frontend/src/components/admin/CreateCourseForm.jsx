import { useState } from "react";
import { CreateCourse } from "./CreateCourse";
import { CreateClass } from "./CreateClass";
import { CreateSchedule } from "./CreateSchedule";

export default function CreateCourseForm() {
  const [step, setStep] = useState(1);
  const [courseData, setCourseData] = useState({
    name: "",
    studentNum: "",
    creditNum: "",
  });

  const [classData, setClassData] = useState({
    major: "",
    semester: "",
    grade: "",
    lecturer: "",
  });

  const [scheduleData, setScheduleData] = useState({
    startDate: "",
    endDate: "",
    startPeriod: "",
    endPeriod: "",
    roomCode: "",
    roomNumber: "",
  });

  // Dữ liệu mẫu cho các dropdown
  const majors = [
    "Công nghệ thông tin",
    "Khoa học máy tính",
    "Kỹ thuật phần mềm",
    "Hệ thống thông tin",
  ];
  const semesters = ["Học kỳ 1", "Học kỳ 2", "Học kỳ hè"];
  const grades = ["K63", "K64", "K65", "K66"];
  const lecturers = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Thị D"];
  const roomCodes = ["D3", "D5", "D9", "G2", "G3"];
  const roomNumbers = ["101", "102", "103", "201", "202", "301"];

  const handleCourseChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClassChange = (e) => {
    setClassData({
      ...classData,
      [e.target.name]: e.target.value,
    });
  };

  const handleScheduleChange = (e) => {
    setScheduleData({
      ...scheduleData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi dữ liệu tới backend
    console.log("Dữ liệu khóa học:", courseData);
    console.log("Dữ liệu lớp học phần:", classData);
    console.log("Dữ liệu lịch học:", scheduleData);
    alert("Đã tạo khóa học thành công!");
    // Reset form
    setCourseData({ name: "", studentNum: "", creditNum: "" });
    setClassData({ major: "", semester: "", grade: "", lecturer: "" });
    setScheduleData({
      startDate: "",
      endDate: "",
      startPeriod: "",
      endPeriod: "",
      roomCode: "",
      roomNumber: "",
    });
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-blue-600 text-white" : "bg-gray-300"
                }`}
              >
                1
              </div>
              <div
                className={`h-1 w-16 mx-2 ${
                  step >= 2 ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-blue-600 text-white" : "bg-gray-300"
                }`}
              >
                2
              </div>
              <div
                className={`h-1 w-16 mx-2 ${
                  step >= 3 ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-blue-600 text-white" : "bg-gray-300"
                }`}
              >
                3
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span
              className={
                step >= 1 ? "text-blue-600 font-medium" : "text-gray-500"
              }
            >
              Tạo học phần
            </span>
            <span
              className={
                step >= 2 ? "text-blue-600 font-medium" : "text-gray-500"
              }
            >
              Tạo lớp học phần
            </span>
            <span
              className={
                step >= 3 ? "text-blue-600 font-medium" : "text-gray-500"
              }
            >
              Tạo lịch học
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <CreateCourse
              courseData={courseData}
              handleCourseChange={handleCourseChange}
              handleNextStep={handleNextStep}
            />
          )}

          {step === 2 && (
            <CreateClass
              classData={classData}
              majors={majors}
              semesters={semesters}
              grades={grades}
              lecturers={lecturers}
              handleClassChange={handleClassChange}
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
            />
          )}

          {step === 3 && (
            <CreateSchedule
              scheduleData={scheduleData}
              roomCodes={roomCodes}
              roomNumbers={roomNumbers}
              handleScheduleChange={handleScheduleChange}
              handlePrevStep={handlePrevStep}
            />
          )}
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-medium text-gray-700 mb-2">Tổng quan dữ liệu</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-1">
                  Thông tin học phần
                </h4>
                <p className="text-sm text-gray-500">
                  Tên: {courseData.name || "(Chưa nhập)"}
                </p>
                <p className="text-sm text-gray-500">
                  Số SV: {courseData.studentNum || "(Chưa nhập)"}
                </p>
                <p className="text-sm text-gray-500">
                  Số tín chỉ: {courseData.creditNum || "(Chưa nhập)"}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">
                  Thông tin lớp học phần
                </h4>
                <p className="text-sm text-gray-500">
                  Ngành: {classData.major || "(Chưa chọn)"}
                </p>
                <p className="text-sm text-gray-500">
                  Học kỳ: {classData.semester || "(Chưa chọn)"}
                </p>
                <p className="text-sm text-gray-500">
                  Khối: {classData.grade || "(Chưa chọn)"}
                </p>
                <p className="text-sm text-gray-500">
                  GV: {classData.lecturer || "(Chưa chọn)"}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">
                  Thông tin lịch học
                </h4>
                <p className="text-sm text-gray-500">
                  Bắt đầu: {scheduleData.startDate || "(Chưa chọn)"}
                </p>
                <p className="text-sm text-gray-500">
                  Kết thúc: {scheduleData.endDate || "(Chưa chọn)"}
                </p>
                <p className="text-sm text-gray-500">
                  Tiết:{" "}
                  {scheduleData.startPeriod && scheduleData.endPeriod
                    ? `${scheduleData.startPeriod}-${scheduleData.endPeriod}`
                    : "(Chưa chọn)"}
                </p>
                <p className="text-sm text-gray-500">
                  Phòng:{" "}
                  {scheduleData.roomCode && scheduleData.roomNumber
                    ? `${scheduleData.roomCode}-${scheduleData.roomNumber}`
                    : "(Chưa chọn)"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
