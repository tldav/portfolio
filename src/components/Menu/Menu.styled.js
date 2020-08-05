import styled from "styled-components";

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.primaryLight};
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-101%)")};
	text-align: center;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;

	transition: transform 0.3s ease-in-out;

	@media (max-width: ${({ theme }) => theme.large}) {
		width: 100%;
		transform: ${({ open }) =>
			open ? "translateY(0)" : "translateY(-101%)"};
	}

	a {
		@media (max-width: ${({ theme }) => theme.large}) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: ${({ theme }) => theme.primaryHover};
		}
	}
`;

// translateY was -101% then -120%, then -101 again.
