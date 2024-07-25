import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    axios
      .get("https://test-api-py77dwlbxa-df.a.run.app/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getStatus = (status) => {
    switch (status) {
      case "รอตรวจสอบ":
        return "bg-yellow-500 text-white";
      case "พิจารณาเอกสาร":
        return "bg-orange-500 text-white";
      case "ขึ้นทะเบียน":
        return "bg-blue-500 text-white";
      case "ออกเอกสาร":
        return "bg-green-500 text-white";
      default:
        return "bg-violet-500 text-white";
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.createDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.verifyBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.verifyDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-col p-4 ml-80 flex items-left justify-center h-screen">
      <h2 className="text-3xl font-extrabold mb-4 ml-16">
        รายการขอขึ้นทะเบียน
      </h2>
      <div>
        <div className="border-l-8 border-gray-300">
          <ul className="flex font-semibold">
            <li className="border-x-8 border-t-8 rounded-tr-full bg-gray-300 px-4 border-gray-300">
              <a href="#">ตรวจความถูกต้อง</a>
            </li>
            <li className="border-x-8 border-t-8 rounded-t-full bg-gray-200 px-4">
              <a href="#">พิจารณาเอกสาร</a>
            </li>
            <li className="border-x-8 border-t-8 rounded-t-full bg-gray-200 px-4">
              <a href="#">ขึ้นทะเบียน</a>
            </li>
            <li className="border-x-8 border-t-8 rounded-t-full bg-gray-200 px-4">
              <a href="#">ออกเอกสาร</a>
            </li>
            <li className="border-x-8 border-t-8 rounded-t-full bg-gray-200 px-8">
              <a href="#">แก้ไข</a>
            </li>
          </ul>
        </div>

        <div className="flex justify-end bg-gray-300 py-2 rounded-tr-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="ค้นหา"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 pr-12 mr-4 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 000 14 7 7 0 000-14zm0 0l6 6m-6-6v12"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="overflow-x-auto bg-white border-x-8 border-b-8 border-gray-300 rounded-b-xl">
          <table className="min-w-full border border-gray-300 rounded-md shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-gray-400">
                  ชื่อหน่วยงาน
                </th>
                <th className="py-2 px-4 border-b text-gray-400">
                  รหัสหน่วยบริการ
                </th>
                <th className="py-2 px-4 border-b text-gray-400">
                  วันที่ขึ้นทะเบียน
                </th>
                <th className="py-2 px-4 border-b text-gray-400">
                  ชื่อผู้ตรวจสอบ
                </th>
                <th className="py-2 px-4 border-b text-gray-400">
                  วันที่ตรวจสอบ
                </th>
                <th className="py-2 px-4 border-b text-gray-400">สถานะ</th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b text-gray-500">
                    {item.code}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-500">
                    {item.createDate}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-400">
                    {item.verifyBy}
                  </td>
                  <td className="py-2 px-4 border-b text-gray-400">
                    {item.verifyDate}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`py-1 px-3 rounded-full font-semibold flex justify-center ${getStatus(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
