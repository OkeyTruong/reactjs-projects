import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
class App extends React.Component {
  // const [questions,setQuestions] = useState(data);
  state = {
    questions: data,
  };
  render() {
    const {questions} = this.state;
    return (
      <main>
        <div className="container">
          <h3> questions and answers about login</h3>
          <section className="info">
            {questions && questions.map(question=>{
          return (
            <Question key={question.id} {...question}/>
          )
        })}
          </section>
        </div>
      </main>
    );
  }
}

export default App;
