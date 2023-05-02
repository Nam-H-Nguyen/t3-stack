import { ClerkProvider } from '@clerk/nextjs';
import { type AppType } from 'next/dist/shared/lib/utils';

import { api } from "~/utils/api";

import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ClerkProvider {...pageProps}>
			<Component {...pageProps} />
		</ClerkProvider>
	);
};

export default api.withTRPC(MyApp);
