import styled, { css } from 'styled-components'
import { theme } from 'theme'

export const typographys: any = {
  title: {
    tag: 'h1',
    style: css`
      width: 100%;
      font-size: 24px;
      font-weight: 300;
      color: ${theme.colors.sampa};
      @media (max-width: 840px) {
        font-size: 32px;
      }
      display: inline-block;
      margin-left: 16px;
    `
  },
  subtitle: {
    tag: 'h2',
    style: css`
      width: 100%;
      font-size: 18px;
      font-weight: 400;
      color: ${theme.colors.darker};
      padding: 8px 0;
      text-align: center;
    `
  },
  link: {
    tag: 'a',
    style: css`
      font-size: 20px;
      font-weight: 600;
      color: ${theme.colors.black};
      text-transform: uppercase;
      text-decoration: none;
      &:hover {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        opacity: 0.8;
        color: ${theme.colors.black};
      }
    `
  },
  normal: {
    tag: 'p',
    style: css`
      width: 100%;
      font-size: 15px;
      font-weight: 300;
      color: ${theme.colors.sampa};
    `
  }
}

export const Container = styled.div.attrs(({ type, href }: any) => ({
  type,
  href,
  as: typographys[type].tag,
  styles: typographys[type].style
}))`
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  ${(props) => props.styles};
`
