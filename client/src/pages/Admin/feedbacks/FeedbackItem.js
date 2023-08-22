import { Col, Container, Row } from "react-bootstrap";




import './feedback.css'

const FeedbackItem = ({ feedback }) => {


    return (
        <div className={`p-2 m-2 border-${feedback.typeOfFeedback === 'Положительный' ? 'success' : feedback.typeOfFeedback === 'Нейтральный' ? 'warning' : 'danger'}  `} >

            <Row>
                <Col className="d-flex p-2 justify-content-center fw-bold fs-4 ">
                    {feedback.typeOfFeedback}
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        {`Почта: ` + feedback.userEmail}
                    </p>
                    {`Коментарий:`}
                </Col>
                <Col>
                    <p>
                        {`ФИО: ` + feedback.userFIO}
                    </p>

                </Col>
            </Row>
            <Row>
                <Col >
                    <div className="feedback_textbox">
                    {feedback.feedbackMessage}
                    </div>
                </Col>
            </Row>


        </div>
    )
}
export default FeedbackItem;