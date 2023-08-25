import { Col, Container, Row, Form, Button, Dropdown } from "react-bootstrap";
import OurDateTime from "../../../dateTime/dateTime";





const GivingRoleItem = ({ user }) => {
    




    return (


        <Form>

            <Row className='p-2 m-1'>

                <Col className='border-1 p-2'>
                    {user.number}
                </Col>

                <Col className='border-1 p-2'>
                    {user.name}
                </Col>

                <Col className='border-1 p-2'>
                    {/* <Button variant="link">{user.role}</Button> */}
                    <Dropdown >
                        <Dropdown.Toggle as={Button} variant='link'>{user.role}</Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item>ADMIN</Dropdown.Item>
                            <Dropdown.Item>ADMIN_EDIT</Dropdown.Item>
                            <Dropdown.Item>USER</Dropdown.Item>

                        </Dropdown.Menu>


                    </Dropdown>

                </Col>

            </Row>

        </Form>


    )
}
export default GivingRoleItem;