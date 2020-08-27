import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const regeneratorRuntime = require("regenerator-runtime"); //problem with async functions and webpack without this


export function Row(props) {
    return (
      <TableRow>
        <TableCell> {props.borough}</TableCell>
        <TableCell> {props.description}</TableCell>
        <TableCell> {props.square_meters}</TableCell>
        <TableCell> {props.bedrooms} </TableCell>
        <TableCell> {props.toilets} </TableCell>
      </TableRow>
    );
  }

  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        houses: []
      };
    }

    renderRow(house) {
      //console.log('calling renderrow on ' + user.username);
      return (
        <Row borough={house.borough}
            description={house.description}
            square_meters={house.square_meters}
            bedrooms={house.bedrooms}
            toilets={house.toilets}
            />
          );
    }

    renderRows(userList) {
    return userList.map(house=>this.renderRow(house))
    }

    async componentDidMount() {
      const response = await fetch("/houses");
      const json = await response.json();
      this.setState({houses: json});
      // fetch("/houses").then(response => response.json())
      // .then(data => this.setState({houses: data}))
    }

    render() {
      const boardStyle = {
        width: "90%",
        margin: "auto"
      }
      console.log(this.state.users)
      return (
        <TableContainer style={boardStyle} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Borough</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Square Meters</TableCell>
                <TableCell>Bedrooms</TableCell>
                <TableCell>Toilets</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
                {this.renderRows(this.state.houses)}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  };

    export default Board;
