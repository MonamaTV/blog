import { marked } from "marked"
export default function Content({body}) {
  return (
    body ? <div dangerouslySetInnerHTML={{__html: marked(body) }}>
    </div> : ""
  )
}
