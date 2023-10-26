import {XCircleIcon,ShoppingBagIcon,PlusIcon,CheckBadgeIcon,ArrowLeftCircleIcon} from "@heroicons/react/24/solid"

const ArrowLeftIcon = () => {
    return (
        <ArrowLeftCircleIcon
        className="h-6 w-6 text-gray-500"
        />
    )
}

const Xicon = () => {
    return ( 
    <XCircleIcon
    className="h-6 w-6 text-gray-500"
    />
    )
}

const CheckIcon = () => {
    return (
        <CheckBadgeIcon
        className="h-6 w-6 text-green-500"
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

export {Xicon, BagIcon, AddIcon, CheckIcon, ArrowLeftIcon }