import { useEffect,useRef,useContext} from "react"
import styles from "./formInput.module.css"
import GlobalContext from "./Context/GlobalContext"



const FormInput = ({ input, text, setInput, textImported, startTime }) => {



    const {num, updateNum}= useContext(GlobalContext);
 
    const inputRef = useRef(null);

    let textArray = text.split("")
    textArray = textArray.slice(1)

    const formattedText = textArray.map((char, index) => {

        let color = ""

        if (index < input.length) {
            color = char === input[index] ? styles.correct : styles.wrong
        }

        return (
            <span key={`${char}_${index}`} className={color}>{char}</span>
        )


    })

    useEffect(() =>{
        if (num == 2){
            setInput('')
        }

    },[num])

    useEffect(() => {
        if (startTime && inputRef.current) {
            inputRef.current.value = '';
           
          inputRef.current.focus();
        }
      }, [startTime]);



    return (
        <div className={!textImported && "hidden"}>
            <div className={styles.container}>
                <div className="text-white p-2 text-xl">
                    <p>
                        
                        {formattedText}
                    </p>
                </div>
                <div className={startTime? styles.formField : "hidden"}>
                    <form >
                        <div>
                            <input
                            disabled = {!startTime} 
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            ref={inputRef}
                            placeholder="Type Here"
                            
                             />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormInput