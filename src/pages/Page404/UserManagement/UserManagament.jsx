import React, { useEffect, useState } from "react";
import { nguoiDungServ } from "../../../services/nguoiDungServices";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../redux/slices/nguoiDungSlice";
import TableUser from "../../../Components/TableUser/TableUser";
import { Drawer } from "antd";
import FormAddUser from "../../../Components/FormAddUser/FormAddUser";

const UserManagament = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const { users } = useSelector((state) => state.nguoiDung);
  useEffect(() => {
    // nguoiDungServ
    //   .getAllUser()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((erro) => {
    //     console.log(erro);
    //   });
    dispatch(getAllUser());
  }, []);
  console.log(users);
  // mọt hàm vừa gọi vừa bắn dữ liệu lên redux
  //redux không cho phép bắn dữ liệu lên redux
  //   redux -thunk là moothj midleware cho phép xử trước khi dispatch tới <source />
  return (
    <div>
      <button
        className="px-5 py-3 text-white bg-green-600"
        type="primary"
        onClick={showDrawer}
      >
        Thêm Mới
      </button>
      <TableUser />
      <Drawer
        title="Thêm Người Dùng"
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <FormAddUser />
      </Drawer>
    </div>
  );
};

export default UserManagament;
