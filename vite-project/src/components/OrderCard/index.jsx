import { Xicon } from "../Icons"

const OrderCard = props => {
    const {title,imageUrl,price} = props
    return(
        <div  className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2 ">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light"></p>
            </div>
            <div className="flex items-center gap-2">
                <p  className="text-lg font-medium">{price}</p>
                <Xicon/>
            </div>
        </div>
    )
}

export {OrderCard}