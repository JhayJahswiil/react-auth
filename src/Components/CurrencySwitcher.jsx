import React from "react";


function CurrencySwitcher(props) {
  return (
    <div>
      <button onClick={props.handleChangeCurrency}>
        Current currency is {props.currency}. Change it!
      </button>
    </div>
  );
}

export default CurrencySwitcher;
