import React from 'react'

export default function commentId({params}) {
    const { blogId, commentId } = params;
    console.log("blogId", blogId);
    console.log("commentId", commentId);
    return (
        <div>
            coomment {commentId} of blog {blogId}
        </div>
    )
}
