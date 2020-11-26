import Link from 'next/link';

export default function Layout({children}) {
	return (
		<>
			<header className="container mx-auto p-5">
				<nav className="flex justify-between">
					<div>
						<Link href="/">
							<a>Home</a>
						</Link>
					</div>
					<ul className="flex flex-row">
						<li className="pr-5">
							<Link href="/posts">
								<a>Posts</a>
							</Link>
						</li>
						<li className="pr-5">
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			{children}
			<footer>Footer</footer>
		</>
	);
}
