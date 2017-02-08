import React, {Component} from 'react';


class Form extends Component {
  handleClick() {
    var blogName = this.refs.blogName.value.trim();

    console.log("博客标题 为：" + blogName);

  }
  render() {
    return (
        <form className="row blog-newed">
          <p>在下列输入框输入文字，按下按钮，便可在控制台查看获取的文字</p>
          <input ref="blogName" type="text" className="form-control blog-name" placeholder="Title"/>
          <button type="button" className="btn-info" onClick={this.handleClick.bind(this)}>
            Publish This Blog
          </button>
        </form>

    );
  }


}

export default Form;