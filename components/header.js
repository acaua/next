import Link from 'next/link';

export default function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-10 bg-white bg-opacity-95 shadow">
			<nav className="container mx-auto px-5 py-4 flex justify-between">
				<div>
					<Link href="/">
						<a className="font-medium text-gray-700 hover:text-indigo-600">
							Home
						</a>
					</Link>
				</div>
				<ul className="flex flex-row">
					<li className="pr-5">
						<Link href="/posts">
							<a className="font-medium text-gray-700 hover:text-indigo-600">
								Posts
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a className="font-medium text-gray-700 hover:text-indigo-600">
								About
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
