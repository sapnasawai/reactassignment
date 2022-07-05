import Data from "./data.json";
import {
  AiOutlineHeart,
  AiOutlineSend,
  AiOutlineRight,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

function App() {
  return (
    <>
      <section className="main-card--cointainer">
        {Data.map((info) => {
          const {
            id,
            heading,
            subheading,
            pic,
            para,
            reviews,
            classreview,
            learner,
            username,
            userimg,
          } = info;

          return (
            <>
              <div className="card-container">
                <div className="card " key={id}>
                  <h1 className="card-heading">{heading}</h1>
                  <span className="card-subheading"> {subheading}</span><AiOutlineQuestionCircle/>
                  <div className="card-body">
                    <div className="info">
                      <p className="para"> {para} </p>
                      <div className="user">
                        <img src={userimg} alt='user' />
                        <span className="name">{username}</span>
                      </div>
                      <div className="reviews">
                        <span>
                        ⭐⭐⭐⭐⭐ {reviews} total reviews for this teacher
                        </span>
                        <span>
                          ⭐⭐⭐⭐⭐ {classreview} reviews for this class
                        </span>
                      </div>
                      <div>Completed by {learner} learners</div>
                      <div className="footer">
                        <button>See Class Schedule <AiOutlineRight/></button>
                        <div className="icons">
                          <div className="p-10">
                          <AiOutlineHeart />Save</div>
                          <div className="p-10">
                          <AiOutlineSend /> Share</div>
                        </div>
                      </div>
                    </div>
                    <div className="picture">
                      <img src={pic} alt="images" className="card-media" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default App;
