import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export function SignUp() {
    return (
        <>
            <h2>Sign Up</h2>
            <Form style={{ display: "flex", flexDirection: "column" }}>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" name="email" placeholder="name@example.com" required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="User" className="mb-3">
                    <Form.Control type="text" name="user" placeholder="User Name" required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </FloatingLabel>

                <Button variant="primary" type="submit" style={{ alignSelf: "center", marginTop: "15px" }}>
                    Submit
                </Button>
            </Form>
        </>
    )
}