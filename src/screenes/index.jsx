import { useState } from "react"
import * as qs from "qs"
import { SeacrhPanel } from './SearchPanel'
import {cleanObject, } from '../utils/index'
import { useMount, useDebouce } from '../hooks/index'
import { List } from './List'
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen= () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const debouceParam = useDebouce(param, 2000)

  const [list, setList] = useState([])
  useMount(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouceParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, debouceParam)

  const [users, setUsers] = useState([])
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })

  return <div>
    <SeacrhPanel users={users} param={param} setParam={setParam} />
    <List list={list} users={users} />
  </div>
}