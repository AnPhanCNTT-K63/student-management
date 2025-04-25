export const StatsSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">10,000+</div>
            <p className="text-lg text-gray-600">Sinh viên đang theo học</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-lg text-gray-600">Giảng viên, nhà nghiên cứu</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">25+</div>
            <p className="text-lg text-gray-600">Ngành đào tạo</p>
          </div>
        </div>
      </div>
    </div>
  );
};
