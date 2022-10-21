import db from "../database";
import excel from "exceljs"

const Client = db.client

export const download = (req, res) => {
    Client.findAll().then((objs) => {
      let client = [];
  
      objs.forEach((obj) => {
        client.push({
            id: obj.id,
            TypeID: obj.TypeID,
            NumId: obj.NumId,
            name: obj.name,
            city: obj.city,
            adress: obj.adress,
            cell: obj.cell,
        });
      });
  
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("Client");
  
      worksheet.columns = [
        { header: "Id", key: "id", width: 5 },
        { header: "Type ID", key: "TypeID", width: 25 },
        { header: "ID", key: "NumId", width: 25 },
        { header: "Name", key: "name", width: 10 },
        { header: "City", key: "city", width: 10 },
        { header: "Adress", key: "adress", width: 10 },
        { header: "Cell", key: "cell", width: 10 }
      ];
  
      // Add Array Rows
      worksheet.addRows(client);
  
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=" + "tutorials.xlsx"
      );
  
      return workbook.xlsx.write(res).then(function () {
        res.status(200).end();
      });
    });
  };
  
  
