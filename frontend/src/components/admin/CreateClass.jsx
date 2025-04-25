export const CreateClass = ({
  classData,
  majors,
  semesters,
  grades,
  lecturers,
  handleClassChange,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div className="CreateClass">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Tạo lớp học phần
      </h2>
      <div className="mb-4">
        <label htmlFor="major" className="block text-gray-700 font-medium mb-2">
          Ngành học
        </label>
        <select
          id="major"
          name="major"
          value={classData.major}
          onChange={handleClassChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Chọn ngành học</option>
          {majors.map((major, index) => (
            <option key={index} value={major}>
              {major}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="semester"
          className="block text-gray-700 font-medium mb-2"
        >
          Học kỳ
        </label>
        <select
          id="semester"
          name="semester"
          value={classData.semester}
          onChange={handleClassChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Chọn học kỳ</option>
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="grade" className="block text-gray-700 font-medium mb-2">
          Mã khối
        </label>
        <select
          id="grade"
          name="grade"
          value={classData.grade}
          onChange={handleClassChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Chọn mã khối</option>
          {grades.map((grade, index) => (
            <option key={index} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="lecturer"
          className="block text-gray-700 font-medium mb-2"
        >
          Giảng viên
        </label>
        <select
          id="lecturer"
          name="lecturer"
          value={classData.lecturer}
          onChange={handleClassChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Chọn giảng viên</option>
          {lecturers.map((lecturer, index) => (
            <option key={index} value={lecturer}>
              {lecturer}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePrevStep}
          className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 transition-colors"
        >
          Quay lại
        </button>
        <button
          type="button"
          onClick={handleNextStep}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
        >
          Tiếp theo
        </button>
      </div>
    </div>
  );
};
