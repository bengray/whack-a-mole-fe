import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal, setSelectedItem, setInitialState } from '../actions/index';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class TimeSlots extends Component {
    componentDidMount() {
        this.fetchData('http://taxi49627.autotrader.com:8080/api/')
    }

    fetchData(url) {
        fetch(url)
        .then((response) => {
            return response;
        })
        .then((response) => response.json())
        .then((items) => {
            this.props.setInitialState(items.initial_state);
        });
    }


    handleSelectItem(item) {
        this.props.setSelectedItem(item);
        this.props.openModal();
    }

    render() {
        return (
            <div>
                <ListGroup className="col-xs-6 col-md-2 col-xs-offset-3 col-md-offset-5">
                    {/*{console.log(this.props.items)}*/}
                    {this.props.items.map((item, index) => (
                        <ListGroupItem key={index}
                                       className="time_slot_button"
                                       bsStyle={item.scheduled === "true" ? "danger" : null}
                                       onClick={() => this.handleSelectItem(item)}
                        >
                            {item.displayName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal()),
        setSelectedItem: (item) => dispatch(setSelectedItem(item)),
        setInitialState: (items) => dispatch(setInitialState(items))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots);
