import {Navbar} from '@components/Navbar';
import st from 'styled-components';

export const MainLayout = ({children}) => (
	<Parent>
		<Navbar/>
		{children}
	</Parent>
);

const Parent = st.div`
	box-sizing: border-box;
	padding: 30px 100px;
	max-width: ${({theme}) => theme.media.laptopXL};
	margin: 0 auto;
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		padding: 10px 30px;
	}
`;