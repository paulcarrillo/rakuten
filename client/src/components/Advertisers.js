import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";


class Advertisers extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/product')
      .then(res => res.json())
      .then(product => this.setState({ product }, () => console.log(`Products fetched..`, product)));
  }
  render() {
    const data = this.state.product;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Products",
              columns: [
                {
                  Header: "Advertisers Name",
                  accessor: "advertiser"
                },
                {
                  Header: "Products Name",
                  accessor: "name"
                }
              ]
            },
            {
              Header: "Details",
              columns: [
                {
                  Header: "Products SKU",
                  accessor: "sku"
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "advertiser",
              desc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        {/*<div>
          <h2>Advertisers</h2>
          <ul>
            {this.state.product.map(product =>
                <li key={product.id}>{product.advertiser},{product.name},{product.sku}</li>


            )}
          </ul>
        </div>
      */}
      </div>
    )
  }
}

export default Advertisers;
