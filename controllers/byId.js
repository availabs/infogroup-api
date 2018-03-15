'use strict';
let db_service = require('../utils/db_service')

function geobyid(bp_id) {
  return new Promise(function (resolve, reject) {
    let sql = 
      `select 
        id, 
        ST_ASGeoJSON(ST_transform(geom,4326)) as geoPoint, 
        "CONAME",
        "NAICSCD",
        "NAICSDS", 
        "LEMPSZCD", 
        "LEMPSZDS", 
        "ALEMPSZ",  
        "BE_Payroll_Expense_Code",
        "BE_Payroll_Expense_Range",
        "BE_Payroll_Expense_Description" 
        from businesses_2014  
        where id = ${bp_id};
      `

      db_service.runQuery(sql, [], (err,data) => {
          if (err) reject(err)
          resolve(data.rows)
      })
  });
}

module.exports = geobyid
