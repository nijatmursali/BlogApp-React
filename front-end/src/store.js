import {createStore} from 'redux';
import reducer from './reducers/index.js';
import $ from 'jquery';


//get from local 
function getPosts() {
    $.ajax({
        url: "localhost:5000/posts",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
        }
    });
    
}

//getPosts();

const initState = {
    posts: [
        {
            numofLikes: 2,
            isFeatured: true,
            _id: "5f2442ce0b8ff41da7ba95f2",
            title: "is AI getting better?",
            description: "Artificial intelligence, sometimes called machine intelligence, is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.",
            imgUrl: "well well well",
            author: "Nijat Mursali",
            category: {
                _id: "5f24326bce2f5503a567f965",
                name: "Politics"
            },
            createdAt: "2020-07-31T16:11:58.762Z",
            updatedAt: "2020-07-31T16:11:58.762Z",
            __v: 0
        },
        {
            numofLikes: 2,
            isFeatured: true,
            _id: "5f2442ce0b8ff41da7ba95f2",
            title: "It's second damn cool post",
            description: "Artificial intelligence, sometimes called machine intelligence, is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.",
            imgUrl: "well well well",
            author: "Nijat Mursali",
            category: {
                _id: "5f24326bce2f5503a567f965",
                name: "Politics"
            },
            createdAt: "2020-07-31T16:11:58.762Z",
            updatedAt: "2020-07-31T16:11:58.762Z",
            __v: 0
        },
        
    ]
}

export const store = createStore(
    reducer,
    initState,
    window.devToolsExtension && window.devToolsExtension()
);