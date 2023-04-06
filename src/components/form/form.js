import { useState } from "react";
import Card from "../card/card";

const Form = (props) => {
    const [item, setItem] = useState({
        date: '',
        title: '',
    })

    const addItem = (event) => {
        event.preventDefault();
        props.onAddItem(item);
    }

    const changeDate = (event) => {
        setItem({
            ...item,
            date: event.target.value
        })
    }

    return (
        <Card className='mt-2 mx-2'>
            <form onSubmit={addItem}>
                <div className="d-flex column">
                    <div className="d-flex row p-2">
                        <div className="form-group">
                            <div>
                                <input value={item.date} onChange={changeDate} type="text" class="form-control" id="inputEmail" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div class="form-group pt-2">
                            <div>
                                <input type="text" value={item.title} class="form-control" id="inputPassword" placeholder="Enter your password" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="form-group my-2">
                            <div class="">
                                <button type="submit" class="btn btn-primary">add item</button>
                            </div>
                        </div>
                    </div>
                </div>


            </form>
        </Card>
    );
};

export default Form;