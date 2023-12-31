import { useState } from 'react'
import { InputBox } from './components/Index'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
const [amount,SetAmount]=useState(0)
const[From,SetFrom]=useState("usd")
const[To,setTo]=useState("inr")
const[Converted,SetConverted] =useState(0)
const currencyinfo= useCurrencyInfo(From) //our customize hook calling
//y humko naa jo data milla hai vo objects ki form hai hai i.e key value pairs mein isliye humne objects ki key li hai hai  to get the value.
const Option = Object.keys(currencyinfo)
const swap=()=>{
  SetFrom(To)
  setTo(From)
  SetAmount(Converted)
  SetConverted(amount)

  
}
const convert =()=>{
    SetConverted(amount*currencyinfo[To])
}


 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?size=626&ext=jpg&uid=R106173945&ga=GA1.1.263133402.1696238158&semt=sph')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={Option}
                                oncurrencychange={(currency)=>SetAmount(amount)}
                                selectcurrency={From}

                                OnAmountChange={(amount)=> SetAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={Converted}
                                currencyOptions={Option}
                                onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={From}
                            amountDisable

                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From.toUpperCase()} to {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
