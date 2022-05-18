import {useState} from 'react';
import st from 'styled-components';
import {useRouter} from "next/router";
import {Select} from '@components/Select';
import {
	UkIcon,
	GermanyIcon,
	RussiaIcon,
} from '@icons';

const langIcons = {
	'en': <UkIcon />,
	'ru': <RussiaIcon />,
	'de': <GermanyIcon />,
}

export const LangList = () => {
	const router = useRouter();
	const {locale, asPath} = router;
	const [active, setActive] = useState(locale);
	const changeSelect = (key) => {
		router.push(asPath, asPath, {locale: key});
		setActive(key)
	}
	return (
		<Parent>
			<Select
				data={langIcons}
				active={active}
				onChange={changeSelect}
				isFullWidth={true}
			/>
		</Parent>
	)
}


const Parent = st.div`
	width: 75px;
	margin: 0px 0px 0px 25px;
	@media(max-width: ${({theme}) => theme.media.tablet}) {
		position: absolute;
		right: 5px;
		bottom: 5px;
	}
`;