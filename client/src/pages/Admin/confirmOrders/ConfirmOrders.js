import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import ConfirmOrderItem from "./ConfirmOrderItem";

function ConfirmOrders() {
    const { adminOrders } = useContext(Context)
    const [ordersDinamic, setOrdersDinamic] = useState([])

    async function getOrders() {
        await adminOrders.getAll()
        setOrdersDinamic(adminOrders._orders ? adminOrders._orders : [])
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div>
            {
                ordersDinamic.length === 0 ?
                <div>Заказов нет, адыхаем</div> : 
                ordersDinamic.map((order) => {
                    return <ConfirmOrderItem order={order}></ConfirmOrderItem>
                })
            }
        </div>
    )
}

export default observer(ConfirmOrders)