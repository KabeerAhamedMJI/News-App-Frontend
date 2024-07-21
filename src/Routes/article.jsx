import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import ArticlePage from '../Components/articlePage';
import CommentCard from '../Components/commentCard';
import CommentForm from '../Components/commentForm';
import RelatedNews from '../Components/relatedNews';
import Modal from '../Components/modal';
import LoginForm from '../Components/loginForm';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../app/feature/comment/commentSlice';
import { changeLoginStatus } from '../app/feature/login/loginSlice';


const selectLoginStatus = (state) => state.login.loggedIn;

function Article() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { ArticleId } = useParams(); 
  const dispatch = useDispatch();

  // Access global state
  const loggedIn = useSelector(selectLoginStatus);

  useEffect(() => {
    async function fetchLoginStatus() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, { withCredentials: true });
        dispatch(changeLoginStatus(response.data.verified)); // Update login status in global state
      } catch (error) {
        console.error('Error verifying login status:', error);
      }
    }

    fetchLoginStatus();
  }, [dispatch]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(`http://localhost:3000/comments?articleId=${ArticleId}`);
        setComments(response.data);
        dispatch(addComment(response.data)); 
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }

    fetchComments();
  }, [ArticleId, dispatch]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLoginSuccess = () => {
    setIsModalOpen(false);
    dispatch(changeLoginStatus(true)); 
    navigate(location.pathname);
  };

  return (
    <main className="container pt-4 flex flex-col lg:flex-row md:gap-4">
      <div className="w-full lg:w-2/3">
        <ArticlePage />
        {loggedIn ? ( 
          <CommentForm ArticleId={ArticleId} />
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="font-bold p-8">
              <button onClick={openModal} className="text-blue-500 hover:underline">
                Login
              </button> to leave a comment
            </h2>
          </div>
        )}
        <h2 className="text-2xl font-bold text-[#3778c2] pl-4">Comments</h2>
        {comments.map(comment => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <RelatedNews />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Modal>
    </main>
  );
}

export default Article;
