import React from 'react';

function CommentCard(props) {
    const comment = props.comment
    try {
        return (
            <section>
                <div className='pl-2 pr-2'>
                    <div className="space-y-4">
                        <article className='p-4 border-solid border-1 border-[#3778c2] rounded'>
                            <span className="text-1xl font-medium text-slate-500">- {comment.user?.name || 'Anonymous'}</span>
                            <p className='pt-2'>{comment.description}</p>
                        </article>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Error rendering CommentCard:", error);
        return null;
    }
}

export default CommentCard;
