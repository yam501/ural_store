import { useContext, useEffect, useState } from "react";
import FeedbackStore from "../../../store/FeedbackStore";
import FeedbackItem from "./FeedbackItem";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";


const Feedback = ({ feedback }) => {


    return (
        <div>
            {


                feedback.map(item =>
                    <FeedbackItem key={item.id} feedback={item} />
                )
            }
        </div>
    )
}
export default observer( Feedback);