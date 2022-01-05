import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';

const ArticleList = ({ articles }) => {
	return (
		<div className={articleStyles.grid}>
			{articles.map((article, idx) => (
				<ArticleItem article={article} key={idx} />
			))}
		</div>
	);
};

export default ArticleList;
