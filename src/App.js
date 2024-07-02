import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    name: "김혜령",
    image: "https://placeimg.com/64/64/1",
    birthday: "991122",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 2,
    name: "김도영",
    image: "https://placeimg.com/64/64/2",
    birthday: "031002",
    gender: "남자",
    job: "야구선수",
  },
  {
    id: 3,
    name: "김형준",
    image: "https://placeimg.com/64/64/3",
    birthday: "991102",
    gender: "남자",
    job: "야구선수",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

{
  /* <Customer
          id={customer[0].id}
          image={customer[0].image}
          name={customer[0].name}
          birthday={customer[0].birthday}
          gender={customer[0].gender}
          job={customer[0].job}
        />
        <Customer
          id={customer[1].id}
          image={customer[1].image}
          name={customer[1].name}
          birthday={customer[1].birthday}
          gender={customer[1].gender}
          job={customer[1].job}
        />
        <Customer
          id={customer[2].id}
          image={customer[2].image}
          name={customer[2].name}
          birthday={customer[2].birthday}
          gender={customer[2].gender}
          job={customer[2].job} */
}
