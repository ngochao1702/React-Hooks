import React, {Component} from 'react';

class Table extends Component {
  
  render() {
    const { characterData, removeCharacter } = this.props


    const TableHeader = () =>  {
      return (
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Job</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
      );

    }
    const TableBody = (props) => {
      const rows = props.characterData.map((row, index) => {
        return (
          <tr key={ index } >
            <td>{ row.name }</td>
            <td>{ row.job }</td>
            <td>
              <button className="btn btn-primary"
                      onClick={ () => props.removeCharacter(index) }
              >Remove</button>
            </td>
          </tr>
        )
      })
      return <tbody>{ rows }</tbody>
    }
    
    return (
      <table className="table">
        <TableHeader /> 
        <TableBody characterData={ characterData } 
                   removeCharacter={ removeCharacter } 
        />
       
      </table>
    );
  }
}

export default Table