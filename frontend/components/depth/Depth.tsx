"use client"
import { use, useEffect, useState } from "react"
import { getDepth, getKlines, getTicker, getTrades } from "@/app/utils/httpClient"
import { BidTable } from "./BidTable"
import { AskTable } from "./AskTable"

export function Depth({market}: {market:string}){
    const [bids, setBids] = useState<[string, string][]>();
    const [asks, setAsks] = useState<[string, string][]>();
    const [price, setPrice] = useState<string>();

    useEffect(()=>{
        getDepth(market).then(d => {
            setBids(d.bids.reverse());
            setAsks(d.asks);
        })
        getTicker(market).then(t => setPrice(t.lastPrice))
        getTrades(market).then(t => setPrice(t[0].price))
    },[])

    console.log(asks);
    console.log(bids);
    
    return <div className="">
        <TableHeader />
        {asks && <AskTable asks={asks} />}
        {price && <div>{price}</div>}
        {bids && <BidTable bids={bids} />}
    </div>

}

const TableHeader = () => {
    return (
        <div className="flex justify-between text-xs">
            <div className="text-white">Price</div>
            <div className="text-slate-500">Size</div>
            <div className="text-slate-500">Total</div>
        </div>
    )
}