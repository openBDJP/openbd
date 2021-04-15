import React, { Component, ReactComponentElement } from 'react';
import Hiradumi from 'hiradumi';
import Book from './Book';

import items from '../Gifu_Nakatsugawa_plus.json';

interface App {
  factors: number[]
  hiradumi: any
  setHiradumi: (element: any) => void
}
interface Props {
}
interface State {
  items: any[]
  width: number
  size: number
  margin: number
  rowCount: number
  rowFactors: number[] | null
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      size: 200,
      width: 100,
      margin: 10,
      rowCount: 10,
      rowFactors: null
    }
    this.hiradumi = null;

    this.setHiradumi = element => {
      this.hiradumi = element;
    }
  }
  componentDidMount() {
    if (document.body.clientWidth > 767) {
      this.setState({rowFactors: [1, 0.9, 0.8, 0.7]})
    } else {
      this.setState({rowFactors: [0.97, 0.75, 0.65, 0.55]})
    }
  }

  onChange(state) {
    this.setState(state, () => {
      this.hiradumi.setRowData()
    })
  }

  render() {
    
    if (!this.state.items) return null;

    return (
      <div>
          {this.state.rowFactors ? (
            <React.Fragment>
              <div style={{width: this.state.width + '%', margin: '0 auto'}}>
                <Hiradumi
                  ref={this.setHiradumi}
                  data={this.state.items}
                  size={this.state.size}
                  margin={this.state.margin}
                  rowCount={this.state.rowCount}
                  rowFactors={this.state.rowFactors}
                  itemComponent={Book}
                />
              </div>
            </React.Fragment>
          ) : null}
      </div>
    );
  }
}

export default App