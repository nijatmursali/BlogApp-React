const initState = {
    posts: [
        {
            numofLikes: 2,
            isFeatured: true,
            _id: "5f2442ce0b8ff41da7ba95f2",
            title: "post",
            description: "Wow is this really working",
            imgUrl: "well well well",
            category: {
                _id: "5f24326bce2f5503a567f965",
                name: "Politics"
            },
            createdAt: "2020-07-31T16:11:58.762Z",
            updatedAt: "2020-07-31T16:11:58.762Z",
            __v: 0
        }
    ]
}



export default function (state = initState, action) {
    switch (action.type) {
        default:
            return state
    }
}