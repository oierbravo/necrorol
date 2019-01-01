import { graphql } from "gatsby"
import React from "react"
import Layout from  '../components/layout'
import { Link } from "gatsby"
import {BootstrapTable, TableHeaderColumn} from '../../node_modules/react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ArmoryPage extends React.Component {
  createCustomToolBar = props => {
    /**
     *  This function only pass one argument, is props object which has following properties
     *  
     *  {
     *    components: {  // here are all the components
     *      exportCSVBtn,  // export CSV button JSX
     *      insertBtn,  // insert button JSX
     *      deleteBtn,  // delete button JSX
     *      showSelectedOnlyBtn,  // show selected button JSX
     *      searchPanel,  // search panel JSX
     *      btnGroup,  // button groups JSX
     *      searchField,  // search field JSX
     *      clearBtn  // clear search field JSX
     *    },
     *    event: {  // here are all the related event you may use it
     *      openInsertModal,   // call it to open insert modal
     *      closeInsertModal,  // call it to close insert modal
     *      dropRow,   // call it to drop row
     *      showOnlyToogle,   // call it to toogle show only selections
     *      exportCSV,   // call it to export CSV file
     *      search  // call it with search text to search table
     *    }
     *  }
     *
     **/
    return (
      <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'>
        { props.components.searchPanel }
 
      </div>
    );
  }
  render() {
    const data = this.props.data.allArmoryCsv.edges
    const dataPlain = data.map((row) => {return row.node})
    const options = {
      toolBar: this.createCustomToolBar
    }
    return (
      <Layout>
        <div className="col-sm">
        <Link  to={'/'}>Volver</Link>
        <h1>Armory</h1>
        <BootstrapTable search options={options} data={dataPlain} striped hover>
      <TableHeaderColumn isKey dataField='id' dataSort={ true } >Name</TableHeaderColumn>
      <TableHeaderColumn dataField='category' dataSort={ true }>Category</TableHeaderColumn>
      <TableHeaderColumn dataField='credits' dataSort={ true }>Credits</TableHeaderColumn>
      <TableHeaderColumn dataField='special'>Special</TableHeaderColumn>
  </BootstrapTable>
          </div>
       
      </Layout>
    )
  }
}
export default ArmoryPage

export const ArmoryPageQuery = graphql`
  query {
    allArmoryCsv {
      edges {
        node {
          id
          parentId
          category
          credits
          special
        }
      }
      
    }
  }
`
