import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './container/Header';
import Post from './components/Post';
import AddPost from './components/AddPost'
import Postdetail from './components/Postdetail'
function App() {
  return (
    <div >
     <Header />
     <Routes >
       <Route path="/posts"  element={<Post />} ></Route>
       <Route path="/add-post"  element={<AddPost />}></Route>
       <Route path="/posts/view/:id" element={< Postdetail  />}></Route>
     </Routes >

    </div>
  );
}

export default App;
