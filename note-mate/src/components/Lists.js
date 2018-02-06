import React from "react";
import { connect } from "react-redux";
import List from "./List"

const Lists = props => {
    const lists = props.lists.map((list, i) => (
        <List list={list} key={i} index={i} />
    ));
    return <ul>{lists}</ul>;
};

const mapStateToProps = state => {
    return {
        lists: state
    };
};

export default connect(mapStateToProps)(Lists);