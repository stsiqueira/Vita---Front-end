import React from 'react';
import { Link } from 'react-router-dom'

const Table = ({ tableHeading, tableContent }) => {


  return (
    <div className="tableContent">
      <div className="tableContentHeading"><h3>{tableHeading}</h3></div>
      <div className="tableContentItems">
        {
          tableContent && tableContent.map((item, key) => (
            <Link key={key} to={`/Description/${item.type}/${item.linkName}`}>
              <div className="tableContentItem" key={key} style={{ backgroundColor: item.backgroundColor }}>
                <div className="itemType" >
                <div className="box" style={{ width: "1rem", height: "1rem", backgroundColor: item.legendColor}} />
                  <div className="itemTypeName">{item.name}</div>
                </div>
                <div className="itemValue">{item.value}</div>
              </div>
            </Link>
          ))
        }
      </div>
    </div >
  )
}

export default Table;
