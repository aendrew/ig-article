// import oShare from 'o-share';
import oDate from 'o-date';
import igArticle from './js/index';

const constructAll = () => {
	// oShare.init();
	oDate.init();
	igArticle.init();
	document.removeEventListener('o.DOMContentLoaded', constructAll);
};

document.addEventListener('o.DOMContentLoaded', constructAll);

export default igArticle;
