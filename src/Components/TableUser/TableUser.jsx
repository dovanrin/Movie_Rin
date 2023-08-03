import React from "react";
import { Table, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { getAllUser } from "../../redux/slices/nguoiDungSlice";
const TableUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.nguoiDung);
  console.log(users);
  //   let newUser = users.map
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      //   custom lại hiển thị cột
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoai",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Loai Người Dùng",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
      render: (text, record, index) => {
        // text chứa giá trị của thuộc tính trong data.
        // record chưa thông tin phần tử trong mảng của data
        // index là vị trí trong mảng data
        console.log(text);
        console.log(record);
        console.log(index);
        return (
          //   <p>
          //     {() => {
          //       return text == "QuanTri" ? "Quản Trị" : "Khách Hàng";
          //     }}
          //   </p>
          <Tag color={text == "QuanTri" ? "green" : "blue"}>
            {text == "QuanTri" ? "Quản Trị" : "Khách Hàng"}
          </Tag>
        );
      },
      // // <>
      //   {/* {tags.map((tag) => {
      //     let color = tag.length > 5 ? "geekblue" : "green";
      //     if (tag === "loser") {
      //       color = "volcano";
      //     }
      //     return (
      //       <Tag color={color} key={tag}>
      //         {tag.toUpperCase()}
      //       </Tag>
      //     );
      //   })} */}

      // {/* </> */}
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            className="py-2 px-5 bg-red-500 text-white rounded-lg hover:bg-red-900  duration-500"
            onClick={() => {
              nguoiDungServ
                .deleteUser(record.taiKhoan)
                .then((res) => {
                  alert(`xóa thành công người dùng ${record.hoTen}`);
                  dispatch(getAllUser());
                })
                .catch((erro) => {
                  console.log(erro);
                });
            }}
          >
            Xóa
          </button>
          <button className="py-2 px-5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-900  duration-500">
            Sữa
          </button>
        </Space>
      ),
    },
  ];
  //   const data = [
  //     {
  //       key: "1",
  //       name: "John Brown",
  //       age: 32,
  //       address: "New York No. 1 Lake Park",
  //       tags: ["nice", "developer"],
  //     },
  //     {
  //       key: "2",
  //       name: "Jim Green",
  //       age: 42,
  //       address: "London No. 1 Lake Park",
  //       tags: ["loser"],
  //     },
  //     {
  //       key: "3",
  //       name: "Joe Black",
  //       age: 32,
  //       address: "Sydney No. 1 Lake Park",
  //       tags: ["cool", "teacher"],
  //     },
  //   ];
  let newUser = users.map((item, index) => {
    return { ...item, id: index + 1 };
  });
  return (
    <div>
      <Table columns={columns} dataSource={users.length > 0 && newUser} />;
    </div>
  );
};

export default TableUser;
