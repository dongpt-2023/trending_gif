import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class ItemTrending extends Component {
  render() {
    const { item: trending } = this.props;
    return (
      <div className="col-md-3">
        <Card>
          <img width="100%" src={trending.images.downsized_medium.url} alt="Card caption" />
          <CardBody />
        </Card>
      </div>
    );
  }
}

export default ItemTrending;
