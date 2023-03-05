import { TableCell, TableHead, TableRow, Checkbox } from "@mui/material";

function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>곡/앨범</TableCell>
        <TableCell></TableCell>
        <TableCell align="right">아티스트</TableCell>
        <TableCell align="right">듣기</TableCell>
        <TableCell align="right">더보기</TableCell>
      </TableRow>
    </TableHead>
  );
}
export default TableHeader;
