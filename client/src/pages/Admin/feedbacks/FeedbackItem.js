import { Container } from "react-bootstrap";






const FeedbackItem = ({ feedback }) => {


    return (
        <div className="p-2 m-2 border">
            <Container>
                <div className="d-flex p-2 justify-content-center fw-bold fs-4">
                    {feedback.typeOfFeedback}
                </div>
                <div className="d-flex justify-content-center">

                    <div>{`Почта: ` + feedback.userEmail}</div>

                </div>
                <div className="d-flex justify-content-center ">
                    <div>{`ФИО: ` + feedback.userFIO}</div>
                </div>
                <div className="d-flex justify-content-center">
                    {`Коментарий: \n` +  feedback.feedbackMessage}
                </div>
            </Container>
        </div>
    )
}
export default FeedbackItem;