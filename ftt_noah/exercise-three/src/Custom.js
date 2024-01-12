
function customButton(prop) {

    function handle() {
        alert("You Clicked Button "+ prop.num)
      }
    
    return (
        <button onClick={handle}>Button {prop.num}</button>
    );
}

export default customButton;
