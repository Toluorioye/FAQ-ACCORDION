import Question from './Question'
import './App.css';

function App() {
  return (
   <div className="Accordion">
      <h1 className="App">FAQ/ACCORDION</h1>
      <div className="App-container">
        <h1>Frequently Asked Questions</h1>
        <div >
          {questions.map((item)=>
          <Question key={item.id} questions={item}/>
          )}
        </div>
        
      </div>
   </div>
  );
}

const questions = [{
  id: '1',
  title:"Is this a good product?",
  answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
},
{
  id: '2',
  title:"How much does it cost?",
  answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
},
{
  id: '3',
  title:"When can I get it?",
  answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
}
]
export default App;
