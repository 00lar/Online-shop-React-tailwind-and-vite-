import {XCircleIcon, ShoppingBagIcon,PlusIcon} from "@heroicons/react/24/solid"

const Xicon = () => {
    return ( 
    <XCircleIcon
    className="h-6 w-6 text-gray-500"
    />
    )
}

const BagIcon = ()  => {
    return (
        <ShoppingBagIcon
        className="h-6 w-6 text-gray-500"
        />
    )
}

const AddIcon = () => {  
    return (
        <PlusIcon
        className="h-6 w-6 text-gray-500"
        />  
    )
}

export {Xicon, BagIcon, AddIcon }