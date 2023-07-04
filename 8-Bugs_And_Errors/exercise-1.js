class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
      return a * b;
    } else {
      throw new MultiplicatorUnitFailure("Klunk");
    }
  }
  
  function reliableMultiply(a, b) {

    let keepTrying = true;
    let result = 0;

    while (keepTrying){
        try{

            result = primitiveMultiply(a, b);
    
            keepTrying = false;
            
        }catch(e){
            if (e instanceof MultiplicatorUnitFailure){
                console.log("MultiplicatorUnitFailure");
            }else{
                throw e;
            }
        }
    }

    return result;   
  }
  
  console.log(reliableMultiply(8, 8));
  // → 64