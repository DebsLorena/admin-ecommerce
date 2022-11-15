import "./slidersList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSlider, getSliders } from "../../redux/apiCalls";

export default function SlidersList() {
  const dispatch = useDispatch();
  const sliders = useSelector((state) => state.slider.sliders);

  useEffect(() => {
    getSliders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteSlider(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "slider",
      headerName: "Sliders",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="sliderListItem">
            <img className="sliderListImg" src={params.row.img} alt="" />
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
              className="sliderListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="sliderList">
      <DataGrid
        rows={sliders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={100}
        checkboxSelection
      />
    </div>
  );
}