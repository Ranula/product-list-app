import { DataGrid } from "@mui/x-data-grid";
const columns = [
  {
    field: "image",
    headerName: "IMG",
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <img
        src={params.row.images[0].uri}
        height="30"
        width="30"
        style={{ marginLeft: "10px" }}
        alt="product"
      />
    ),
  },
  {
    field: "title",
    headerName: "Product Name",
    sortable: false,
    flex: 1,
    minWidth: 200,
  },
  { field: "category", headerName: "Category", sortable: false, width: 130, valueGetter: (params) => (params.row.categories)},
  { field: "price", headerName: "Price", width: 130, valueGetter: (params) => (params.row.priceInfo.price)}
];


const DataTable = ({ products, handleEvent }) => {
  return (
    <div style={{ height: 325, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableSelectionOnClick
        onRowClick={ (e) => {
          handleEvent(e)} }
      />
    </div>
  );
};

export default DataTable;
