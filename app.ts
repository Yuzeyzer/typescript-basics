type getUser = string | number

interface IUser {
	name: string
	surname: string
	age:number
}

interface IManager extends IUser {
	role: string
	salary: number
}

interface IUser {
	hobbies: string[]
}

const test = (obj: IUser):void => {
	const data = obj
}