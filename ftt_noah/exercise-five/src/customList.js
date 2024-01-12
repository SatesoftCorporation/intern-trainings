function customList() {

    const array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

    const items = array.map((element) => (
        <li>{element}</li>
    ));

    return(
        <ul>{items}</ul>
    );    
}

export default customList;