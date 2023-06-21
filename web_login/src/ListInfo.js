import React from "react";
import { Fragment, useState } from "react";
import './listInfo.css';

function ListInfo(){
    const [title, setTitle] = useState(['ID','Tên', 'Tên đăng nhập', 'Tuổi', 'Email','Option1','Option2'])
	const [infos, setInfos] = useState([
		{
			_id: 1,
			name: 'Nguyen Van A',
			nname: 'nguyenvana',
			age: 20,
			email:'nguyenvana@gmail.com'
		},{
			_id: 2,
			name: 'Nguyen Van B',
			nname: 'nguyenvanb',
			age: 21,
			email:'nguyenvanb@gmail.com'
		},{
			_id: 3,
			name: 'Nguyen Van C',
			nname: 'nguyenvanc',
			age: 22,
			email:'nguyenvanc@gmail.com'
		}
	])

	const [newId, setNewId] = useState('')
	const [newName, setNewName] = useState('')
	const [newNname, setNewNname] = useState('')
	const [newAge, setNewAge] = useState('')
	const [newEmail, setNewEmail] = useState('')
	const [editRow, setEditRow] = useState('')

	const onClickAddInfo = () => {
		let infosCopy = [...infos]
		infosCopy.push({
			_id: newId,
			name: newName,
			nname: newNname,
			age: newAge,
			email: newEmail
		})
		setInfos(infosCopy)
		setNewId('')
		setNewName('')
		setNewNname('')
		setNewAge('')
		setNewEmail('')
	}

	const onClickUpdateInfo = () => {
		//i >= 0
		let index = infos.findIndex(s => s._id === editRow)
		let infosCopy = [...infos]
		infosCopy[index] = {
			_id: newId,
			name: newName,
			nname: newNname,
			age: newAge,
			email: newEmail
		}
		setInfos(infosCopy)
		setNewId('')
		setNewName('')
		setNewNname('')
		setNewAge('')
		setNewEmail('')
		setEditRow('')
	}

	const onChangeNewId = (e) => {
		setNewId(e.currentTarget.value)
	}

	const onChangeNewName = (e) => {
		setNewName(e.currentTarget.value)
	}

	const onChangeNewNname = (e) => {
		setNewNname(e.currentTarget.value)
	}

	const onChangeNewAge = (e) => {
		setNewAge(e.currentTarget.value)
	}

	const onChangeNewEmail = (e) => {
		setNewEmail(e.currentTarget.value)
	}

	const onPressEditRow = (info) => {
		setNewId(info._id)
		setNewName(info.name)
		setNewNname(info.nname)
		setNewAge(info.age)
		setNewEmail(info.email)
		setEditRow(info._id)
	}

	const onPressDeleteRow = (_id) => {
		let infosCopy = [...infos]
		let index = infos.findIndex(s => s._id === _id)
		//dùng splice để Xóa
		infosCopy.splice(index,1)
		setInfos(infosCopy)
	}
	return (
		<div className="body">
		<h1 className="header">ĐIỀN THÔNG TIN</h1>
		<div className="input">
			<input
				onChange={onChangeNewId}
				name="ID" 
				value={newId}
				disabled={editRow}
				placeholder="Nhập ID"
			/><br/>
			<input
				onChange={onChangeNewName}
				name="name" 
				value={newName}
				placeholder="Nhập tên"
			/><br/>
			<input
				onChange={onChangeNewNname}
				name="nname"
				value={newNname}
				placeholder="Nhập tên đăng nhập"
			/><br/>
			<input
				onChange={onChangeNewAge}
				name="age"
				value={newAge}
				placeholder="Nhập tuổi"
			/><br/>
			<input
				onChange={onChangeNewEmail}
				name="email"
				value={newEmail}
				placeholder="Nhập Email"
			/><br/>
		</div>
		<div className="nut">
			{
				editRow
				?
				<button onClick={onClickUpdateInfo}>Cập nhật</button>
				:
				<button onClick={onClickAddInfo}>Thêm mới</button>
			}
		</div>
		<div className="a">
			<table>
				<tr>
					{
						title.map(t => {
							return <th key={t}>{t}</th>
						})
					}
				</tr>
				{
					infos.map(s => {
						return <tr key={s._id}>
							<td key={s._id}>{s._id}</td>
							<td key={s.name}>{s.name}</td>
							<td key={s.nname}>{s.nname}</td>
							<td key={s.age}>{s.age}</td>
							<td key={s.email}>{s.email}</td>
							<td><button onClick={e => onPressEditRow(s)}>Chỉnh sửa</button></td>
							<td><button onClick={e => onPressDeleteRow(s._id)}>Xóa</button></td>
						</tr>
					})
				}
			</table>
		</div>
		</div>
	)
}

export default ListInfo