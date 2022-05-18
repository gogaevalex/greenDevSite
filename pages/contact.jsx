import st from 'styled-components';
import {ContactForm} from '@components/ContactForm';
import useTranslation from 'next-translate/useTranslation';
import {HeadSetting} from '@components/HeadSetting';

const Contact = () => {
	let {t} = useTranslation();

	return (
		<>
			<HeadSetting
				title="Treepl"
				description={t("contact:seo-text")}
			/>
			<Parent>
				<LeftBlock>
					<Title>
						{t("contact:title")}
					</Title>
					<Description>
						{t("contact:description")}
					</Description>
				</LeftBlock>
				<ContactForm />
			</Parent>
		</>
	)
}

const Parent = st.div`
 	margin: 50px 70px;
	display: flex;
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		flex-direction: column;
		align-items: center;
		margin: 0px 0px 30px 0px;
	}
`;

const LeftBlock = st.div`
	width: 50%;
	margin: 30px 50px 0px 0px;
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		width: 100%;
		margin: 30px 80px 0px 80px;
	}
`;

const Title = st.h1`
	font-size: 72px;
	margin: 40px 0px 20px 0px;
	@media(max-width: ${({theme}) => theme.media.laptopL}) {
		font-size: 50px;
	}
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		text-align: center;
	}
`;

const Description = st.h2`
	font-weight: ${({theme}) => theme.fontWeight.normal};
	font-size: ${({theme}) => theme.fontSize.h5};
	color: ${({theme}) => theme.textColor.darkSecond};
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		text-align: center;
	}
`;

export default Contact;