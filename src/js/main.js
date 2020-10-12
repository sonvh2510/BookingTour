import { Loading } from './libraries/Loading';
import { getSVGs } from './utilities/util';

document.addEventListener('DOMContentLoaded', () => {
	getSVGs();
	Loading().then();
});

window.test = 'asdasd';
