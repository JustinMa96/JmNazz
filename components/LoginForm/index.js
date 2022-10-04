import { Button, Input, Loader } from "semantic-ui-react";

export default function LoginForm({
    loginState="before",
    onLoginClick = () => {}
}){
    var c = "blue";
    var button_next = "Click Me To Start";

    if (loginState === "before") {
        c = "blue";
    }
    if (loginState === "during") {
        c= "green";
        button_next = "Loading";
    }
    if (loginState === "after") {
        c = "grey";
        button_next = "Logged In";
    }

    return <div>
        <h3>LoginForm</h3>
        <Input disabled={loginState !== "before"} placeholder ="email"/>
        <Input disabled={loginState !== "beforex"} placeholder = "password"/>
        <Button 
        color ={c}
        onClick = {() => onLoginClick()}>
        {button_next}
        {loginState === "during" && <Loader active/>}
        </Button>
    </div>
}