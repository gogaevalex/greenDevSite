import {MainLayout} from '@layouts/MainLayout';
import {ThemeProvider} from 'styled-components';
import {mainTheme} from '../public/ui/theme/mainTheme';

const MyApp = ({Component, pageProps}) => (
	<ThemeProvider theme={mainTheme}>
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	</ThemeProvider>

);

export default MyApp;