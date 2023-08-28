import { createIdKey } from './create_id_key';

// Функція створення зірок сторінки 404.
export const createStars = (className,num) =>{
	const stars = []
	for (let i = 0; i < num; i++) {
		stars.push(<div key={createIdKey(i)} className={className}></div>) 
	}
	return stars
}