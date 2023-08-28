import classes from './loader.module.css';

export default function Loader(){
    return(
        <div className={classes.loader_box}>
            <div className={classes.loader}></div>
        </div>
    )
}