import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { layDuLieuLocal } from "../../utils/localStore";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { movieServ } from "../../services/movieServices";

// lần đầu tiên vào trang web store sẽ dc khởi tạo
// nơi tạo các creaateAssync thunk  để xử lý các bất đông bộ trước khi bắn dữ liệu lên store băng reduxthunk
export const getAllUser = createAsyncThunk("nguoiDung.getAllUser", async () => {
  const res = await nguoiDungServ.getAllUser();
  //sẽ return về giá trị muốn store lưu trữ.
  return res.data.content;
});
export const getAllMovie = createAsyncThunk(
  "nguoiDung.getAllMovie",
  async () => {
    const res = await nguoiDungServ.callPhimQuanTri();
    //sẽ return về giá trị muốn store lưu trữ.
    return res.data.content;
    // console.log(res.data.content);
  }
);
const initialState = {
  hoTen: layDuLieuLocal("user"),
  users: [],
};
export const themPhimUploatHinh = (formData) => {
  return async (dispatch) => {
    try {
      let res = await movieServ.addPhim(formData);
      alert("Thêm Phim Thành Công");
      console.log("res", res.data.content);
    } catch (orro) {
      console.log(orro);
      alert("thức bại");
    }
  };
};

// thư viện immerjs
export const nguoiDungSlice = createSlice({
  name: "nguoiDung",
  initialState,
  reducers: {
    // ở đây tạo một phương thức giúp xử lí state bên trên store redux
    setDuLieuHoTen: (state, action) => {
      // check xem hoTen có dữ liệu hay không, nếu không có set dữ liệu cho nó
      console.log(action);
      if (state.hoTen == null) {
        state.hoTen = action.payload;
      }
    },
  },
  //giúp tách biệt các logic bất đồng bộ ra khỏi reduce vì khi khi xử lý bất đồng bộ có nhiều trường hợp xảy
  extraReducers: (builder) => {
    //khi xử lý thì bên trong có 3 phương thức tương ứng với các trương hợp: thành công, đang chạy, thất bại
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      //bên trong action  thuộc tính payload sẽ chứa các giá trị đc trả về từ hàm chạy
      console.log(action);
      console.log(state);
      state.users = action.payload;
    });
    // builder.addCase(getAllUser.pending)//đang chạy
    //thất bại:
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.users = [
        {
          hoTen: "Rin",
          maLoaiNguoiDung: "QuanTri",
        },
      ];
      console.log(action);
    });
  },
});

// Action creators are generated for each case reducer function
export const { setDuLieuHoTen } = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
