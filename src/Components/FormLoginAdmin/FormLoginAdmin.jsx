import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { useNavigate } from "react-router-dom";
import { luuXuongLocal } from "../../utils/localStore";
const FormLoginAdmin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },

    onSubmit: (values) => {
      console.log(values);
      // xử lí gửi dữ liệu lên server
      // nguoiDungServ
      //   .dangNhap(values)
      //   .then((res) => {
      //     console.log(res);
      //     //điều kiện để vào được trang admin. check maLoaiNguoiDung
      //     if (res.data.content.maLoaiNguoiDung == "QuanTri") {
      //       console.log("suss");
      //       navigate("/admin");
      //     } else {
      //       console.log("fail");
      //       window.location.href = "http://localhost:3000/";
      //     }
      //   })
      //   .catch((erro) => {});
      nguoiDungServ
        .dangNhap(values)
        .then((result) => {
          console.log(result);
          // Nếu như login thành công, sẽ lưu thông tin xuống local và chuyển hướng người dùng về trang chủ
          // messageApi.success('Đăng nhập thành công');
          // khi gọi dữ liệu thành công, sẽ lấy dữ liệu đó gửi lên redux
          if (result.data.content.maLoaiNguoiDung === "QuanTri") {
            console.log("suss");
            luuXuongLocal("user", result.data.content);
            navigate("/admin");
          } else {
            console.log("fail");
            // navigate("/");

            window.location.href = "http://localhost:3000/";
          }
        })
        .catch((err) => {
          console.log(err);
          // messageApi.error(err.response.data.content);
          alert("sai tai khaon hoac mật khẩu");
          formik.resetForm();
        });
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Nhớ chú ý nhập dữ liệu nhé"),
      matKhau: Yup.string()
        .required("Nhớ nhập mật khẩu")
        .min(3, "Nhập trên 3 nhé"),
    }),
  });
  const { handleChange, handleBlur } = formik;
  return (
    <div>
      <h2 className="font-bold text-2xl mt-6"> Login</h2>
      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tài khoản
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="taiKhoan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nhập họ tên"
          />
          {formik.errors.taiKhoan && formik.touched.taiKhoan}
          <p className="text-red-500">{formik.errors.taiKhoan}</p>
        </div>
        <div>
          <label
            htmlFor="matKhau"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật khẩu
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="matKhau"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nhập mật khẩu"
          />
          {formik.errors.matKhau && formik.touched.matKhau}
          <p className="text-red-500">{formik.errors.matKhau}</p>
        </div>
        <button className="py-1 px-3 rounded bg-green-700 text-white">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default FormLoginAdmin;
