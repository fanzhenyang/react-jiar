import { useEffect, useState } from "react"
import qs from "qs"
import { SeacrhPanel } from './SearchPanel'
import {cleanObject} from '../utils/index'
import { List } from './List'
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen= () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const [list, setList] = useState([])
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])

  return <div>
    <SeacrhPanel users={users} param={param} setParam={setParam} />
    <List list={list} users={users} />
  </div>
}