import markdownStyles from './markdown-styles.module.css'
//import Iframe from 'react-iframe'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: content }}
          />
  )
}

export default PostBody
