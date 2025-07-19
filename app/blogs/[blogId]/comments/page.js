import React from 'react'

export default function comments({params}) {
    const { blogId } = params;
    console.log("blogId", blogId);
    return (
        <div>
            comments {blogId}
        </div>
    )
}
