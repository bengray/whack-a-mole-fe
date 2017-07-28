import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, openModal, setSelectedItem } from '../actions/index';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class TimeSlots extends Component {
    handleSelectItem(item) {
        this.props.setSelectedItem(item);
        this.props.openModal();
    }

    render() {
        return (
            <div>
                <ListGroup className="col-xs-6 col-md-2 col-xs-offset-3 col-md-offset-5">
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
        fetchItems: () => dispatch(fetchItems()),
        openModal: () => dispatch(openModal()),
        setSelectedItem: (item) => dispatch(setSelectedItem(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots);
