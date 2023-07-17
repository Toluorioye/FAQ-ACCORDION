import {useState} from "react"
const Question =({questions})=>{
    const [open, setOpen] = useState(false);
    // function handleClick(){
    //     return 
    // }
return (
<section>
    <div className={open?"answer" : "opened"}>
        <h3>
            {questions.title}
        </h3>
        <button onClick={()=> setOpen(!open)}>
          {open? "x" : "+"}
        </button>
    </div>
    {(open && <p>{questions.answer}</p>)}
</section>   
)
}

export default Question