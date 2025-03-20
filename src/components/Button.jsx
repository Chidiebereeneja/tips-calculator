import { useRef, useState } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";


export default function ButtonElement({ inputRef, tipCalc, setTipCalc, setTotalCalc}) {
    const peopleInput = useRef(null)
    const [activeButton, setActiveButton] = useState(false)

    const BtnTask = (e, percentage) => {
        e.preventDefault();
        setActiveButton(percentage)
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


    

    function ButtonTags({percentage, onClick, isActive}) {
        const styleState = isActive ? 'active' : 'notActive';

        return <button className={styleState} onClick={onClick}>{percentage}</button>
    }
    

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-grayishColor-500">Select Tip %</h2>
            <section className="grid grid-cols-3 gap-4 ">

                {["5%", "10%", "15%", "25%", "50%"].map((percentage) => {
                return <ButtonTags percentage={percentage} onClick={(e) => BtnTask(e, percentage)} isActive={activeButton === percentage} />
                })}

                <input type="text" id="custom" placeholder="Custom" name="custom" className="bg-lightgrayish-500 text-darkCyan-500 p-2 h-[40px] w-[90px] text-xl font-semibold outline-[0px] rounded" onChange={BtnTask}/>
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
