import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import "./CasesList";

const columns = [
  // { id: "sno", label: "S No.", minWidth: 68 },
  { id: "state", label: "State", minWidth: 150 },
  {
    id: "confirmed",
    label: "Confirmed",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "active",
    label: "Active",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "recovered",
    label: "Recovered",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "deaths",
    label: "Deceased",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderBottom: "none",
  },
});

function CasesList(props) {
  const { TotalCases, IsLoading } = props.TotalCasesObj;

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setDataRows] = React.useState([]);
  const [allStates, setAllStates] = React.useState([]);

  useEffect(() => {
    let data = [];
    TotalCases.map((Case, index) => {
      return data.push({
        // sno: index + 1,
        state: Case.state,
        confirmed: Case.confirmed,
        active: Case.active,
        recovered: Case.recovered,
        deaths: Case.deaths,
      });
    });
    setDataRows(data);
    const TC = [...TotalCases];
    setAllStates(TC.sort(compare));
  }, [TotalCases]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event, value) => {
    const searchString = (value === null) ? "" : value?.state.toUpperCase();
    let searchResults = TotalCases.filter((ele) => {
      return ele.state.toUpperCase().indexOf(searchString) !== -1;
    });
    setDataRows(searchResults);
  };

  function compare(a, b) {
    if (a.state < b.state) {
      return -1;
    }
    if (a.state > b.state) {
      return 1;
    }
    return 0;
  }

  const renderTable = (TotalCases, IsLoading) => {
    return (
      <div className="p-2">
        <Paper className={classes.root}>
          <Autocomplete
            id="SearchBox"
            options={allStates}
            getOptionLabel={(option) => option.state}
            style={{ float: "right", margin: "10px", width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
            onChange={(event, value) => handleSearchChange(event, value)}
          />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.statecode}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="header">
        <h1>India covid-19 tracker</h1>
        <h6>
          Data based on government exposed{" "}
          <a href="https://api.covid19india.org/" target="_blank">
            API's
          </a>
        </h6>
        <hr />
      </div>
      {TotalCases?.length === 0 ? (
        // <Loader />
        <SkeletonTheme color="#838c90" highlightColor="#444">
          <p>
            <Skeleton count={15} height={40} />
          </p>
        </SkeletonTheme>
      ) : (
          renderTable(TotalCases, IsLoading)
        )}
    </React.Fragment>
  );
}
export default CasesList;
