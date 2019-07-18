import React from 'react';

interface Approve {
    children: {
        props: {
            text: string,
            author: string
        }
    }
}


const Approve = (props: Approve) => {
    console.log(props.children);

    return (
        <div>appro
            {props.children}
        <button>button</button>
        </div>
    );
}

export default Approve;
