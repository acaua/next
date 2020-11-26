import Link from 'next/link';

export default function Header() {
	return (
		<header className="bg-blue-100">
			<nav className="container mx-auto p-5 flex justify-between">
				<div>
					<Link href="/">
						<a className="font-semibold">Home</a>
					</Link>
				</div>
				<ul className="flex flex-row">
					<li className="pr-5">
						<Link href="/posts">
							<a className="font-semibold">Posts</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a className="font-semibold">About</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
