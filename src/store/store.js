import { combineReducers , createStore } from "redux";
import cardsReducer from "./reducers/cardsReducer";

const reducer = combineReducers({cr:cardsReducer})
const store = new createStore(reducer)

export default store

{/* <div className='border border-3 border-danger m-3 p-3 bg-light'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Firstname:</td>
                                                <td>{student.fname}</td>
                                            </tr>
                                            <tr>
                                                <td>Lastname:</td>
                                                <td>{student.lname}</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>{student.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Mobile number:</td>
                                                <td>{student.phn}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} align={'center'}><button onClick={()=>{props.dispatch({type:'DELETEstudent',payload:i})}}>delete</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> */}