import React, { useState } from 'react'

const Card = ({data}) => {
  const [imageErrors, setImageErrors] = useState({});
  
  // Default placeholder image (you can replace with your own)
  const defaultImage = "https://via.placeholder.com/400x200/cccccc/666666?text=No+Image+Available";
  
  const handleImageError = (index) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };
  
  const handleLinkClick = (url) => {
    try {
      if (url && url.trim() !== '') {
        // Validate URL format
        const validUrl = url.startsWith('http') ? url : `https://${url}`;
        window.open(validUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      console.error('Error opening link:', error);
      alert('Unable to open this link. It may be invalid.');
    }
  };
  
  return (
    <div className='cardContainer'>
      {data && data.length > 0 ? data.map((curItem, index) => {
        // Skip items without title or description
        if (!curItem || (!curItem.title && !curItem.description)) {
          return null;
        }
        
        return (
          <div className='card' key={index}>
            <img 
              src={imageErrors[index] || !curItem.urlToImage ? defaultImage : curItem.urlToImage}
              alt={curItem.title || 'News image'}
              onError={() => handleImageError(index)}
              loading="lazy"
            />
            <div className='content'>
              <a 
                className='title' 
                onClick={() => handleLinkClick(curItem.url)}
                style={{ cursor: 'pointer' }}
              >
                {curItem.title || 'No title available'}
              </a>
              <p>{curItem.description || 'No description available'}</p>
              <button 
                onClick={() => handleLinkClick(curItem.url)}
                disabled={!curItem.url}
                style={{ 
                  opacity: !curItem.url ? 0.5 : 1,
                  cursor: !curItem.url ? 'not-allowed' : 'pointer'
                }}
              >
                Read more
              </button>
            </div>
          </div>
        );
      }) : (
        <div className="no-news">
          <p>No news articles available at the moment.</p>
        </div>
      )}
    </div>
  )
}

export default Card
