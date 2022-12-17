import CategoryItem from '../category-item/Category-item.component.jsx';
import './Directory.styles.scss';

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