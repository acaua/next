import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<div className="container mx-auto mt-14 pt-2 px-5 min-h-screen">
				{children}
			</div>
			<Footer />
		</>
	);
}
