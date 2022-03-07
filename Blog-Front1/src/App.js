import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SigninPage from './pages/signin.page';
import SignupPage from './pages/signup.page';
import BlogListPage from './pages/blog.list.page';
import BlogDetailPage from './pages/blog.detail.page';
import BlogCreatePage from './pages/blog.create.page';
import ProfilePage from './pages/profile.page';
import UpdateUserPage from './pages/update.user.page';
import BlogUpdatePage from './pages/update.blog.page';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='signup' element={<SignupPage />} />
          <Route path='signin' element={<SigninPage />} />
          <Route path='blog-list' element={<BlogListPage />} />
          <Route path='blog-details' element={<BlogDetailPage />} />
          <Route path='blog-create' element={<BlogCreatePage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='update' element={<UpdateUserPage />} />
          <Route path='updateBlog' element={<BlogUpdatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
