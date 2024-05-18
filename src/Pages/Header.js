import { Link } from "react-router-dom";

export const Header = () =>{
    return  <div className="links-tab">
        <h3>Expense Tracker App</h3>
        <div> <Link className="links" to={'/'}>Home</Link>
    <Link className="links" to={'/expense'}>Expenses</Link>
    <Link className="links" to={'/earning'}>Earnings</Link></div>
        
    {/* <a href="/expense">Expenses tab</a>
    <a href="/earning">Earnings tab</a> */}
  </div>
}