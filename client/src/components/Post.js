import React from 'react';

/**
 * <Post data={obj} key={obj.key} />
 *
 * therefore we access data in the json object by
 * props.data.key
 */
function Post(props) {
  let formatDate = (date) => {
    const dateObject = new Date(date);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
      dateObject
    );
    const formattedDate = `${month} ${dateObject.getDate()}`;
    return formattedDate;
  };

  return (
    <div className='post fade-in'>
      <img className='post-image' src={props.data.post} alt='' />
      <div className='post-wrapper-info'>
        <img className='post-company-logo' src={props.data.logo} />
        <div className='post-info'>
          <h3 className='post-date'>{formatDate(props.data.date)}</h3>
          <h4 className='post-company-name'>{props.data.company}</h4>

          <p className='post-text'>{props.data.desc}</p>
          <div className='post-buttons'>
            <a
              href={props.data.site}
              className='link website'
              rel='noopener noreferrer'
              target='_blank'
            >
              website
            </a>
            <a
              href={props.data.instagram}
              className='link instagram'
              rel='noopener noreferrer'
              target='_blank'
            >
              instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Post };
