import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-6 w-full">
      {/* Removed max-w-7xl to allow full width */}
      <div className="w-full px-4">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* University Info */}
          <div className="flex items-start mb-6 md:mb-0">
            <img
              src="/api/placeholder/80/80"
              alt="University Logo"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <div className="uppercase font-bold text-lg">
                Trường Đại Học Giao Thông Vận Tải
              </div>
              <div className="text-yellow-300 uppercase font-semibold">
                Phân Hiệu Tại TP. Hồ Chí Minh
              </div>
              <div className="text-sm mt-2">
                450-451 Lê Văn Việt, Phường Tăng Nhơn Phú A,
                <br />
                Thành phố Thủ Đức, TP.Hồ Chí Minh
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-medium">Đào tạo</div>
              <div className="text-sm mt-1">(028).3896.2018</div>
            </div>
            <div>
              <div className="font-medium">Tuyển sinh</div>
              <div className="text-sm mt-1">(028).3896.2819</div>
            </div>
            <div>
              <div className="font-medium">Công tác chính trị sinh viên</div>
              <div className="text-sm mt-1">(028).3736.0564</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
