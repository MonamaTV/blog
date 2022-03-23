import { marked } from "marked"
export default function Content({body}) {
  return (
    body ? <div className="content_ui" dangerouslySetInnerHTML={{__html: marked(body) }}>
    </div> : ""
  )
}
