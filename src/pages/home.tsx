import Header from '../components/MenuBar/Header';
import { Translation } from '@/widgets/Translation';

export default function Home() {
    return (
        <>
            <div className="-mt-24">
                <Header></Header>
            </div>
            <div>
                <Translation />
            </div>
        </>
    );
}
