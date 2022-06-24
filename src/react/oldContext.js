//根组件
class MessageList extends React.Component {
  getChildContext() {
    return {color: "purple",text: "item text"};
  }

  render() {
    const children = this.props.messages.map((message, index) =>
      <Message key={index} text={message.text} />
    );
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
  text: PropTypes.string
};

//中间组件
class Message extends React.Component {
  render() {
    return (
      <div>
        <MessageItem />
        <Button>Delete</Button>
      </div>
    );
  }
}

//孙组件(接收组件)
class MessageItem extends React.Component {
  render() {
    return (
      <div>
        {this.context.text}
      </div>
    );
  }
}

MessageItem.contextTypes = {
  text: PropTypes.string
};

class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string
};