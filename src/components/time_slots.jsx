import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, openModal, closeModal, setSelectedItem } from '../actions/index';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class TimeSlots extends Component {
    constructor() {
        super();
    }

    handleSelectItem(item) {
        this.props.setSelectedItem(item);
        this.props.openModal();
    }

    render() {
        return (
            <div>
                <ListGroup className="col-xs-2 col-xs-offset-5">
                    {this.props.items.map((item) => (
                        <ListGroupItem className="time_slot_button"
                                       bsStyle={item.scheduled === "true" ? "danger" : "default"}
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
        fetchItems: () => dispatch(fetchItems()),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),
        setSelectedItem: (item) => dispatch(setSelectedItem(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots);
