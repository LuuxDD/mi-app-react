function MyButton (props) {
    const name = props.name;
    
    const onclickHander = () => {
        alert('Click!');
    }
    return(
        <button onClick={onclickHander}>{name}</button>
    );
};

export default MyButton; 