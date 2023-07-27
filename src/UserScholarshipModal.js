import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const pageSize = 10;

export default function UsersScholarshipModal({ open, handleClose, data }) {
  console.log(data);
  const [page, setPage] = React.useState(0);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>Scholarship ID</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * pageSize, (page + 1) * pageSize)
                  .map((dataItem, index) => (
                    <TableRow key={index}>
                      <TableCell>{dataItem.user_id}</TableCell>
                      <TableCell>{dataItem.user_name}</TableCell>
                      <TableCell>{dataItem.scholarship_id}</TableCell>
                      <TableCell>{dataItem.email}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            <Button
              onClick={handlePrevPage}
              disabled={page === 0}
              variant="outlined"
              color="primary"
            >
              Previous
            </Button>
            <Button
              onClick={handleNextPage}
              disabled={(page + 1) * pageSize >= data.length}
              variant="outlined"
              color="primary"
            >
              Next
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
