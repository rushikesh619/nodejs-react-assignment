import React from 'react';
import axios from 'axios';
import MeterialTable from 'material-table';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, Link, Button, TextField, Select, MenuItem, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core/'
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  columns = [
    {
      title: 'Products',
      field: 'productName',
    },
    {
      title: 'Sub Category',
      field: 'subCategoriesName',
      editComponent: ({ value, onRowDataChange, rowData }) => (
        <Select
          value={value}
          onChange={(event) => {
            onRowDataChange({
              ...rowData,
              secondPerson: (event.target.value) ?? "",
            });
          }}
        >
          {this.state.dataSource?.map((e) => (
            <MenuItem key={e._id} value={e.subCategoriesName}>
              {e.subCategoriesName}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      title: 'Category', field: 'categorieName',
      editComponent: ({ value, onRowDataChange, rowData }) => (
        <Select
          value={value}
          onChange={(event) => {
            onRowDataChange({
              ...rowData,
              relation: (event.target.value) ?? "",
            });
          }}
        >
          {this.state.dataSource?.map((e) => (
            <MenuItem key={e._id} value={e.categorieName}>
              {e.categorieName}
            </MenuItem>
          ))}
        </Select>
      ),
    }
  ]

  componentDidMount(){
    this.getInitialData();
  }

  getInitialData=()=>{
    axios.get('/api/products/getAllProducts').then((res)=>{
      if(res.data.result){
        console.log(res.data.result)
        this.setState({
          dataSource:res.data.result,
        })
      }else{
        console.log("can't get initial data")
      }
    }).catch(err=>{
      console.log(err);
    })
  }

  render() {
    return (
      <div>
      <Container maxWidth='md'>
        <Typography variant="h4" align='center' gutterBottom >
          To demonstrate the usage of material table, UI and rest-api
        </Typography>
        <Typography variant="h5" align='center' gutterBottom >
          Developers Info :-
          <Link href="http://rushikesh619.github.io/" >
            http://rushikesh619.github.io/
          </Link>
        </Typography>
      </Container>
      <Container maxWidth='md'>
        <MeterialTable
          title='Products Table'
          data={this.state.dataSource}
          columns={this.columns}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                console.log(newData);
                const temp = {
                  firstPerson: newData.firstPerson,
                  relation: newData.relation,
                  secondPerson: newData.secondPerson
                }
                setTimeout(() => {
                  this.setState({dataSource:[...this.state.dataSource, temp]});

                  resolve();
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...this.state.dataSource];
                  const index = oldData.tableData.id;
                  const temp = {
                    firstPerson: newData.firstPerson,
                    relation: newData.relation,
                    secondPerson: newData.secondPerson
                  }
                  dataUpdate[index] = temp;
                  this.setState({dataSource:[...dataUpdate]});

                  resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...this.state.dataSource];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  this.setState({dataSource:[...dataDelete]});

                  resolve()
                }, 1000)
              }),
          }}
        />
      </Container>
    </div>
    );
  }
}

export default Home
