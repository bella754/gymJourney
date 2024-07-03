import {Component} from "uix/components/Component.ts";

@template<>(() => (
    <a href="/history">
        <button>
        <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C14 8.41421 13.6642 8.75 13.25 8.75L4.56066 8.75L7.78033 11.9697C8.07322 12.2626 8.07322 12.7374 7.78033 13.0303C7.48744 13.3232 7.01256 13.3232 6.71967 13.0303L2.21967 8.53033C1.92678 8.23744 1.92678 7.76256 2.21967 7.46967L6.71967 2.96967C7.01256 2.67678 7.48744 2.67678 7.78033 2.96967C8.07322 3.26256 8.07322 3.73744 7.78033 4.03033L4.56066 7.25L13.25 7.25C13.6642 7.25 14 7.58579 14 8Z" fill="#0F172A"/>
        </svg>
        </button>
    </a>
))

@style(css`
    button{
        width: 40px;
        height: 40px;
        background-color: transparent;
        color: white;
        border: none;
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

`)

export class Backarrow extends Component<> {}
