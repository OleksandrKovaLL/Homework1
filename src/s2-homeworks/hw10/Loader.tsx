import s from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={s.loaderOverlay}>
            <div className={s.loader}/>
        </div>
    )
}
