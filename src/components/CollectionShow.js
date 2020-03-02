import React from 'react';

const CollectionShow = (props) => {
    console.log(props)

    return (
        <div>
            <h2>Here!</h2>
            <h3>{props.collections[props.match.params.collectionId].title}</h3>
        </div>
    )

}

export default CollectionShow;