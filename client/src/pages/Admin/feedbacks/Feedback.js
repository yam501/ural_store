import { useContext, useEffect, useMemo, useState } from "react";
import FeedbackStore from "../../../store/FeedbackStore";
import FeedbackItem from "./FeedbackItem";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";


const Feedback = ({ feedback }) => {
    const [selectSort, setSelectSort] = useState('')
    const sortedFeedback = useMemo(() => {
        if (selectSort === '') {
            return feedback
        }
        return feedback.filter(item => item.typeOfFeedback.includes(selectSort))
    }, [selectSort])


    return (

        <div>
            <div className="d-flex flex-column">
                <label for='typeOfFeedback'>Показать отзывы:</label>
                <select id='typeOfFeedback' value={selectSort} onChange={e => setSelectSort(e.target.value)}>
                    <option value={''}>Любые</option>
                    <option value={'Положительный'}>Положительные</option>
                    <option value={'Нейтральный'}>Нейтральные</option>
                    <option value={'Негативный'}>Отрицательные</option>
                </select>
            </div>
            <hr />
            <div className="feedback-max-size-window">
                {sortedFeedback.length === 0 ?

                    feedback.map(item =>
                        <FeedbackItem key={item.id} feedback={item} />
                    )
                    :
                    sortedFeedback.map(item =>
                        <FeedbackItem key={item.id} feedback={item} />
                    )
                }

            </div>
            <hr />
        </div>
    )
}
export default Feedback;