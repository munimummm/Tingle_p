import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

let H1 = styled.h1`
  margin-top: 38px;
  margin-bottom: 30px;
  font-weight: 500;
`;
let ChartButton = styled.button`
  height: 32px;
  padding: 0 15px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  border-radius: 16px;
  border: 0;
  vertical-align: top;
  display: inline-block;
  background: #fff;
  margin-bottom: 30px;

  &:active {
    background: #9147ff;
    color: white;
  }
`;

function Chart() {
  // const navigate = useNavigate();
  return (
    <div>
      <div>
        <H1>TOP100</H1>
        <ChartButton>TOP100</ChartButton>
        <ChartButton>발라드</ChartButton>
        <ChartButton>락</ChartButton>
        <ChartButton>힙합</ChartButton>
        <ChartButton>댄스</ChartButton>
        <ChartButton>재즈</ChartButton>
        <ChartButton>클래식</ChartButton>
        <ChartButton>팝</ChartButton>
      </div>
      <Table striped className="chartTable table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col" width="5%">
              <input type="checkbox" />
            </th>
            <th scope="col" width="5%">
              순위
            </th>
            <th scope="col" width="5%">
              곡/앨범
            </th>
            <th scope="col" width="20%"></th>
            <th scope="col" width="15%">
              아티스트
            </th>
            <th scope="col" width="5%">
              듣기
            </th>
            <th scope="col" width="5%">
              재생목록
            </th>
            <th scope="col" width="5%">
              내 리스트
            </th>
            <th scope="col" width="5%">
              더보기
            </th>
          </tr>
        </thead>
        <tbody className="chartTbody"></tbody>
      </Table>
    </div>
  );
}
export default Chart;
