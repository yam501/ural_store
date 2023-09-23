import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import ConfirmOrderItem from "./ConfirmOrderItem";
import './confirmOrder.css'
function ConfirmOrders() {
    const { adminOrders, use } = useContext(Context)
    const [ordersDinamic, setOrdersDinamic] = useState([])
    const [usersDinamic, setUsersDinamic] = useState([])

    async function getOrders() {
        await adminOrders.getAll()
        await use.getAll()
        setOrdersDinamic(adminOrders._orders ? adminOrders._orders : [])
        setUsersDinamic(use._users ? use._users : [])
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div>
            {
                ordersDinamic.length === 0 ?
                    <div>Заказов нет, адыхаем</div>
                    :
                    ordersDinamic.map(order => {
                        const user = usersDinamic.find((potUser) => potUser.id === order.userId)
                        return <ConfirmOrderItem key={order.id} order={order} user={user}></ConfirmOrderItem>
                    })
            }
        </div>
    )
}

export default observer(ConfirmOrders)