function Navbar() {
  return (
    <div className="font-mono flex flex-col bg-gray-200 w-80 fixed left-0 h-screen">
      <div className="text-center pt-10">
        <figure className="flex justify-center">
          <img
            src="/public/images/user.png"
            alt="user"
            className="w-32 h-32 border-4 border-gray-50 rounded-full"
          />
        </figure>
        <h6 className="text-sm font-semibold pt-4">นพ.ทดสอบ ระบบแพทย์</h6>
        <p className="text-sm font-semibold">กระทรวงสาธารณะสุข กรมควบคุมโรค</p>
        <ul className="text-left pl-6 pt-10 hover:bg-gray-200">
          <li className="py-3 hover:bg-gray-50 rounded-l-full pl-2 text-lg font-extrabold flex group">
            <div className="w-8 h-8 rounded-full bg-gray-50 mr-4 group-hover:bg-gray-200"></div>
            <a href="#" className="flex items-center">
              หน้าหลัก
            </a>
          </li>
          <li className="py-3 hover:bg-gray-50 rounded-l-full pl-2 text-lg font-extrabold flex group">
            <div className="w-8 h-8 rounded-full bg-gray-50 mr-4 group-hover:bg-gray-200"></div>
            <a href="#" className="flex items-center">
              ขึ้นทะเบียนสำเร็จ
            </a>
          </li>
          <li className="py-3 hover:bg-gray-50 rounded-l-full pl-2 text-lg font-extrabold flex group">
            <div className="w-8 h-8 rounded-full bg-gray-50 mr-4 group-hover:bg-gray-200"></div>
            <a href="#" className="flex items-center">
              User Management
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-start pl-16 mt-auto mb-2">
        <ul className="text-left">
          <li className="py-1">
            <a href="#" className="font-medium">
              บริการอื่นๆ
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="font-medium">
              คำถามที่พบบ่อย
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="font-extrabold">
              ออกจากระบบ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
