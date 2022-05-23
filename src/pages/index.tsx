import Link from 'next/link'
import Header from '../components/organisms/header'

export default function Main() {
	return (
		<Link href={`/commerces/1`}>
			<Header/>
		</Link>
	)
}
