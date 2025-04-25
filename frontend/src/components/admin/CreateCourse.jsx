export const CreateCourse = ({
  courseData,
  handleCourseChange,
  handleNextStep,
}) => {
  return (
    <div className="CreateCourse">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Tạo học phần mới
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Tên học phần
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={courseData.name}
          onChange={handleCourseChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="studentNum"
          className="block text-gray-700 font-medium mb-2"
        >
          Số lượng sinh viên
        </label>
        <input
          type="number"
          id="studentNum"
          name="studentNum"
          value={courseData.studentNum}
          onChange={handleCourseChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          min="1"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="creditNum"
          className="block text-gray-700 font-medium mb-2"
        >
          Số tín chỉ
        </label>
        <input
          type="number"
          id="creditNum"
          name="creditNum"
          value={courseData.creditNum}
          onChange={handleCourseChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          min="1"
          max="10"
        />
      </div>
      <div className="flex justify-end">
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
