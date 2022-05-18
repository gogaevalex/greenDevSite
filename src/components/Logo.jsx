import st from 'styled-components';

export const Logo = () => (
	<Parent>
		<svg viewBox="0 0 229 116" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 53.6643H16.9746V99.4443H28.5617V53.6643H45.5363V43.9994H0V53.6643Z" fill="#232323"/>
			<path d="M48.5008 99.4443H60.0337V75.9181C60.0337 70.8014 63.7698 67.2819 68.8595 67.2819C70.4567 67.2819 72.6496 67.5526 73.7325 67.9046V57.6711C72.7038 57.4274 71.2689 57.265 70.1048 57.265C65.4483 57.265 61.631 59.9723 60.115 65.1161H59.6818V57.8606H48.5008V99.4443Z" fill="#232323"/>
			<path d="M96.7105 100.256C106.998 100.256 113.929 95.248 115.553 87.5323L104.886 86.8284C103.722 89.9959 100.744 91.6474 96.9 91.6474C91.1335 91.6474 87.4787 87.8301 87.4787 81.6304V81.6034H115.797V78.4359C115.797 64.3039 107.242 57.3192 96.2503 57.3192C84.0134 57.3192 76.0811 66.0095 76.0811 78.842C76.0811 92.0264 83.9051 100.256 96.7105 100.256ZM87.4787 74.4562C87.7224 69.7185 91.323 65.9283 96.4398 65.9283C101.448 65.9283 104.914 69.5019 104.941 74.4562H87.4787Z" fill="#232323"/>
			<path d="M142.274 100.256C152.562 100.256 159.492 95.248 161.116 87.5323L150.45 86.8284C149.286 89.9959 146.308 91.6474 142.463 91.6474C136.697 91.6474 133.042 87.8301 133.042 81.6304V81.6034H161.36V78.4359C161.36 64.3039 152.805 57.3192 141.814 57.3192C129.577 57.3192 121.644 66.0095 121.644 78.842C121.644 92.0264 129.468 100.256 142.274 100.256ZM133.042 74.4562C133.286 69.7185 136.886 65.9283 142.003 65.9283C147.012 65.9283 150.477 69.5019 150.504 74.4562H133.042Z" fill="#232323"/>
			<path d="M168.886 115.038H180.419V92.7844H180.771C182.369 96.2497 185.861 100.121 192.575 100.121C202.05 100.121 209.441 92.622 209.441 78.7066C209.441 64.4122 201.726 57.3192 192.602 57.3192C185.644 57.3192 182.314 61.4613 180.771 64.8454H180.257V57.8606H168.886V115.038ZM180.176 78.6524C180.176 71.2345 183.316 66.4968 188.92 66.4968C194.633 66.4968 197.665 71.4511 197.665 78.6524C197.665 85.9079 194.578 90.9435 188.92 90.9435C183.37 90.9435 180.176 86.0704 180.176 78.6524Z" fill="#232323"/>
			<path d="M228.663 43.9994H217.13V99.4443H228.663V43.9994Z" fill="#232323"/>
			<path d="M108.555 30.9437H0.000167847V20.9998H108.555V30.9437Z" fill="#86CCC6"/>
			<rect x="103.776" y="49.9437" width="39.7757" height="9.94392" transform="rotate(-180 103.776 49.9437)" fill="#6BC980"/>
			<path d="M66.0312 9.94392H42.0001V-9.53674e-07H66.0312V9.94392Z" fill="#8DD45F"/>
		</svg>
	</Parent>
);

const Parent = st.div`
	width: 230px;
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		width: 150px;
	}
`;