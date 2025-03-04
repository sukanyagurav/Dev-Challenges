import { articles } from './constants'

const Articles = () => {
  return (
    <section className='articles'>
      {articles.map((article)=>(
        <article key={article.id}>
            <picture>
                <source srcSet={article.image.desktop}   media="(max-width:850px)"/>
                <img src={article.image.mobile} alt={article.content} />
            </picture>
            <div>
                <h2>{article.content}</h2>
                <p>{article.createdAt}</p>
            </div>
        </article>
      ))}
    </section>
  )
}

export default Articles
