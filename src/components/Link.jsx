import React from 'react';
import LinkComponent from 'next/link';
import pt from 'prop-types';
import st from 'styled-components';

export const Link = ({
	href,
	children,
	locale,
}) => (
	<>
		<LinkElement href={href && href} passHref locale={locale && locale}>
			<A>
				{children}
			</A>
		</LinkElement>
	</>
);

const A = st.a`
`;

const LinkElement = st(LinkComponent)``;

Link.propTypes = {
	href: pt.string,
	children: pt.any,
	locale: pt.string,
};

Link.defaultProps = {
	href: null,
	children: null,
	locale: null,
};