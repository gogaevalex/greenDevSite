import st from 'styled-components';
import {ContentFiller} from '@components/ContentFiller';
import useTranslation from 'next-translate/useTranslation';
import {
	PrincipOne,
	PrincipTwo,
	PrincipThree,
	PrincipFour,
} from '@pictures';
import {HeadSetting} from '@components/HeadSetting';

const Contact = () => {
	let {t} = useTranslation();
	return (
		<>
			<HeadSetting
				title="Treepl"
				description={t("ourPrinciples:seo-text")}
			/>
			<Parent>
				<ContentFiller
					type="rightImage"
					title={t("ourPrinciples:titles.one")}
					description={t("ourPrinciples:description.one")}
					image={<PrincipOne/>}
				/>
				<ContentFiller
					type="leftImage"
					title={t("ourPrinciples:titles.two")}
					description={t("ourPrinciples:description.two")}
					image={<PrincipTwo/>}
				/>
				<ContentFiller
					type="rightImage"
					title={t("ourPrinciples:titles.three")}
					description={t("ourPrinciples:description.three")}
					image={<PrincipThree/>}
				/>
				<ContentFiller
					type="leftImage"
					title={t("ourPrinciples:titles.four")}
					description={t("ourPrinciples:description.four")}
					image={<PrincipFour/>}
				/>
			</Parent>
		</>
	)
}

const Parent = st.div`
`;

export default Contact;