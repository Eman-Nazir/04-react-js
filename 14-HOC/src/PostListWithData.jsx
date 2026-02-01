import PostList from "./PostList.jsx";
import withData from "./hoc/withData.jsx";


const PostListWithData = withData(PostList,'https://jsonplaceholder.typicode.com/posts/1')


export default PostListWithData