import Card from "../card/card";
import Date from "../date/date";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Item(props) {
  return (
    <Card  className='mt-2 mx-2'>
      <div>
        <FontAwesomeIcon icon={["fas", "close"]} />
      </div>
      <div className="card-body">
        <div className="d-flex flex-wrap flex-row align-items-center">
          <Date date={props.date}/>
          <div className='flex-grow-1 text-left'>
            <span>
              {props.title}
            </span>
          </div>
          <div>
            <button className="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Item;
