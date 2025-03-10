import { useRef } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";


export default function ButtonElement({ inputRef, tipCalc, setTipCalc, setTotalCalc}) {
    const peopleInput = useRef(null)

    const BtnTask = (e) => {
        e.preventDefault();
        const inputVal = +inputRef.current.value;
        const targetVal = e.target.tagName === "BUTTON" ? +e.target.textContent.replace("%", "").trim() : +e.target.value;
        const resultPer = (targetVal / 100)
        setTipCalc(inputVal * resultPer); 
    }

    const TotalCalcTask = (e) => {
        const inputVal = +e.target.value;
        const result = inputVal * tipCalc
        setTotalCalc(result);
    }
    

    function ButtonTags({percentage}) {
    
        return <button className="bg-darkCyan-500 text-whiteColor-500 h-[40px] w-[90px] px-7 text-xl font-semibold rounded hover:bg-cyanColor-500 hover:text-teal-800 cursor-pointer transition-all" onClick={BtnTask}>{percentage}</button>
    }
    

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-grayishColor-500">Select Tip %</h2>
            <section className="grid grid-cols-3 gap-4 ">
                <ButtonTags percentage="5%" />
                <ButtonTags percentage="10%" />
                <ButtonTags percentage="15%" />
                <ButtonTags percentage="25%" />
                <ButtonTags percentage="50%" />
                <input type="text" id="custom" placeholder="Custom" name="custom" className="bg-lightgrayish-500 p-2 h-[40px] w-[90px] text-xl font-semibold outline-[0px] rounded" onChange={BtnTask}/>
            </section>
            <div>
                    <label htmlFor='people' className="text-grayishColor-500"> Number of People</label>
                    <br />
                    <div className="input-container">
                        <MdOutlinePersonOutline className="text-grayishColor-500 text-xl"/>
                        <input type="number" id="people" name="people" className="input-style" ref={peopleInput} placeholder="0" onChange={TotalCalcTask} />
                    </div>
                </div>
        </div>
    )



}
