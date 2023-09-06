import React from "react";

function Child(){
    console.log('child rendered')
    return (
        <span>Child comp</span>
    )
}
export default React.memo(Child)