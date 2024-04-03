
import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    return (
        <div style={{ height: "100vh" }}>
            <PrettyChatWindow
                projectId="b8d31099-2422-435f-b0c2-3e4ad37c0a71"
                username={ props.user.username }
                secret={ props.user.secret }
                style={{ height: "100%" }}
            />
        </div>
    )
}

export default ChatsPage