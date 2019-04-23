import axios from "axios";
import routes from "../../routes";
const addCommentForm = document.getElementById("jsAddComment");

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `${routes.api}/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  console.log(response);
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
