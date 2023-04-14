import { Link } from "react-router-dom"
import { useServiceStore } from "../../hooks/useServiceStore"

export const Pagination = () => {
    const { onNextPageLists, onPrevPageLists } = useServiceStore();
    return (
        <>
            <nav
                role="navigation"
                aria-label="Pagination Navigation"
                className="flex items-center justify-center overflow-hidden rounded shadow-md shadow-slate-200"
            >
                <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
                    <li>
                        <button
                            onClick={onPrevPageLists}
                            aria-label="Goto Page 1"
                            className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none"
                        >
                            <span className="order-2 md:sr-only">Prev</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-13 desc-13"
                            >
                                <title id="title-13">Previous page</title>
                                <desc id="desc-13">link to previous page</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    </li>

                    <li>
                        <Link
                            href=""
                            aria-label="Goto Page 1"
                            className="hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex"
                        >
                            1
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            aria-label="Goto Page 2"
                            className="hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex"
                        >
                            2
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            className="hidden h-10 items-center justify-center whitespace-nowrap bg-blue-500 px-4 text-sm font-medium text-white ring-offset-2 transition duration-300 hover:bg-blue-600 hover:stroke-blue-500 focus:bg-blue-700 focus-visible:outline-none md:inline-flex"
                            aria-label="Current Page, Page 3"
                            aria-current="true"
                        >
                            3
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            aria-label="Goto Page 4"
                            className="hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex"
                        >
                            4
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            aria-label="Goto Page 5"
                            className="hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex"
                        >
                            5
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={onNextPageLists}
                            aria-label="Goto Page 4"
                            className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none"
                        >
                            <span className="md:sr-only">Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-14 desc-14"
                            >
                                <title id="title-14">Next page</title>
                                <desc id="desc-14">link to next page</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
            {/*<!-- End Primary elevated pagination --> */}
        </>
    )
}

