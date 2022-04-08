import React from 'react';

function ClaculatorComp() {

    
    const handleClick=(n1,n2) => {
        //const sum= add(n1,n2)
        //clg("sum",sum)

        //dynamic import 
        //code splitting

        import("./utils/Calculator.js").then((calci)=>{
            const sum= calci.add(n1,n2)
            console.log("sum",sum);
        })
    }

  return <div>
      <button onClick={handleClick(1,2)}>Add</button>
  </div>;
}

export default ClaculatorComp;
