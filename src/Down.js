import React, { useState, useEffect } from "react";
import "./Down.css";


function Down(props) {
  const [A, A1] = useState(null);

  async function callAPI() {
    fetch(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?format=json"
    )
      .then((response) => response.json())
      .then((data) => {
        A1(data.results);
      });
  }

  useEffect(() => {
    console.log("called");
    callAPI();
    console.log(A);
  });

  return (
    <div>
      <table className="tbl">
        <tr  className="tb1">
          <th className="tb4"> name </th>
          <th> last Updated </th>
          <th> cogs % </th>
          <th> cost Price </th>
          <th> Sale Price </th>
          <th className="tb5"> Gross margin </th>
          <th> tags/actions </th>
        </tr>

        {A &&
          A.map((item) => {                       
            return (   
                <ts  className="tb2">
                <td className="tb3"> {item.name}</td>
                <td> {item.last_updated.date.split(" ")[0]}</td>
                <td>{item.cogs} %</td>
                <td>{item.cost_price.toFixed(2)}</td>
                <td>{item.sale_price.toFixed(2)}</td>
                <td>{item.gross_margin.toFixed(2)}</td>
                <td>{item.manufacturing_outlet}</td>
              </ts>
            );
          })}
      </table>
    </div>
  );
}

export default Down;
