import React from "react";

const ListItem = ({ description, title, date, secondary }) => {
    return (
        <li>
            <h1>{title}</h1>
            <p>{description}</p>
            {secondary ? <p>{date}</p> : null}
        </li>
    );
};

export default ListItem;
