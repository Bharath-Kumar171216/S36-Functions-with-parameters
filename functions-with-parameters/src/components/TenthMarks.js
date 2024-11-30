import React, { useRef } from 'react'

function TenthMarks() {
        let firstInputRef=useRef();
        let lastInputRef=useRef();
        let engInputRef = useRef();
        let telInputRef = useRef();
        let hinInputRef = useRef();
        let mathInputRef = useRef();
        let sciInputRef = useRef();
        let socInputRef = useRef();

        let firstLabelRef = useRef();
        let lastLabelRef = useRef();
        let engLabelRef = useRef();
        let telLabelRef = useRef();
        let hinLabelRef = useRef();
        let mathLabelRef = useRef();
        let sciLabelRef = useRef();
        let socLabelRef = useRef();
        let totalMarks = useRef();

        let inputOnFocus = (inputRef)=>{
            inputRef.current.style.backgroundColor ="lightgreen";
        
        }
        let inputOnBlur = (inputRef)=>{
            inputRef.current.style.backgroundColor ="";
        }
        let inputOnChange = (inputRef,labelRef)=>{
            if(inputRef.current.value>0 && inputRef.current.value <=100){
                if(inputRef.current.value>=35){
                        labelRef.current.innerHTML = "Pass"
                        labelRef.current.style.backgroundColor= "green"
                }else{
                        labelRef.current.innerHTML = "Fail"
                         labelRef.current.style.backgroundColor= "red"
                }
            }else{
                         labelRef.current.innerHTML = "Invalid"
                         labelRef.current.style.backgroundColor= "blue"
            }
        }
  return (
    <div>
      <form>
        <h1><ins>Score Card</ins></h1>
        <div>
            <label>First Name</label>
            <input type="text" ref={firstInputRef}
             onBlur={()=>{
                inputOnBlur(firstInputRef);
        }}
        onFocus={()=>{
           inputOnFocus(firstInputRef);
        }}
            ></input>
            <label ref={firstLabelRef}></label>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" ref={lastInputRef}
            onBlur={()=>{
                inputOnBlur(lastInputRef);
        }}
        onFocus={()=>{
            inputOnFocus(lastInputRef);
        }}
            ></input>
            <label ref={lastLabelRef}></label>
        </div>
        <div>
            <label>English</label>
            <input type="number" ref={engInputRef}
             onChange={()=>{
                inputOnChange(engInputRef,engLabelRef);
            }}
            onBlur={()=>{
                inputOnBlur(engInputRef);
            }}
            onFocus={()=>{
                inputOnFocus(engInputRef);
            }}
            ></input>
            <label ref={engLabelRef}
            ></label>
        </div>
        <div>
            <label>Telugu</label>
            <input type="number" ref={telInputRef}
            onChange={()=>{
                inputOnChange(telInputRef,telLabelRef);
            }}
            onBlur={()=>{
                inputOnBlur(telInputRef);
            }}
            onFocus={()=>{
                inputOnFocus(telInputRef);
            }}
            ></input>
            <label ref={telLabelRef}></label>
        </div>
        <div>
            <label>Hindi</label>
            <input type="number" ref={hinInputRef}
            onChange={()=>{
                inputOnChange(hinInputRef,hinLabelRef);
            }}  
            onBlur={()=>{
                inputOnBlur(hinInputRef);
            }}
            onFocus={()=>{
                inputOnFocus(hinInputRef);
            }}
            ></input>
            <label ref={hinLabelRef}></label>
        </div>
        <div>
            <label>Maths</label>
            <input type="number" ref={mathInputRef}
            onChange={()=>{
                inputOnChange(mathInputRef,mathLabelRef);
            }}
            onBlur={()=>{
                inputOnBlur(mathInputRef);
            }}
            onFocus={()=>{
                inputOnFocus(mathInputRef);
            }}
            ></input>
            <label ref={mathLabelRef}></label>
        </div>
        <div>
            <label>Science</label>
            <input type="number" ref={sciInputRef}
            onChange={()=>{
                inputOnChange(sciInputRef,sciLabelRef);
            }}
            onBlur={()=>{
                inputOnBlur(sciInputRef);
            }}
            onFocus={()=>{
                inputOnFocus(sciInputRef);
            }}
            ></input>
            <label ref={sciLabelRef}></label>
        </div>
        <div>
            <label>Social</label>
            <input type="number" ref={socInputRef}
            onChange={()=>{
                inputOnChange(socInputRef,socLabelRef);
            }}
            onBlur={()=>{
                inputOnBlur(socInputRef);
            }}
            onFocus={()=>{
                inputOnFocus(socInputRef);
            }}
            ></input>
            <label ref={socLabelRef}></label>
        </div>
        <div>
            <button onClick={()=>{
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let mathMarks = Number(mathInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let result;

                if(engMarks>=35 &&
                    telMarks>=35 &&
                    hinMarks>=35 &&
                    mathMarks>=35 &&
                    sciMarks>=35 &&
                    socMarks>=35
                ){
                        result="Passed";
                }else{
                        result ="Failed";
                }

                let Total = engMarks+telMarks+hinMarks+mathMarks+sciMarks+socMarks;
                alert(`Total Marks are${Total}`)
                totalMarks.current.innerHTML = `${firstInputRef.current.value}${lastInputRef.current.value} ${result} in exams and Total marks are ${Total}`;

            }}
            
            type="button">Calculate the result</button>
        </div>
        <div>
            <label ref={totalMarks}>Total Marks</label>
        </div>
      </form>
    </div>
  )
}

export default TenthMarks
