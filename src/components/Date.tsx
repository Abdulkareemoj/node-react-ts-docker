import moment from 'moment';

export default function Date() {
  return <div>{moment().format('DD MMMM, YYYY')}</div>;
}
