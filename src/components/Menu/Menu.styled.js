import styled from "styled-components";

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.primaryLight};
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-101%)")};
	text-align: center;
	padding: 2rem;
	position: fixed;
	top: 0;
	left: 0;
	box-shadow: rgba(172, 172, 172, 0.5) 0px 1px 3px 0px;

	transition: transform 0.3s ease-in-out;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
		transform: ${({ open }) =>
			open ? "translateY(0)" : "translateY(-101%)"};
		position: absolute;
		z-index: -1;
	}

	a {
		@media (max-width: ${({ theme }) => theme.mobile}) {
			text-align: center;
		}

		&:hover {
			color: ${({ theme }) => theme.primaryHover};
		}
	}
`;

// translateY was -101% then -120%, then -101 again. prime - position was originally absolute
