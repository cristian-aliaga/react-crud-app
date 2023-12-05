import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'

export const PlanDetail = () => {
    const { sku } = useParams()
    const planSelected = data.plans.filter(plan => plan.sku === sku)
    return (
        <>
            <h1>{planSelected[0].name}</h1>
            <h2>{planSelected[0].price}</h2>
            <p>{planSelected[0].description}</p>
        </>
    )
}
