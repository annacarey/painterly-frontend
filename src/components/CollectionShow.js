import React from 'react';

const CollectionShow = (props) => {
    console.log(props.collections, 'collectionshow')

    return (
        <div>
            <h2>Collection Show Component</h2>

            {/* <h3>{props.collections[props.match.params.collectionId].title}</h3> */}
        </div>
    )

}

export default CollectionShow;