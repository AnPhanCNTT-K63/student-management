export const ContactSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Liên hệ với chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 text-blue-600">📍</div>
                <div>
                  <p className="font-medium">Địa chỉ:</p>
                  <p>
                    450-451 Lê Văn Việt, Phường Tăng Nhơn Phú A, Thành phố Thủ
                    Đức, TP. Hồ Chí Minh
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-blue-600">📞</div>
                <div>
                  <p className="font-medium">Điện thoại:</p>
                  <p>(028) 3896 6798</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-blue-600">✉️</div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p>info@utc2.edu.vn</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-blue-600">🕒</div>
                <div>
                  <p className="font-medium">Giờ làm việc:</p>
                  <p>Thứ 2 - Thứ 6: 7:30 - 17:00</p>
                  <p>Thứ 7: 7:30 - 11:30</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Gửi thắc mắc</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Họ và tên</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nội dung</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
