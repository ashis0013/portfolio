import React from 'react'

export const Link = (props : {text: string, link: string}) => {
  return (
    <a href={props.link} className={'hover:text-lprimary dark:hover:text-dprimary visited:text-llav dark:visited:text-dlav'}>
      {props.text}
    </a>
  )
}
