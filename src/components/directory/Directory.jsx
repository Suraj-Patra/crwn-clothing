import CategoryItem from '../category-item/Category-item.jsx';
import './Directory.scss';

const Directory = (props) => {
	const categoriesArr = props.categories.map((category) => {
	      return(
	        <CategoryItem category={category} key={category.id} />
	      );
	})
	return(
		<div className='directory-container'>
	        { categoriesArr }        
	    </div>
	);
}

export default Directory;