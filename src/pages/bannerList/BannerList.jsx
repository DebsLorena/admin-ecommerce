import "./bannerList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBanner, getBanners } from "../../redux/apiCalls";

export default function BannerList() {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.banner.banners);

  useEffect(() => {
    getBanners(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteBanner(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "banner",
      headerName: "Banners",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="bannerListItem">
            <img className="bannerListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "action", headerName: "Ação", width: 150, 
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="bannerListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="bannerList">
      <DataGrid
        rows={banners}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={100}
        checkboxSelection
      />
    </div>
  );
}