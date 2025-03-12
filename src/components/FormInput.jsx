
import { FaDollarSign } from "react-icons/fa";
import ButtonElement from "./Button";
import {useRef, useEffect, useState} from "react";

// export default function FormInputs() {
//     const [tipCalc, setTipCalc] = useState(0)
//     const [totalCalc, setTotalCalc] = useState(0)
//     const inputRef = useRef(null)
//     const tipsRef = useRef(null)
//     const totalRef = useRef(null)

//     useEffect(() => {
//         if (tipsRef.current !== null) {
//           const formattedTip = tipCalc.toString().includes('.') ? tipCalc.toFixed(1) : tipCalc;
//           tipsRef.current.textContent = formattedTip;
//         }
//     }, [tipCalc, tipsRef]);

//     useEffect(() => {
//         if (totalRef.current !== null) {
//             const formattedTip = totalCalc.toString().includes('.') ? totalCalc.toFixed(1) : totalCalc;
//             totalRef.current.textContent = formattedTip;
//           }
//     }, [totalCalc, totalRef]);

//     const ResetTask = (e) => {
//         e.preventDefault()
//         setTipCalc(0);
//         setTotalCalc(0);
//     }

//     const TipCalc = ({text, amount, string}) => {
//         return(
//             <div className="flex justify-between items-center">
//                 <p className="text-white text-sm font-medium ">{text}</p>
//                 <p className="text-3xl text-cyanColor-500 flex items-center">
//                     <strong className="currency font-bold">{<FaDollarSign/>}</strong>
//                     <strong className={string} ref={string === "tip"? tipsRef : totalRef}  >{amount}</strong>
//                 </p>
//             </div>
//         )
//     }


//   return  <form className="w-2xl h-fit md:h-[360px] bg-whiteColor-500 grid grid-cols-1 md:grid-cols-2 p-4 md:p-7 gap-8 rounded-xl">
//        <div>
//             <div>
//                 <label htmlFor='bill' className="text-grayishColor-500" for="bill">Bill</label> 
//                 <br />
//                 <div className="input-container">
//                     <FaDollarSign className="text-grayishColor-500 text-sm"/>
//                     <input type="number" id="bill" className="input-style" placeholder="0.00" ref={inputRef}/>
//                 </div>
//             </div>

//             <ButtonElement inputRef={inputRef} setTipCalc={setTipCalc} setTotalCalc={setTotalCalc} tipCalc={tipCalc}/>
//        </div>

//         <div className="bg-darkCyan-500 rounded p-7 flex flex-col justify-between  gap-6">
//             <div className="flex flex-col gap-6">
//                 <TipCalc text="Tip Amount" amount={0} string="tip"/>
//                 <TipCalc text="Total" amount={0} string="total"/>
//             </div>

//             <button type="reset" id="resetBtn" className="w-full h-[35px] bg-cyanColor-500 text-xl font-semibold text-teal-900 rounded cursor-pointer" onClick={ResetTask}>Reset</button>
//         </div>
    

//     </form>
// }






export default function FormInputs() {
    const [tipCalc, setTipCalc] = useState(0);
    const [totalCalc, setTotalCalc] = useState(0);
    const inputRef = useRef(null);
    const tipsRef = useRef(null);
    const totalRef = useRef(null);

    useEffect(() => {
        if (tipsRef.current !== null) {
            const formattedTip = tipCalc.toString().includes('.') ? tipCalc.toFixed(1) : tipCalc;
            tipsRef.current.textContent = formattedTip;
        }
    }, [tipCalc]);

    useEffect(() => {
        if (totalRef.current !== null) {
            const formattedTotal = totalCalc.toString().includes('.') ? totalCalc.toFixed(1) : totalCalc;
            totalRef.current.textContent = formattedTotal;
        }
    }, [totalCalc]);

    const ResetTask = (e) => {
        e.preventDefault();
        setTipCalc(0);
        setTotalCalc(0);
    };

    const TipCalc = ({ text, amount, string }) => (
        <div className="flex justify-between items-center">
            <p className="text-white text-sm font-medium">{text}</p>
            <p className="text-3xl text-cyanColor-500 flex items-center">
                <strong className="currency font-bold"><FaDollarSign /></strong>
                <strong className={string} ref={string === 'tip' ? tipsRef : totalRef}>{amount}</strong>
            </p>
        </div>
    );

    return (
        <form className="w-2xl h-fit md:h-[360px] bg-whiteColor-500 grid grid-cols-1 md:grid-cols-2 p-4 md:p-7 gap-8 rounded-xl">
            <div>
                <div>
                    <label htmlFor="bill" className="text-grayishColor-500">Bill</label>
                    <br />
                    <div className="input-container">
                        <FaDollarSign className="text-grayishColor-500 text-sm" />
                        <input type="number" id="bill" className="input-style" placeholder="0.00" ref={inputRef} />
                    </div>
                </div>

                <ButtonElement inputRef={inputRef} setTipCalc={setTipCalc} setTotalCalc={setTotalCalc} tipCalc={tipCalc} />
            </div>

            <div className="bg-darkCyan-500 rounded p-7 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-6">
                    <TipCalc text="Tip Amount" amount={tipCalc} string="tip" />
                    <TipCalc text="Total" amount={totalCalc} string="total" />
                </div>

                <button type="reset" id="resetBtn" className="w-full h-[35px] bg-cyanColor-500 text-xl font-semibold text-teal-900 rounded cursor-pointer" onClick={ResetTask}>Reset</button>
            </div>
        </form>
    );
}
