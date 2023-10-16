import React ,{useId} from "react";
function InputBox({ 
    label,
    amount,
    OnAmountChange,
    OnCurrencyChange,
    currencyOptions=[],
   // currenctChangeOptions=[],//user jo option degaa vo toh hai hi but saath mein ek empty array diy a hai incase vo naa de toh alteast 
    //app crash naa ho.
    selectCurrency="usd",
    amountDisable="false",
    currencyDisable="false",
    className="",}){
    
    const id= useId()

   



    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
        <label htmlFor={id} className="text-black/40  mb-2  inline-block"> {label}
        </label>
        <input
                    id={id}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    //disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>OnAmountChange && OnAmountChange(Number(e.target.value))} //js kabhi kabhi string mein amount le leti hai isliye phele hi change krlete hai Nuumber mein bss isvjh se number lgya hai.

                />
                 </div>
           
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={ (e)=> OnCurrencyChange && OnCurrencyChange(e.target.value)}
                    //disabled={currencyDisable}

                    
                >
                    
                       { currencyOptions.map((currency)=>( 
                       <option key={currency} value={currency}>
                           {currency}
                        </option>))}
                
                </select>
                </div>

        </div>
       
        




    );
    
}

export default InputBox