interface IButtonPrincipal {
    text?: string;
    type?: "principal" | "secondary",
    onClick?: VoidFunction
}

function ButtonPrincipal({
    text,
    type = "principal",
    onClick
}: IButtonPrincipal) {

    if (type === "principal")
        return (
            <button
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={onClick}
            >
                {text}
            </button>
        );
    else
        return (
            <button
                type="button"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                onClick={onClick}
            >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {text}
                </span>
            </button>
        );
}

export default ButtonPrincipal;