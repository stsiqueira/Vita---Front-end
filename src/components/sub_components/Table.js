import React from 'react';


const Table = ({tableHeading, tableContent}) => {

  
  return (
    <div className="tableContent">
      <div className="tableContentHeading"><h3>{tableHeading}</h3></div>
      <div className="tableContentItems">
        {
          tableContent && tableContent.map((item, key) => (
            <div className="tableContentItem" key={key}>
              <div className="itemType">{item.name}</div>
              <div className="itemValue">{item.value}</div>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Table;