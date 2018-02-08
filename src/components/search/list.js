import React from 'react';

export default function List(props){
	 return <ul>{(props.search ? props.search.items && props.search.items.map((s,i)=>{
								 function rootClassNames() {
									  let names = ['list-item'];
									  if (i === props.activeIndex) names.push('active');

									  return names.join(' ');
									}
              		return (<li key={i} className={rootClassNames()}>
											<a href={s.html_url} target="_blank">
												<img height='30' src={s.avatar_url}/>
												<span>{s.login}</span>
											</a>
										</li>);
				}) : null)}</ul>;
}
