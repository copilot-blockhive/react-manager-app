import Card from "../card/card";
import Item from "../item/item";
import Form from "../form/form";
import { useState } from "react";


const ListItem = (props) => {
 const [items,setItems] = useState([{
  date: '2021-01-01',
    title: 'title 0'
 }])

  const pushtoItems = (item) => {
    setItems([...items,item])
  }

  return (
    <Card className='pb-2 mx-2'>
      <Form onAddItem={pushtoItems} />
      {
        items.map((item, index) => {
          return (
            <Item key={index} date={item.date}></Item>
          )
        })
      }
    </Card>
  );
};
export default ListItem;
