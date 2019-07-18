import React from 'react';
import faker from 'faker';

interface Props {
    author: string,
    text: string,
}

const Comments = (props: Props) => {
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <div className="comment">

                <img src={faker.image.avatar()}/>

                <div className="content">
                    {props.author}
                    <div className="metadata">
                        <span className="date">Сегодня вечером в 5:42</span>
                    </div>
                    <div className="text">{props.text}</div>
                    <div className="actions">
                        Reply
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Comments;
