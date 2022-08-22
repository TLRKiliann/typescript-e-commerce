import { Button } from 'react-bootstrap';
import { myArticles } from '../assets/db_tree/data.js';
import '../styles/home.scss';


export const Home = () => {
  //console.log(myArticles.map(myArticle => myArticle));
  return (
    <div>
      <h6 style={{fontSize: "3rem"}}>Last articles !</h6>
      {myArticles.map(myArticle => (
        <section key={myArticle.id}>
          <div className="art--format">
            <article>
              <h3>{myArticle.title}</h3>
              <p style={{fontSize: "1rem"}}>{myArticle.article}</p>
            </article>
          </div>
          <div className="btn--format">
            <Button className="btn btn-default btn-sm" href={myArticle.url}>Read This Article</Button>
          </div>
        </section>
      ))}

      <section>
        <div className="art--format">
          <article>
            <h3>My title of article</h3>
            <p style={{fontSize: "1rem"}}>blablablablablablla blablabllablablablla blablablla blablablla
              blablablablablablla blablabllablablablla blablablla blablablla
              blablablablablablla blablabllablablablla blablablla blablablla</p>
          </article>
        </div>
        <div className="btn--format">
          <Button className="btn btn-default btn-sm">Read This Article</Button>
        </div>
      </section>

      <section>
        <div className="art--format">
          <article>
            <h3>My title of article</h3>
            <p style={{fontSize: "1rem"}}>blablablablablablla blablabllablablablla blablablla blablablla
              blablablablablablla blablabllablablablla blablablla blablablla
              blablablablablablla blablabllablablablla blablablla blablablla</p>
          </article>
        </div>
        <div className="btn--format">
          <Button className="btn btn-default btn-sm">Read This Article</Button>
        </div>
      </section>

      <section>
        <div className="art--format">
          <article>
            <h3>My title of article</h3>
            <p style={{fontSize: "1rem"}}>blablablablablablla blablabllablablablla blablablla blablablla
              blablablablablablla blablabllablablablla blablablla blablablla
              blablablablablablla blablabllablablablla blablablla blablablla</p>
          </article>
        </div>
        <div className="btn--format">
          <Button className="btn btn-default btn-sm">Read This Article</Button>
        </div>
      </section>

    </div>
  );
}
