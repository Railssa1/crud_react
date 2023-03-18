import React, {Fragment} from "react";

export default props => 
    <Fragment>
        <a href={props.link}>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </a>
    </Fragment>
