import { MONTHS } from "@/dummy-data"
import classes from './events-search.module.css'
import Button from "../ui/button";
import { useRef } from "react";
export default function EventsSearch(props){
    const yearInputReF= useRef();
    const monthInputRef= useRef();
    function submitHandler(event){
        event.preventDefault();
        const selectedYear = yearInputReF.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth);

    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputReF}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control} >
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                    {MONTHS.map(month => <option key={month.id} value={month.id}>{month.name}</option>)}
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}