import { deleteTransation } from '../../api/translation/translation.api';

type SavedProp = {
    id?: number;
    leftLanguage: string;
    rightLanguage: string;
    leftTranslate: string;
    rightTranslate: string;
    isLike?: boolean;
    onDelete?: () => void;
};

export default function TranslateItem(props: SavedProp) {
    const deleteItem = async () => {
        if (!props.id || !props.onDelete) return;

        try {
            await deleteTransation(props.id);
            props.onDelete();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mt-5 mb-6">
            <div className="relative flex items-center justify-between text-xl font-light">
                <p className="w-1/3 truncate text-left">{props.leftLanguage}</p>

                <div className="flex w-1/3 justify-center">
                    <img className="w-7" src="/images/arrow-right.svg" alt="arrow" />
                </div>

                <div className="flex w-1/3 items-center justify-end gap-3">
                    <p className="truncate">{props.rightLanguage}</p>
                    {props.isLike ? <img onClick={deleteItem} className="w-5 cursor-pointer" src="/images/Save.svg" alt="save" /> : null}
                </div>
            </div>

            <div className="mt-5 text-xl">
                <p>{props.leftTranslate}</p>
                <p className="mt-1 text-[#D3D3D3]">{props.rightTranslate}</p>
            </div>

            <div className="my-3 h-[1px] self-center bg-[#787878]" />
        </div>
    );
}
