import React from 'react';

export default function Message(props){
	return (props.search ? ( props.username && props.search.length === 0 ?
			 (<div><b>{props.username}</b> dont have any repo.</div>) : null
		) : ( props.error ? (<div>{props.error}</div>) : null));
}
