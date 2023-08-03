import { Formik, useFormik } from "formik";
import React, { useEffect } from "react";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { wait } from "@testing-library/user-event/dist/utils";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../redux/slices/nguoiDungSlice";

const FormAddUser = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "QuanTri",
      hoTen: "",
    },
    //   validate={(values) => {
    //     const errors = {};
    //     if (!values.email) {
    //       errors.email = "Required";
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = "Invalid email address";
    //     }
    //     return errors;
    //   }}
    onSubmit: async (values) => {
      // setTimeout(() => {
      // //   alert(JSON.stringify(values, null, 2));
      // //   setSubmitting(false);
      // }, 400);
      try {
        const res = await nguoiDungServ.addUser(values);
        //   nguoiDungServ.addUser(values);
        dispatch(getAllUser());
        formik.resetForm();
      } catch (erros) {
        console.log(erros);
      }
    },
  });
  const { handleChange, handleSubmit, values } = formik;
  const userNguyen = {
    taiKhoan: "Nguyen",
    matKhau: "123456",
    email: "nguyen@gamail,com",
    soDt: "020202202",
    maNhom: "GP09",
    maLoaiNguoiDung: "QuanTri",
    hoTen: "Nguyên",
  };
  //   useEffect(() => {
  //     formik.setValues(userNguyen);
  //   });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-6 group">
          <input
            onChange={handleChange}
            type="text"
            name="hoTen"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="hoTen"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Họ tên
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            onChange={handleChange}
            type="text"
            name="email"
            id="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={values.email}
          />
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            onChange={handleChange}
            type="password"
            name="matKhau"
            id="matKhau"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={values.matKhau}
          />
          <label
            for="matKhau"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mật khẩu
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="text"
              name="soDt"
              id="soDt"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.soDt}
            />
            <label
              for="soDt"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Số ĐT
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="text"
              name="taiKhoan"
              id="taiKhoan"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.taiKhoan}
            />
            <label
              for="taiKhoan"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tài khoản
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="text"
              name="maNhom"
              id="maNhom"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.maNhom}
            />
            <label
              for="maNhom"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mã nhóm
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="maLoaiNguoiDung"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Select your country
            </label>
            <select
              onChange={handleChange}
              name="maLoaiNguoiDung"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={values.maLoaiNguoiDung}
            >
              <option value="QuanTri">Quản trị</option>
              <option value="KhachHang">Khách hàng</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Thêm người dùng
        </button>
      </form>
    </div>
  );
};

export default FormAddUser;
