
import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,

} from "reactstrap";

function Body({

  stars,
  comment,
  timestamp,
}: {


  stars: number;
  comment: string;
  timestamp: string;
}) {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h1">{" "}</CardTitle>
        <div className="reviews-top">
          <div className="user-details">

            {[...Array(stars || 5)].map((star) => {
              return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
            })}
          </div>
          <div className="reviews-body">
            <CardText>
              {comment}
            </CardText>
          </div>
          <CardText>
            <small className="text-muted text-bold">
              {timestamp}
            </small>
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
}

export default Body;