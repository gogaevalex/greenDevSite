import Head from 'next/head';
import pt from 'prop-types';

const DOMAIN = 'https://treepl.com';

export const HeadSetting = ({
	title,
	description,
	urlImage,
	descriptionSeo,
}) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={descriptionSeo || description} />
		<meta property="og:image" content={urlImage} />
	</Head>
);

HeadSetting.propTypes = {
	title: pt.string.isRequired,
	description: pt.string.isRequired,
	descriptionSeo: pt.string,
	urlImage: pt.string,
	canonical: pt.string,
};

HeadSetting.defaultProps = {
	urlImage: 'https://olcup.com/img/welcomeOne.jpg',
	descriptionSeo: null,
};
