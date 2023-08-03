import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { movieServ } from "../../services/movieServices";
import { getAllMovie } from "../../redux/slices/nguoiDungSlice";
import FormMovie from "./FormMovie";
import { Drawer } from "antd";
// import { getAllUser } from "../../redux/slices/nguoiDungSlice";

// import "./listmovie.scss";
// import { NavLink } from "react-router-dom";
// import { Button } from "antd";

const QuanTriPhim = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // const { users } = useSelector((state) => state.nguoiDung);
  //   const { users } = useSelector((state) => state.nguoiDung);
  //   console.log(users);
  console.log(movies);
  useEffect(() => {
    movieServ
      .callPhimQuanTri()
      .then((result) => {
        console.log(result);
        setMovies(result.data.content);
        // dispatch(set_loading_ended);
      })
      .catch((err) => {
        console.log(err);
        // dispatch(set_loading_ended);
      });
  }, []);
  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      key: "maPhim",
      //   custom lại hiển thị cột
      //   render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Bí Danh",
      dataIndex: "biDanh",
      key: "biDanh",
    },

    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (_, record) => (
        <Space size="middle">
          <img src={record.hinhAnh} alt="" className="h-30" />
        </Space>
      ),
    },
    {
      title: "Mô Tả",
      key: "moTa",
      dataIndex: "moTa",
      render: (text, record, index) => {
        // text chứa giá trị của thuộc tính trong data.
        // record chưa thông tin phần tử trong mảng của data
        // index là vị trí trong mảng data
        console.log(text);
        console.log(record);
        console.log(index);
        return (
          <p color="green" className="line-clamp-1">
            {text}
          </p>
        );
      },
    },
    {
      title: "Ngày Khởi Chiếu",
      dataIndex: "ngayKhoiChieu",
      key: "ngayKhoiChieu",
    },
    {
      title: "Đánh Giá",
      dataIndex: "danhGia",
      key: "danhGia",
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
                .delMovie(record.maPhim)
                .then((res) => {
                  alert(`xóa thành công Phim: ${record.tenPhim}`);
                  dispatch(getAllMovie());
                })
                .catch((erro) => {
                  console.log(erro);
                });
            }}
          >
            Xóa Phim
          </button>
          <button className="py-2 px-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-900  duration-500">
            Cập Nhật
          </button>
        </Space>
      ),
    },
  ];

  let newUser = movies.map((item, index) => {
    return { ...item, id: index + 1 };
  });
  return (
    <div>
      <button
        className="px-5 py-3 text-white bg-green-600"
        type="primary"
        onClick={showDrawer}
      >
        Thêm Phim
      </button>
      <Table columns={columns} dataSource={movies.length > 0 && newUser} />;
      <Drawer
        title="Thêm Phim"
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <FormMovie />
      </Drawer>
    </div>
  );
  //   return <div>QuanTriPhim</div>;
};

export default QuanTriPhim;
