export const CreateSchedule = ({
  scheduleData,
  roomCodes,
  roomNumbers,
  handleScheduleChange,
  handlePrevStep,
}) => {
  return (
    <div className="CreateSchedule">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Tạo lịch học
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-gray-700 font-medium mb-2"
          >
            Ngày bắt đầu
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={scheduleData.startDate}
            onChange={handleScheduleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-gray-700 font-medium mb-2"
          >
            Ngày kết thúc
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={scheduleData.endDate}
            onChange={handleScheduleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startPeriod"
            className="block text-gray-700 font-medium mb-2"
          >
            Tiết bắt đầu
          </label>
          <select
            id="startPeriod"
            name="startPeriod"
            value={scheduleData.startPeriod}
            onChange={handleScheduleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Chọn tiết bắt đầu</option>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Tiết {num}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="endPeriod"
            className="block text-gray-700 font-medium mb-2"
          >
            Tiết kết thúc
          </label>
          <select
            id="endPeriod"
            name="endPeriod"
            value={scheduleData.endPeriod}
            onChange={handleScheduleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Chọn tiết kết thúc</option>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                Tiết {num}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="roomCode"
            className="block text-gray-700 font-medium mb-2"
          >
            Mã phòng
          </label>
          <select
            id="roomCode"
            name="roomCode"
            value={scheduleData.roomCode}
            onChange={handleScheduleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Chọn mã phòng</option>
            {roomCodes.map((code, index) => (
              <option key={index} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="roomNumber"
            className="block text-gray-700 font-medium mb-2"
          >
            Số phòng
          </label>
          <select
            id="roomNumber"
            name="roomNumber"
            value={scheduleData.roomNumber}
            onChange={handleScheduleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Chọn số phòng</option>
            {roomNumbers.map((number, index) => (
              <option key={index} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={handlePrevStep}
          className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 transition-colors"
        >
          Quay lại
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
        >
          Hoàn tất
        </button>
      </div>
    </div>
  );
};
