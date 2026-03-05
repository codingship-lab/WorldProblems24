import * as React from 'react';

type FlagProps = {
  country?: string;
  className?: string;
};

const flags: Record<string, React.ReactElement> = {
  USA: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><path fill="#b22234" d="M0 0h60v30H0z"/><path fill="#fff" d="M0 3h60v3H0zm0 6h60v3H0zm0 6h60v3H0zm0 6h60v3H0z"/><path fill="#3c3b6e" d="M0 0h30v15H0z"/><g fill="#fff"><path d="M5 2.5l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zM2.5 5l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm-20 2.5l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zM2.5 10l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3zm5 0l.4 1.2h1.3l-1 .8.4 1.2-1-.7-1 .7.4-1.2-1-.8h1.3z"/></g></svg>,
  China: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><path fill="#ee1c25" d="M0 0h60v30H0z"/><path fill="#ff0" d="M10 6l-1.9 1.4.7-2.3L7 3.7h2.2L10 1.5l.8 2.2H13l-1.8 1.4.7 2.3zm5.6 4.3l-.3-1 .9.4-.8-.6.9.4-.3-1-.3 1-.8.6.9-.4-.8.6zm2.3-2.5l-.8.6.9-.4-.3-1-.3 1 .9.4-.8-.6.9.4zm.5 2.7l-.8.6.9-.4-.8-.6.9.4-.3-1-.3 1zm-2.8 2.3l-.8.6.9-.4-.8-.6.9.4-.3-1-.3 1z"/></svg>,
  Russia: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6"><path fill="#fff" d="M0 0h9v3H0z"/><path fill="#d52b1e" d="M0 3h9v3H0z"/><path fill="#0039a6" d="M0 2h9v2H0z"/></svg>,
  India: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path fill="#f93" d="M0 0h900v200H0z"/><path fill="#fff" d="M0 200h900v200H0z"/><path fill="#128807" d="M0 400h900v200H0z"/><g transform="translate(450 300)"><circle r="80" fill="#000080"/><circle r="70" fill="#fff"/><circle r="20" fill="#000080"/><path fill="#000080" d="M-68 18h136l-68 117zM-68-18h136L0-135zm118 68L-18 136V-32zM-118 68L18 136V-32z"/></g></svg>,
  Brazil: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 480"><path fill="#009c3b" d="M0 0h720v480H0z"/><path fill="#ffdf00" d="M360 40L680 240 360 440 40 240z"/><circle cx="360" cy="240" r="140" fill="#002776"/><path fill="#fff" d="M243 252a167 167 0 00234 0 167 167 0 01-234 0"/></svg>,
  Somalia: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 480"><path fill="#4189dd" d="M0 0h720v480H0z"/><path fill="#fff" d="M360 115l58 178-152-110h188l-152 110z"/></svg>,
  Germany: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3"><path d="M0 0h5v3H0z"/><path fill="#D00" d="M0 1h5v2H0z"/><path fill="#FFCE00" d="M0 2h5v1H0z"/></svg>,
  Ukraine: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><path fill="#005BBB" d="M0 0h600v400H0z"/><path fill="#FFD500" d="M0 200h600v200H0z"/></svg>,
  Iran: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 430"><path fill="#239f40" d="M0 0h750v143.3H0z"/><path fill="#da0000" d="M0 286.7h750V430H0z"/><path fill="#fff" d="M0 143.3h750v143.4H0z"/><g fill="#da0000" transform="matrix(2.2 0 0 2.2 375 215)"><g id="e"><g id="d"><g id="c"><g id="b"><path id="a" d="M-.2 0L0 .5.2 0z"/><use href="#a" transform="scale(-1 1)"/></g><use href="#b" transform="rotate(72)"/></g><use href="#c" transform="rotate(72)"/></g><use href="#d" transform="rotate(144)"/></g><path d="M-13.2-2.1l-.3 1-1-.1.6.8-.7.7.9-.4.1 1 .4-1 1 .1-.6-.8.7-.7-.9.4-.1-1z"/></g></svg>,
};

export function CountryFlag({ country, className }: FlagProps) {
  if (!country || !flags[country]) return null;
  const svg = flags[country];
  return React.cloneElement(svg, {
    ...svg.props,
    className,
  });
}
