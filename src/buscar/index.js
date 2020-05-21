import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, Header, Icon, Input, Card, Image } from 'semantic-ui-react';

import { Creators as BuscarActions } from '../store/actions/buscar';

import './buscar.css';

class Buscar extends Component {
  pesquisaTermo = e => {
    if (e.keyCode === 13) {
      const thermSearch = e.target.value
      console.log(thermSearch)
      this.props.getImage(thermSearch)
    }
  }

  render() {
    const { images } = this.props;

    return (
      <div className="container">
        <div>
          <Input icon='search' size='large' placeholder='Search...' onKeyDown={(e) => this.pesquisaTermo(e)} />
        </div>
        <div>
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='video' />
                Listagem
              </Header>
          </Divider>
        </div>
        <div className="card-area">
          { this.props.images.map(image => {
              return (
                <Card className="card-content">
                  <Image src={image.img} wrapped ui={false} />
                </Card>
              )
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.buscar.images
})

const mapDispatchToProps = dispatch => bindActionCreators(BuscarActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Buscar);