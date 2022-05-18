import st from 'styled-components';
import {HeadSetting} from '@components/HeadSetting';
import {MainRight} from '@pictures';
import {Link} from '@components/Link';
import {Button} from '@components/Button';
import useTranslation from 'next-translate/useTranslation';
import {useRouter} from "next/router";

const Main = () => {
	let {t} = useTranslation();
	const {locale} = useRouter();
	return (
		<>
			<HeadSetting
				title="Treepl"
				description={t("main:seo-text")}
			/>
			<Parent>
				<LeftBlock>
					<Title>
						{t("main:title")}
					</Title>
					<Description>
						{t("main:description")}
					</Description>
					<Link href='/contact' locale={locale}>
						<ButtonBlock>
							<Button 
								text={t("main:button")}
								fullWidth={true}
							/>
						</ButtonBlock>
					</Link>
				</LeftBlock>
				<RightBlock>
					<MainRightPicture />
				</RightBlock>
			</Parent>
		</>
	)
}

const Parent = st.div`
	display: flex;
	@media(max-width: ${({theme}) => theme.media.tablet}) {
		flex-direction: column;
	}
`;

const LeftBlock = st.div`
	width: 50%;
	box-sizing: border-box;
	padding: 0 20px 0 20px;
    display: flex;
    flex-direction: column;
	align-items: end;
	@media(max-width: ${({theme}) => theme.media.tablet}) {
		width: 100%;
		padding: 0;
		align-items: center;
	}

`;

const Title = st.h1`
	font-size: 72px;
	margin: 50px 0px 10px 0px;
	@media(max-width: ${({theme}) => theme.media.laptopL}) {
		font-size: 45px;
	}
	@media(max-width: ${({theme}) => theme.media.tablet}) {
		text-align: center;
	}
	@media(max-width: ${({theme}) => theme.media.mobileL}) {
		font-size: 30px;
	}
`;

const Description = st.h2`
	font-weight: ${({theme}) => theme.fontWeight.normal};
	font-size: ${({theme}) => theme.fontSize.h5};
	color: ${({theme}) => theme.textColor.darkSecond};
	@media(max-width: ${({theme}) => theme.media.tablet}) {
		text-align: center;
	}
`;

const ButtonBlock = st.div`
	width: 220px;
`;

const RightBlock = st.div`
	width: 50%;
	box-sizing: border-box;
	padding: 0 20px 0 0;
	@media(max-width: ${({theme}) => theme.media.tablet}) {
		width: 100%;
		padding: 0;
	}
`;

const MainRightPicture = st(MainRight)`

`;


export default Main;