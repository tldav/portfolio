import styled from "styled-components";

export const StyledBurger = styled.button`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 2.5px 0;
	margin: 10px 0 0 10px;

	z-index: 10;

	span {
		width: 2rem;
		height: 0.25rem;
		background: ${({ theme, open }) =>
			open ? theme.primaryDark : theme.primaryDark};
		border-radius: 10px;
		transition: all 0.17s linear;
		position: relative;
		transform-origin: 2px;

		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) =>
				open ? "translateX(0)" : "translateX(0)"};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;
