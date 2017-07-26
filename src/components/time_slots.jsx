import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, setItem } from '../actions/items';
import { ButtonGroup, Button } from 'react-bootstrap';

class TimeSlots extends Component {
    constructor() {
        super();
    }

    componentDidUpdate() {
        console.log(this.props.items);
    }

    render() {
        const timeSlots = this.props.items;

        return (
            <div>
                <ButtonGroup vertical>
                    {this.props.items.map((item) => (
                        <Button className="time_slot_button"
                                bsStyle={item.scheduled === "true" ? "danger" : "default"}
                                onClick={() => this.props.setItem(item)}
                        >
                            {item.displayName}
                        </Button>
                    ))}
                </ButtonGroup>

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
        setItem: (item) => dispatch(setItem(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots);
