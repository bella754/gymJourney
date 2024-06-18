import { Component } from "uix/components/Component.ts";

@template<Props>((props) => (
    <div>
	<button class="Homenav">
	<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.25 12L11.2045 3.04549C11.6438 2.60615 12.3562 2.60615 12.7955 3.04549L21.75 12M4.5 9.75V19.875C4.5 20.4963 5.00368 21 5.625 21H9.75V16.125C9.75 15.5037 10.2537 15 10.875 15H13.125C13.7463 15 14.25 15.5037 14.25 16.125V21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V9.75M8.25 21H16.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	</button>
    </div>
))

@style(css`

    button {
		border: 2px solid black;
        cursor: pointer;
		border-radius: 8px;
        background-color: white;
        width: 49px;
        height: 49px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`)

export class Homenavigation extends Component<Props> {}
