import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import data from "../database/data"

//redux actions
import * as Action from '../redux/questionReduser'


//hook that will fetch a question from api and set value to the store
export const useFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({isLoading: false, apiData:[], serverError:null})

    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}))

        //async fetch BE data
        (async () => {
            try{
                let question =await data;

                if(question.length>0){
                    setGetData(prev=>({...prev,isLoading:false}))
                    setGetData(prev=>({...prev,apiData:question}))

                    //dispatch an action
                    dispatch(Action.startQuizAction(question))

                } else {
                    throw new Error('No questions available')
                }

            } catch (error) {
                setGetData(prev=>({...prev,isLoading:false}))
                setGetData(prev=>({...prev,serverError:error}))
            }
        })
    },[dispatch])

    return [getData,setGetData]
}