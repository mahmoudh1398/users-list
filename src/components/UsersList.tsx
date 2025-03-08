import { Avatar, Box, Paper } from "@mui/material";
import { TUser } from "../types/user.type";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FavoriteButton from "./FavoriteButton";
import dateFormatter from "../tools/date-formatter";

type TProps = {
  users: TUser[];
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 120,
    renderCell: (params) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "fit-content",
        }}
      >
        <Avatar alt="avatar" src={params.value} />
      </Box>
    ),
  },
  { field: "name", headerName: "Name", width: 300 },
  {
    field: "isFavorite",
    headerName: "Favorite",
    sortable: false,
    width: 70,
    type: "boolean",
    renderCell: (params) => <FavoriteButton user={params.row} />,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    valueFormatter: (value) => dateFormatter(value),
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function UsersList({ users }: TProps) {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
