import { MoreVert, PlayArrow } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function TableItems({ item }) {
  const navigate = useNavigate();
  let limit = useSelector((state) => state.search.limit);
  console.log(item);
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell padding="checkbox">
        <Checkbox color="primary" />
      </TableCell>
      <TableCell>
        <img
          style={{ width: "50px", height: "50px" }}
          src={process.env.PUBLIC_URL + `/img/${item.cover_img}`}
        ></img>
      </TableCell>
      <TableCell component="th" scope="row" sx={{ whiteSpace: "preLine" }}>
        <strong
          onClick={() => {
            navigate(`/detail/title/${item._id}`);
          }}
        >
          {item.title}
        </strong>
        <br />
        <span
          style={{ fontSize: "12px", color: "#989898" }}
          onClick={() => {
            navigate(`/detail/album/${item._id}`);
          }}
        >
          {item.album}
        </span>
      </TableCell>

      <TableCell
        align="right"
        onClick={() => {
          navigate(`/detail/artist/${item._id}`);
        }}
      >
        {item.artist}
      </TableCell>
      <TableCell align="right">
        <PlayArrow />
      </TableCell>
      <TableCell align="right">
        <MoreVert />
      </TableCell>
    </TableRow>
  );
}
export default TableItems;
