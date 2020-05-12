const $webviews      = $("#webviews");
const $calls         = $("#calls");
const $messages      = $("#messages");
const $user          = $("#user");
const $authedWebview = $("#authedWebview");
const $loginWebview  = $("#loginWebview");
const baseUrl = "https://voice.google.com/u/0";
$authedWebview.hide();
$loginWebview.hide();

function makeUrl(path) {
  return `${baseUrl}/${path}`
}

function goToUrl(e) {
  if(!e.target.dataset.path) return;

  $loginWebview.hide();
  $authedWebview.show();

  let url = makeUrl(e.target.dataset.path);
  if(url != $authedWebview[0].src)
    $authedWebview[0].src = url;
}
$calls.on("click", goToUrl);
$messages.on("click", goToUrl);

function createLoginWebview(e) {
  $authedWebview.hide();
  $loginWebview.show();

  let url = makeUrl(`settings`);
  if(url != $loginWebview[0].src)
    $loginWebview[0].src = url;
}
$user.on("click", createLoginWebview);

(function init() {
  $authedWebview.show();
  $authedWebview[0].src = makeUrl(`calls`);
})();
