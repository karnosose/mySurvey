import React from 'react';

// eslint-disable-next-line react/prop-types
export default function ShowStateTest ({obj}) {
  return (
    <div>
      <table>
        <tbody>
          {Object.entries(obj).forEach((item) => {
            return (
              <tr>
                <td>
                  {item[0]}
                  :
                </td>
                {/* <td>{JSON.stringify(item[1])}</td> */}
              </tr>
            )
          })}
        </tbody> 
      </table>
    </div>
  )
}