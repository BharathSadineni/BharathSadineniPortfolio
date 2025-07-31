import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { getLikes, updateLikes } from '../api/likes';

export const Contact = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Safe localStorage access
  const getStoredLike = (): boolean => {
    try {
      return localStorage.getItem('portfolioLiked') === 'true';
    } catch (error) {
      console.warn('localStorage not available:', error);
      return false;
    }
  };

  const setStoredLike = (value: boolean): void => {
    try {
      localStorage.setItem('portfolioLiked', value.toString());
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  };

  useEffect(() => {
    // Load like state from localStorage
    const storedLiked = getStoredLike();
    setLiked(storedLiked);

    // Fetch like count from API
    const fetchLikes = async () => {
      try {
        setError(null);
        const data = await getLikes();
        setLikeCount(data.count);
      } catch (error) {
        console.error('Error fetching likes:', error);
        setError('Failed to load likes count');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, []);

  const handleLike = async () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setIsLoading(true);
    setError(null);

    try {
      const data = await updateLikes(newLiked);
      setLikeCount(data.count);
      setStoredLike(newLiked);
    } catch (error) {
      console.error('Error updating likes:', error);
      setError('Failed to update likes');
      // Revert the like state if the API call fails
      setLiked(!newLiked);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Let's connect! Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-2xl mx-auto">
          <div className="bg-white dark:bg-[#161B22] rounded-lg p-4 sm:p-6 text-center shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <FaEnvelope className="text-xl sm:text-2xl text-gray-900 dark:text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">Email</h3>
            <a 
              href="mailto:bharathsadineni3142@gmail.com" 
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors break-all"
            >
              bharathsadineni3142@gmail.com
            </a>
          </div>

          <div className="bg-white dark:bg-[#161B22] rounded-lg p-4 sm:p-6 text-center shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-xl sm:text-2xl text-gray-900 dark:text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">Location</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Birmingham, United Kingdom</p>
          </div>
        </div>

        <div className="text-center">
          {error && (
            <div className="mb-4 text-red-500 text-sm">
              {error}
            </div>
          )}
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handleLike}
              disabled={isLoading}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors ${
                liked 
                  ? 'bg-pink-600 text-white' 
                  : 'bg-gray-50 dark:bg-[#161B22] text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FaHeart className={`${liked ? 'text-white' : 'text-gray-500 dark:text-gray-400'} transition-colors`} />
              <span>{liked ? 'Thanks for the love!' : 'Like this page'}</span>
              <span className="ml-2 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-xs sm:text-sm text-gray-900 dark:text-white">
                {isLoading ? '...' : `${likeCount} ${likeCount === 1 ? 'like' : 'likes'}`}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
