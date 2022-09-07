import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { myArticles } from '../assets/db_tree/data.js';
import '../stylespage/home.scss';


export const Home = () => {
  //console.log(myArticles.map(myArticle => myArticle));
  return (
    <Container className="mb-4">
      <h6 className="mt-3" style={{fontSize: "3rem"}}>Last articles !</h6>
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

    </Container>
  );
}
