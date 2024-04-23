import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MovieIcon from "@mui/icons-material/Movie";
import Paper from "@mui/material/Paper";
import { clientServices } from "../../../service/client-service";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--grey-darkest-color)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "var(--font-size-body-smaller)",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "var(--grey-dark-color)",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "var(--grey-medium-color)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CategoriesTable = ({ categories, onCategoryDeleted }) => {
  const handleDeleteClick = async (id) => {
    console.log("Deleting category: ", id);
    try {
      await clientServices.deleteCategory(id);
      onCategoryDeleted(id);
    } catch (error) {
      console.error("Error deleting category: ", error.message);
    }
  };
  return (
    <TableContainer
      component={Paper}
      style={{ margin: "4rem 0", borderRadius: "7px" }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Category movie</StyledTableCell>
            <StyledTableCell align="center">Color</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <StyledTableRow key={category.id}>
              <StyledTableCell>{category.categoryName}</StyledTableCell>
              <StyledTableCell align="center">
                <MovieIcon style={{ color: `${category.colorPicker}` }} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton>
                  <DeleteIcon onClick={() => handleDeleteClick(category.id)} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CategoriesTable.propTypes = {
  categories: PropTypes.array,
  categoryName: PropTypes.string,
  onCategoryDeleted: PropTypes.func.isRequired,
};
