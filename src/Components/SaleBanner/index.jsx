export default function SaleBanner({price, oldPrice}){
    const percent = ((oldPrice - price) / oldPrice) * 100
    return(
        <p className="text-xs text-white bg-sale rounded py-1 px-2 w-fit absolute">Sale {percent.toFixed()}%</p>
    )
}