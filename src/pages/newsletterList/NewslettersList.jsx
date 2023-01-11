import "./newslettersList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNewsletter, getNewsletter } from "../../redux/apiCalls";

export default function NewsletterList() {
  const dispatch = useDispatch();
  const newsletters = useSelector((state) => state.newsletter.newsletters);

  useEffect(() => {
    getNewsletter(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteNewsletter(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "email",
      headerName: "Newsletters",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="newsletterListItem">
            {params.row.email}
          </div>
        );
      },
    },
    { field: "action", headerName: "Ação", width: 150, 
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="newsletterListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="newsletterList">
        <DataGrid
        rows={newsletters}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={100}
        checkboxSelection
      /> 
    </div>
  );
}