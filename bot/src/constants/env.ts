const NODE_ENV = process.env.NODE_ENV;

export const IS_DEV_ENV = NODE_ENV === 'development' || NODE_ENV === 'dev';
export const AUTO_REACT_ALL = process.env.AUTO_REACT_ALL === 'true';
