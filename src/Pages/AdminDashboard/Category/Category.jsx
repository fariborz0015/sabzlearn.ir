import React, { useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import useFetch from "../../../Hooks/useFetch";
import { useShowLoading } from "../../../Contexts/ShowLoadingContext";
import { useShowRealtimeDatas } from "../../../Contexts/ShowRealtimeDatasContext";
import { useEditModal } from "../../../Contexts/EditModalContext";
import { Edit } from "@mui/icons-material";
import SkeletonLoading from "../../../Components/SkeletonLoading/SkeletonLoading";
import { DataGrid , faIR} from "@mui/x-data-grid";
import { Alert } from "@mui/material";
import Swal from "sweetalert2";
import useDelete from "../../../Hooks/useDelete";

function Category() {
  const title = useTitle("دسته بندی‌ها - پنل کاربری");
  const { datas: categories } = useFetch("category", false);
  const { isShowLoading, setIsShowLoading } = useShowLoading();
  const { showRealtimeDatas, setShowRealTimeDatas } = useShowRealtimeDatas();
  const { showEditModal, setShowEditModal } = useEditModal();
  const [updateCategoryID, setUpdateCategoryID] = useState("");
  console.log(categories);
  const columns = [
    {
      field: "id",
      headerName: "ردیف",
      width: 10,
      height: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "title",
      headerName: " عنوان",
      width: 180,
      height: 150,
      headerAlign: "center",
      align: "center",
      whiteSpace: "wrap",
    },
    {
      field: "name",
      headerName: " لینک",
      width: 180,
      height: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "editAction",
      headerName: "ویرایش",
      width: 70,
      height: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (user) => {
        return (
          <div
            onClick={() => {
              setShowEditModal(true);
              UpdateUserHandler(user.id);
              setUpdateUserID(user.id);
            }}
            className="flex-center cursor-pointer text-sky-500 hover:text-sky-300 transition-colors"
          >
            <Edit className="size-5" />
          </div>
        );
      },
    },
    {
      field: "deleteAction",
      headerName: "حذف",
      width: 50,
      headerAlign: "center",
      align: "center",
      renderCell: (category) => {
        return (
          <div
            onClick={() => {
              DeleteCategoryHandler(category.id);
            }}
            className="flex-center cursor-pointer text-rose-500 hover:text-rose-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        );
      },
    },
  ];
    //  Delete Function
    const DeleteCategoryHandler = (categoryID) => {
        Swal.fire({
          title: "برای حذف دسته بندی مطمعن هستید؟",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#f43f5e",
          cancelButtonColor: "#0ea5e9",
          confirmButtonText: "تایید",
          cancelButtonText: "انصراف",
        }).then((result) => {
          if (result.isConfirmed) {
            const catDel = useDelete(`category/${categoryID}`);
            setShowRealTimeDatas((prev) => !prev);
          }
        });
      };
  return (
    <>
      {isShowLoading ? (
        <SkeletonLoading listsToRender={5} />
      ) : (
        <>
          <div className="w-full dark:text-white">
            <h2 className="font-DanaBold my-8 text-2xl">لیست کاربر‌ها</h2>
            {categories.length > 1 ? (
              <DataGrid
                rows={categories.map((category, index) => {
                  return { id: index + 1, ...category };
                })}
                className="dark:text-white"
                getRowId={(category) => category._id}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                }}
                localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
                pageSizeOptions={[5, 10, 25, 100, 200]}
              />
            ) : (
              <Alert severity="info">هیچ دسته بندی تاکنون ثبت نگردیده است</Alert>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Category;
