import React from 'react';
import Voter from './Voter';
import { Link } from '@reach/router';

class ArticleCard extends React.Component {
  state = {
    type: 'articles',
  };

  render() {
    return (
      <div className="card__article">
        <Link
          to={`/topics/${this.props.topic}/${this.props.article_id}`}
          className="link link__article"
        >
          <p className="title__article">{this.props.title}</p>
          {/* <p className="author__article">{this.props.author}</p> */}
          <p className="body__article">{this.props.body}</p>
          <footer className="footer__article">
            <img
              className="commentIcon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEWvr6////+srKzOzs61tbXk5OSqqqqmpqbBwcHt7e36+vqysrLZ2dnq6urExMT19fXb29vJycm7u7vNzc0+4SA2AAAEyUlEQVR4nO3d3XqqMBCGURkw/AqW3v+9FopSAgFiTSb90nmP966sJxgwseWSxN7l7B/cyjb7u7Xl7T1hWbRK0eXvRkq1Rflr4Wer6C/zpohU+/kbYdXkALwporypXhR2KQxviijtXhGmNZZvjOrUWlgWeL4xMs45BmEHdoL+RGQ4U7fCQoU+0DdSxbmwRR3AKWrPhOBAA3ElBJ1jllFxJIwAuCFeogOuiUsh/HvwmfZeXAivyJcJPXU1CctYRnCMSoPwIyrhx1bYxHOOjqlmI6xDH5Pj6rXwHtM5OkZ3XVj1oY/IeX2lCe9xvQvH1F0TZqGPx0PZUhjhEM6DOAljm2amaCEMfSye+hFGd6mYmi4Y38I0UmE6C/PQx+KpfBbGOJOOqacw0pP0cZqOws9ohZ//ZgxFCJsI8RMhfiLET4T4iRA/EeInQvxEiJ8I8RMhfiLET4T4iRA/EeInQvxEiJ8I8RMhfiLET4T4iRA/EeInQvxEiJ8I8RMhfiLET4T4iRA/EeInQvxEiJ8I8RMhfiLET4T4iRA/EeInQvxEiJ8I8RMhfiLET4T4iRA/EeInQvxEiN8/+jvCt2j/2vUt+Td/sTzGp1uMZbMw/icHNJEKm1kY//MtYnlont7jEXqTsAx9NF4qF8IYB/H5FMSHsIvvoq86TVjFd0nM9Gd2JV1s9zX58+HH87Pzonr84fIBiLMwsnei6jbCmB5Dqj2I9EcY03m6eEjnUpj0sRCpT8zCWzTC244wKeO4ZORlsidMyhhmG6UBV8IYTlTtFN0K8Ylr4EaIvvCm1sCtcJhucIeR9ElmRzhc+lGHUX0YNCbh8JEfcRipTk0YozDpUoVmJJV2RotZONyHN1BvR8qb645kTziU5iADSSo3np+nwqQqC/XnkaRUUVYHiiPhUNn1fa/Iaa5oQ2o4um57gXhF+N3Vab/ZjzX8F2pvww+zOHoboZdegdb3N14olPCFZSGqzZcBy0IJX7j9fQ8YTNhbjyAdTZQWBRJaD+HenYp9gYS2e7Kqefulwggr2xF8ZxJ9FEZo+cUBByMYSmg1z1C2+bz+m4IIrZb0KHtzEn0URGgzz1Dm6MVCCG3mGWfAIEKLOza6uzlFkzDC802u3OZDg2UBhOfzjEtgCOH1ZAhJuQSGEJ587YOKd+9E9fiFJ7vp2u6mi/iFx9+5dg7kF3aHQOUcyC88vp9xcieqxy48mmc2e38u4hYezTOGrTEHcQv3FxFNe38uYhbuzzPGvT8XMQt379jIF5BbuPddZGq9vSSvcG8RURX+XpNXuHcxdHsnqscrrPmBvELzLz2QVyCv0DTPUO4XyCs0fPVRHezAu4lTaJhnnKxqH8corLbzjP8R5BVuLobfv6frO0ZhuzpJqXa2JnoUn3B9S+pqX+IsPuFqEZFpBDmFfZARZBTqH+4ZrhLP2ITah/vcwe61bWzCJdDF9rx1XMLFPEMZ3yma8Al/5hn3q9rHcQnzUEAu4TzPsAO5hPMdm78Vp714hM87NnK692kXj/Dx4d7p7rVtLMJqmkk9LdufxCL8/hob9SFGkEk4frj3uKp9HIdwXEQkj6vax3EIh0uFz2X7kziEw/0Mw4rTXgzCu7oEmUQf+RdWGYUEcgh9L9uf9AWxv1BznVeYpgAAAABJRU5ErkJggg=="
              alt="comment_icon"
            />
            <p className="footer__numberOfComments">
              {this.props.comment_count} comments
            </p>
          </footer>
        </Link>
        <Voter
          id={this.props.article_id}
          votes={this.props.votes}
          type={this.state.type}
        />
      </div>
    );
  }
}

export default ArticleCard;
