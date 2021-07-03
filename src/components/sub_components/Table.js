import React from 'react';
import { Link } from 'react-router-dom'

const Table = ({ tableHeading, tableContent }) => {


  return (
    <div className="tableContent">
      <div className="tableContentHeading"><h3>{tableHeading}</h3></div>
      <div className="tableContentItems">
        {
          tableContent && tableContent.map((item, key) => (
            <Link to={`/Description/${item.type}/${item.linkName}`}>
              <div className="tableContentItem" key={key}>
                <div className="itemType">{item.name}</div>
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