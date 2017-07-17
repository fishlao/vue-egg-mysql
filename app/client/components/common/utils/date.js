import Moment from 'moment';
module.exports = function formatDate(date){
	const time = Moment(date);
	return time.format("YYYY-MM-DD");
};